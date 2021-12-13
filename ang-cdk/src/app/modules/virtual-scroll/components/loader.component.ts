import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loader",
  template: `
    <button class="btn btn-light">
      <span>Tap me</span> <span><div class="lds-hourglass"></div></span>
    </button>
  `,
  styles: [],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
