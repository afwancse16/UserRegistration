import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';

const routes: Routes = [
  { path: '', component: UserSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSummaryRoutingModule {}
