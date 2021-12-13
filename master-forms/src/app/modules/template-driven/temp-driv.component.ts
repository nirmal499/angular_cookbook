import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-temp-driv",
  template: `
    <h4>Creating your first Template-Driven Angular form</h4>

    <div class="content" role="main">
      <app-version-control></app-version-control>
    </div>
  `,
  styles: [],
})
export class TempDrivComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
