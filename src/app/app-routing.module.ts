import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorComponent } from './layout/visitor/visitor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { UserComponent } from './layout/user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';


import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

const routes: Routes = [
	{
		path: '',
		component : VisitorComponent,
	    children: [
			{
				path : '',
				component : HomeComponent,
			},
			{
				path: 'admin/login',
				component: LoginComponent,
				canActivate : [UnauthGuard]
			},
		]	
	},
	{
		path: '',
		component : UserComponent,
	    children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				canActivate : [AuthGuard]
			},
			{
				path : 'roles',
				component : RoleComponent,
				canActivate : [AuthGuard]
			},
		]
	},
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }