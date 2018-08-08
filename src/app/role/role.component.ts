import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/role.service';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private role: RoleService) { }

  ngOnInit() {
  	this.role.getRoles()
  }

}
