import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { 

  }


  protected headers: HttpHeaders = new HttpHeaders();

  addHeader(key: string, value: string) {
    this.headers = this.headers.append(key, value);
  }
  setHeader(key: string, value: string) {
    this.headers = this.headers.set(key, value);
  }
  getHttpHeaders() {
    return this.headers;
  }


  loggedIn() {
    return !!localStorage.getItem('_user_token')
  }


  getToken() {
    return localStorage.getItem('_user_token')
  }


  loginUser(username, password) {
    this.addHeader('Content-Type', 'application/json')
    this.http.post('/api/auth/login', {
      'username':username,
      'password':password
    },
    {
      'headers': this.getHttpHeaders(),
      'responseType': 'text'
    })
    .subscribe( 
      data => {
        console.log(data)
        localStorage.setItem('_user_token', data)
        this.router.navigate(['/dashboard'])
      },
      err => {
        console.log('Login Failed')
        localStorage.removeItem('_user_token')
      }
    )
  }
  logoutUser() {
    localStorage.removeItem('_user_token')
    this.router.navigate(['admin/login'])
  }







}
