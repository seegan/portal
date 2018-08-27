import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

export interface user{
    username:string;
    role:string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	username:string = ""
	role:string = ""
	userdetail:Array<user>

	constructor(private user: UserService) {
		this.userdetail = [];
	}

	ngOnInit() {
		this.user.getUserDetail()
			.subscribe( (data : any) => {
				this.userdetail["username"] = data.username
				this.userdetail["role"] = ""
				if (data.roles.length >= 1) {
					this.userdetail["role"] = data.roles[0].name
				}
			}
		)
	}
}
