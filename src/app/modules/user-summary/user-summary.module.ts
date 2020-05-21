import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSummaryRoutingModule } from './user-summary-routing.module';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';

@NgModule({
  declarations: [UserSummaryComponent],
  imports: [
    CommonModule,
    UserSummaryRoutingModule
  ]
})
export class UserSummaryModule { }
