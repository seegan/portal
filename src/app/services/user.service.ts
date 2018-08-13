import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient, private Auth: AuthService) { }


  getUserDetail() {
    this.Auth.addHeader('Content-Type', 'application/json')
    this.Http.get('/api/v1/admin/user',
    {
      'headers': this.Auth.getHttpHeaders(),
      'responseType': 'json'
    })
    .subscribe( 
      data => {
        return data
      },
      err => {
        console.log('Failed')
      }
    )
  }



}
