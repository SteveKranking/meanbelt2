import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollNewComponent } from './poll-new/poll-new.component';
import { PollShowComponent } from './poll-show/poll-show.component';
import { OptionsCreateComponent } from './options-create/options-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'create',
    component: PollNewComponent,
  },
  {
    path:'poll/:id',
    component: PollShowComponent,
  },
  {
    path: 'poll/:id/optionscreate',
    component: OptionsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }