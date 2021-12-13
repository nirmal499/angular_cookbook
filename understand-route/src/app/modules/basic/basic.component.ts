import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic",
  template: `
    <h4>Basic Component</h4>
    <ul>
      <li><a routerLink="about-us">About Us</a></li>
      <li><a routerLink="contact-us">Contact Us</a></li>
    </ul>
    <p>It's children are below</p>
    <router-outlet></router-outlet>
    <app-basic-footer></app-basic-footer>
  `,
  styles: [],
})
export class BasicComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
