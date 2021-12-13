import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-form",
  template: `
    <h4>
      {{ title }}
    </h4>

    <div class="content" role="main">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class CustomFormComponent implements OnInit {
  title = "Writing your own custom Form Control using ControlValueAccessor";
  constructor() {}

  ngOnInit(): void {}
}
