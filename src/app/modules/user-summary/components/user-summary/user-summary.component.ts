import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../../../../services/user-registration.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss']
})
export class UserSummaryComponent {
  public userData$ = this.userService.user$;

  constructor(private userService: UserRegistrationService) { }
}
