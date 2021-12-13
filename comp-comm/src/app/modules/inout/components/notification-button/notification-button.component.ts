import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-notification-button",
  template: `
    <div>
      <p>Notification Button</p>
      <div>{{ count }}</div>
    </div>
  `,
  styles: [],
})
export class NotificationButtonComponent implements OnInit {
  @Input() count = 0;
  constructor() {}

  ngOnInit(): void {}
}
