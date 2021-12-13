import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-driv",
  template: `
    <h4>Creating your first Reactive form</h4>

    <div class="content" role="main">
      <app-version-control></app-version-control>
    </div>
  `,
  styles: [],
})
export class ReactiveDrivComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
