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
          <a routerLink="/temp-driven"
            >Creating your first template-driven Angular form</a
          >
        </li>
        <li>
          <a routerLink="reactive-driven">Creating your first Reactive form</a>
        </li>
        <li>
          <a routerLink="async-valid"
            >Creating an asynchronous validator function</a
          >
        </li>
        <li>
          <a routerLink="custom-form"
            >Writing your own custom form control using ControlValueAccessor</a
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
