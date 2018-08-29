import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

import { TokenInterceptorService } from './token-interceptor.service';
import { HeaderComponent } from './layout/header/header.component';
import { LeftmenuComponent } from './layout/leftmenu/leftmenu.component';
import { RightmenuComponent } from './layout/rightmenu/rightmenu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './layout/user/user.component';
import { VisitorComponent } from './layout/visitor/visitor.component';
import { RoleListComponent, RoleAddComponent } from './role';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    LeftmenuComponent,
    RightmenuComponent,
    FooterComponent,
    LayoutComponent,
    UserComponent,
    VisitorComponent,
    RoleAddComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, UnauthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
