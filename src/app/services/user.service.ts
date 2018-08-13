import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient, private Auth: AuthService) { }


  getUserDetail() {
    this.Auth.addHeader('Content-Type', 'application/json')
    return this.Http.get('/api/v1/admin/user',
    {
      'headers': this.Auth.getHttpHeaders(),
      'responseType': 'json'
    })
  }


}
