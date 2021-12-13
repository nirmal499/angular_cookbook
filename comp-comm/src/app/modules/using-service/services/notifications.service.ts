import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  private count = new BehaviorSubject<number>(10);
  count$ = this.count.asObservable();

  constructor() {}

  setCount(countVal: number) {
    /* Whatever value countVal gets it gets placed into the stream through next() operator */
    this.count.next(countVal);
  }
}
