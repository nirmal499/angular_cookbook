import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div>
      <h2>Components communication</h2>
    </div>
    <div>
      <ul>
        <li>
          <a routerLink="virtual-scroll">Using Virtual Scroll for huge lists</a>
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
