import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path : '',
		component : HomeComponent,
	},
	{
		path : 'admin/login',
		component : LoginComponent,
	},
	{
		path : 'dashboard',
		component : DashboardComponent,
		canActivate : [AuthGuard]
	},
	{
		path : 'role',
		component : RoleComponent,
		canActivate : [AuthGuard]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }