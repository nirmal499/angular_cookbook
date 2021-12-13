import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: `
    <p>Page you are looking for does not exists</p>
    <p>Click <a routerLink="/">here</a> to go to home page</p>
  `,
  styles: [],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
