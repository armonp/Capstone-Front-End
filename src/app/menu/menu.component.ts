import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Menu[] = [
    new Menu("Users", "/users/list", "The User List Page"),
    new Menu("Vendors", "/vendors/list", "The Vendor List Page")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
