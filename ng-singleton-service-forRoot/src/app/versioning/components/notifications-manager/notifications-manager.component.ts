import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NotificationsService } from "../../../services/notifications.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-notifications-manager",
  templateUrl: "./notifications-manager.component.html",
  styleUrls: [],
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$!: Observable<number>;
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountValue(callback: any) {
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    this.getCountValue((countVal: number) => {
      this.notificationsService.setCount(++countVal);
    });
  }

  removeNotification() {
    this.getCountValue((countVal: number) => {
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
