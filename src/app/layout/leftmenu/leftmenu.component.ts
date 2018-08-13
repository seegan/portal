import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html'
})
export class LeftmenuComponent implements OnInit {

	@Input() userdetail: array;
	constructor() {
		console.log(this.message)
	}

	ngOnInit() {

	}

}
