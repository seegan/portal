import { Injectable } from '@angular/core';
import { IRole } from './role';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth.service';



@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private auth: AuthService) { 
  }

  protected headers: HttpHeaders = new HttpHeaders();


  getRoles() {
    this.auth.addHeader('Content-Type', 'application/json')
    this.http.get('/api/v1/admin/roles',
    {
      'headers': this.auth.getHttpHeaders(),
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
