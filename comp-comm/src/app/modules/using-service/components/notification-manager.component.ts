import { Component, OnInit } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { first } from "rxjs/operators";
import { NotificationsService } from "../services/notifications.service";

@Component({
  selector: "app-notification-manager",
  template: `
    <div>
      <p>Notification Manager</p>
      <p>Notifications Count: {{ notificationsCount$ | async }}</p>
    </div>
    <div>
      <button (click)="addNotification()">Add Notification</button>
    </div>
    <div>
      <button (click)="removeNotification()">Remove Notification</button>
    </div>
    <div>
      <button (click)="resetCount()">Reset Count</button>
    </div>
  `,
  styles: [],
})
export class NotificationManagerComponent implements OnInit {
  notificationsCount$!: Observable<number>;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountValue(callback: (value: number) => void) {
    /* The RxJS first() operator is generally used when you are only 
      interested in the first item emitted by the source observable  */
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification(): void {
    this.getCountValue((countVal) => {
      this.notificationsService.setCount(++countVal);
    });
  }

  removeNotification() {
    this.getCountValue((countVal) => {
      if (countVal === 0) {
        return;
      }
      this.notificationsService.setCount(--countVal);
    });
  }

  resetCount() {
    this.notificationsService.setCount(0);
  }
}
