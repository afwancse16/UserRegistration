import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PHONE_PATTERN, NAME_PATTERN, MatchEmail, PASSWORD_PATTERN, EXISTING_EMAILS } from './user-registration.helper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { UserRegistrationService } from '../../../../services/user-registration.service';
import { catchError, switchMap, takeUntil, finalize } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  titleData = [
    {id: 1, name: 'Mr'},
    {id: 2, name: 'Mrs'},
    {id: 3, name: 'Prof'}
  ];
  isSpinner = false;
  private isAlive$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private userService: UserRegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.isAlive$.next();
    this.isAlive$.complete();
  }

  public initializeForm() {
    this.signupForm = this.fb.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      lastName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, MatchEmail()]],
      dob: [null, [Validators.required]],
      phone: ['', [Validators.required, , Validators.pattern(PHONE_PATTERN)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
    });
  }

  public onTitleChange = (item) => this.signupForm.get('title').setValue(item.name);

  public getFormControl = (field) => this.signupForm.get(field);

  public onDropdownToggle = () => {
    this.getFormControl('title').markAsTouched();
    this.getFormControl('title').markAsDirty();
  }

  public onSubmit = () => {
    const { email } =  this.signupForm.value;

    if (EXISTING_EMAILS.includes(email)) {
      this.displayModal('Email exists.');
      return;
    }
    this.isSpinner = true;
    this.userService.regiterUser(this.signupForm.value).pipe(
      takeUntil(this.isAlive$),
      catchError(() => {
        this.displayModal('User registration failed.');
        return EMPTY;
      }),
      finalize(() => this.isSpinner = false),
      switchMap(() => this.userService.login().pipe(
          catchError(() => {
            const { id, email } = this.userService.user.getValue();
            this.displayModal(`The user with ID ${id} and email ${email} cannot be logged in`);
            return EMPTY;
          })
        )
      )
    )
    .subscribe(() => this.router.navigate(['/usersummary']));
  }

  public displayModal(msg: string) {
    const modal = this.modalService.open(ErrorModalComponent);
    modal.componentInstance.message = msg;
  }
}
