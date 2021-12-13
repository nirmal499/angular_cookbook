import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inout",
  template: `
    <div>
      <div>
        <h4>Input Component</h4>
        <h3>Count in Parent Component: {{ notificationsCount }}</h3>
      </div>
      <div>
        <app-notification-manager
          (countChanged)="updateNotificationsCount($event)"
          [count]="notificationsCount"
        >
        </app-notification-manager>
      </div>
      <div>
        <app-notification-button [count]="notificationsCount">
        </app-notification-button>
      </div>
    </div>
  `,
  styles: [],
})
export class InoutComponent implements OnInit {
  notificationsCount = 10;
  constructor() {}

  ngOnInit(): void {}

  updateNotificationsCount(count: number) {
    this.notificationsCount = count;
  }
}
