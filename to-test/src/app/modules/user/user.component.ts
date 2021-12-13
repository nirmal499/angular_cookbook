import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  template: `
    <div><h3>User Header</h3></div>
    <div>
      <ul>
        <li><a routerLink="add-book">Add Book</a></li>
        <li><a routerLink="delete-book">Delete Book</a></li>
      </ul>
    </div>
    <router-outlet></router-outlet>
    <div><h3>User Footer</h3></div>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
