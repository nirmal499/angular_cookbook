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
          <a routerLink="/inout"
            >Components communication using component @Input(s) and
            @Output(s)</a
          >
        </li>
        <li>
          <a routerLink="/using-service"
            >Components communication using services</a
          >
        </li>
        <li>
          <a routerLink="/setter">Version Logging</a>
        </li>
        <li>
          <a routerLink="/temp-var"
            >Accessing child component using Template Variables</a
          >
        </li>
        <li>
          <a routerLink="/dynamic-comp"
            >Creating your first Dynamic component in Angular</a
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
