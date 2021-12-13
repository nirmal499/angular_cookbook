import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsingServiceRoutingModule } from "./using-service-routing.module";
import { UsingServiceComponent } from "./using-service.component";
import { NotificationButtonComponent } from './components/notification-button.component';
import { NotificationManagerComponent } from './components/notification-manager.component';

@NgModule({
  declarations: [UsingServiceComponent, NotificationButtonComponent, NotificationManagerComponent],
  imports: [CommonModule, UsingServiceRoutingModule],
})
export class UsingServiceModule {}
