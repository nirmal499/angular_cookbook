import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeeComponent } from "./employee.component";
import { BucketService } from "../services/bucket.service";
import { EmployeeBucketService } from "./services/employee-bucket.service";
import { APP_CONFIG } from "../constants/app.config";
import { EmployeeConfig } from "./constants/employee.config";

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule, SharedModule],
  /*  If you now log in as an employee in the app and try to remove an item, you'll see an alert
      pop up, which says Employees cannot delete items */
  // providers: [
  //   {
  //     provide: BucketService,
  //     useClass: EmployeeBucketService,
  //   },
  // ],

  /* You can see that the delete button is visible
    to the admin but hidden for the employee. It's all thanks to the magic of value providers */
  providers: [
    {
      provide: APP_CONFIG,
      useValue: EmployeeConfig,
    },
  ],
})
export class EmployeeModule {}
