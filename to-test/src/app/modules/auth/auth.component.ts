import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  template: `
    <div><h3>Auth Header</h3></div>
    <div>
      <ul>
        <li>
          <a routerLink="login" [queryParams]="{ name: myName, email: myEmail }"
            >Login</a
          >
        </li>
        <li>
          <a routerLink="signup">Sign Up</a>
        </li>
      </ul>
    </div>
    <router-outlet></router-outlet>
    <div><h3>Auth Footer</h3></div>
  `,
  styles: [],
})
export class AuthComponent implements OnInit {
  myName = "Rajesh";
  myEmail = "rajesh@mail.com";
  constructor() {}

  ngOnInit(): void {}
}
