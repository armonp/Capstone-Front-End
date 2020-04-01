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
    new Menu("Vendors", "/vendor/list", "The Vendor List Page"),
    new Menu("Products", "/product/list", "The Product List Page"),
    new Menu("Requests", "/request/list", "The Request List Page"),
    new Menu("Reviews", "/reviews/{{user.id}}", "List of Reviews for {{user.firstname}}"),
    new Menu("About", "/about", "About Page"),
    new Menu("Login/Out", "/users/login", "Login or Out")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
