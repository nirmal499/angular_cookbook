import { Injectable } from "@angular/core";
import { BucketService } from "src/app/services/bucket.service";

@Injectable({
  providedIn: "root",
})
export class EmployeeBucketService extends BucketService {
  constructor() {
    super();
  }

  /* We will now override the removeItem() method to simply display a simple
    alert() mentioning that the employees can't remove items from the bucket */

  removeItem() {
    alert("Employees can not delete items");
  }
}
