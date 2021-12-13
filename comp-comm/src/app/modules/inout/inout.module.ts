import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InoutComponent } from "./inout.component";
import { NotificationButtonComponent } from "./components/notification-button/notification-button.component";
import { NotificationManagerComponent } from "./components/notification-manager/notification-manager.component";
import { InoutRoutingModule } from "./inout-routing.module";

@NgModule({
  declarations: [
    NotificationButtonComponent,
    NotificationManagerComponent,
    InoutComponent,
  ],
  imports: [CommonModule, InoutRoutingModule],
})
export class InoutModule {}
