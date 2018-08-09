import { Injectable } from '@angular/core';
import { IRole } from './role';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth.service';



@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private Http: HttpClient, private Auth: AuthService) { 
  }
  protected headers: HttpHeaders = new HttpHeaders();

  getRoles() {
    this.Auth.addHeader('Content-Type', 'application/json')
    this.Http.get('/api/v1/admin/roles',
    {
      'headers': this.Auth.getHttpHeaders(),
      'responseType': 'json'
    })
    .subscribe( 
      data => {
        console.log(data)
      },
      err => {
        console.log('Failed')
      }
    )
  }

}
