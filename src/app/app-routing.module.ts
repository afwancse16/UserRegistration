import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/user-registration/user-registration.module').then(
        m => m.UserRegistrationModule
      )
  },
  {
    path: 'usersummary',
    loadChildren: () =>
      import('./modules/user-summary/user-summary.module').then(
        m => m.UserSummaryModule
      )
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
