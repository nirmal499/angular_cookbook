import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div>
      <h2>Components communication</h2>
    </div>
    <div>
      <ul>
        <li><a routerLink="basic">Basic Routing</a></li>
        <li><a routerLink="about-us2">About Us2</a></li>
        <li><a routerLink="contact-us2">Contact Us2</a></li>
        <li><a routerLink="about-us3">About Us3</a></li>
        <li><a routerLink="contact-us3">Contact Us3</a></li>
      </ul>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
