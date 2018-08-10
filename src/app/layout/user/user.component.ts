import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	message: string
	constructor(private user: UserService) {
		this.message = "My Message ss"
	}

	ngOnInit() {
		this.user.getUserDetail()
		this.message = "My Message gg"
	}
}
