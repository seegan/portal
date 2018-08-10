import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	@Input() message: string;
  	constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  
  logOut() {
  	this.Auth.logoutUser()
  }

}
