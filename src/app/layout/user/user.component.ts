import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	username:string = ""
	role:string = ""
	userdetail:array = []

	constructor(private user: UserService) {
		this.userdetail.username = "Loading ..."
		this.userdetail.role = "Loading ..."
	}

	ngOnInit() {
		this.user.getUserDetail()
			.subscribe( data => {
				this.userdetail.username = data.username.capitalize()

				if (data.roles.length >= 1) {
					this.userdetail.role = data.roles[0].name
				}
				//this.message = data.message.capitalize(),
			}
		)
	}
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}