import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


	message: string
	constructor() {
		 this.message = "My Message ss";
	}

	ngOnInit() {
		this.message = "My Message gg";
	}

}
