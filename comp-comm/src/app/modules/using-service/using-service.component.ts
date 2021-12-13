import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-using-service",
  template: `
    <div>
      <div>
        <h4>Using Service</h4>
      </div>
      <div>
        <app-notification-manager> </app-notification-manager>
      </div>
      <div>
        <app-notification-button> </app-notification-button>
      </div>
    </div>
  `,
  styles: [],
})
export class UsingServiceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
