import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-notification-manager",
  template: `
    <div>
      <p>Notification Manager</p>
      <p>Notifications Count: {{ count }}</p>
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
  @Input() count = 0;
  @Output() countChanged = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  addNotification(): void {
    this.count++;
    this.countChanged.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countChanged.emit(this.count);
  }

  resetCount() {
    this.count = 0;
    this.countChanged.emit(this.count);
  }
}
