import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	@Input() userdetail: Array<{username: string, role: string}>
  	constructor(private Auth: AuthService) { }

	ngOnInit() {
	}

	logOut() {
		this.Auth.logoutUser()
	}

}
