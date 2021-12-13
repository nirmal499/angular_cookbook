import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-async-valid",
  template: `
    <h4>Creating an asynchronous validator function</h4>

    <div class="content" role="main">
      <app-version-control></app-version-control>
    </div>
  `,
  styles: [],
})
export class AsyncValidComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
