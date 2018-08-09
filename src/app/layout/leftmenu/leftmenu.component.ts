import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html'
})
export class LeftmenuComponent implements OnInit {

	@Input() message: string;
	constructor() {
		console.log(this.message)
	}

	ngOnInit() {

	}

}
