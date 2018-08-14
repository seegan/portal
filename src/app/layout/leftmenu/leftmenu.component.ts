import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html'
})
export class LeftmenuComponent implements OnInit {

	@Input() userdetail: Array<{username: string, role: string}>
	constructor() {
	}

	ngOnInit() {
	}

}
