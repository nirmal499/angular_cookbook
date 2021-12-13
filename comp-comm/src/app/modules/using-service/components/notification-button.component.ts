import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NotificationsService } from "../services/notifications.service";

@Component({
  selector: "app-notification-button",
  template: `
    <div>
      <p>Notification Button</p>
      <div>{{ notificationsCount$ | async }}</div>
    </div>
  `,
  styles: [],
})
export class NotificationButtonComponent implements OnInit {
  notificationsCount$!: Observable<number>;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }
}
