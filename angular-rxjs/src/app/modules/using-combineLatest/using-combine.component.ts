import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-using-combine",
  template: `
    <h4>Using combineLatest to subscribe to multiple streams together</h4>
    <ul>
      <li><a routerLink="home">Home</a></li>
      <li><a routerLink="home2">Home2</a></li>
    </ul>
    <div class="content" role="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class UsingCombineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
