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
        console.log(data)
      },
      err => {
        console.log('Failed')
      }
    )
  }


/*
To Java usercontroller




  @PreAuthorize("hasRole('ADMIN_ACCESS')")
    @GetMapping("/user")
    public ApplicationUser getUserByName() {
    ApplicationUser userData = userDetail.getCurrentUserData();
      return userData;
    }



public class UserDetail {
  
  @Autowired
  private  UserDao userDao;
  
    public ApplicationUser getCurrentUserData() {

    ApplicationUser user = (ApplicationUser)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    ApplicationUser userData = userDao.findByUsername(user.getUsername());
      return userData;
    }
    
}


    
*/



}
