import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div>
      <h2>Understanding and Using Angular Directives</h2>
    </div>
    <div>
      <ul>
        <li>
          <a routerLink="/ad-attribute-directive"
            >Using attribute directives to handle the appearance of elements</a
          >
        </li>
        <li>
          <a routerLink="/read-time-directive"
            >Creating a directive to calculate the read time for articles</a
          >
        </li>
        <li>
          <a routerLink="/scroll-to-directive"
            >Creating a basic directive that allows you to vertically scroll to
            an element</a
          >
        </li>
        <li>
          <a routerLink="/custom-directive"
            >Your first custom structural directive</a
          >
        </li>
        <li>
          <a routerLink="multi-structural-directive"
            >How to use *ngIf and *ngSwitch together</a
          >
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
