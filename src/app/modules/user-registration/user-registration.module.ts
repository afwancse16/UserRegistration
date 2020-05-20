import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@NgModule({
  declarations: [
    UserRegistrationComponent,
    ValidationErrorComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRegistrationRoutingModule,
    NgbDropdownModule
  ]
})
export class UserRegistrationModule {}
