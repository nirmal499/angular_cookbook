import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-unsub-stream",
  template: `
    <h4>Unsubscribing streams to avoid memory leaks</h4>

    <ul>
      <li><a routerLink="home">Home</a></li>
      <li><a routerLink="about">About</a></li>
      <li><a routerLink="home2">Home2</a></li>
    </ul>
    <!-- <div routerLink="/home" class="header-links__link btn btn-link btn-light">
      Home
    </div>
    <div routerLink="/about" class="header-links__link btn btn-link btn-light">
      About
    </div> -->

    <div class="content" role="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class UnsubStreamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
