import { Component, Input, OnInit } from "@angular/core";
import { ReleaseLog } from "../classes/release-log";

@Component({
  selector: "app-release-logs",
  template: `
    <h5>Releases Logs</h5>
    <div class="logs">
      <div class="logs__item" *ngFor="let log of logs">
        {{ log.message }}
      </div>
    </div>
  `,
  styles: [],
})
export class ReleaseLogsComponent implements OnInit {
  /* Here we are using `!` becoz in versio-control.component.ts we have initialized the
    releaseLogs array with an empty array
    releaseLogs: ReleaseLog[] = [];
  */
  @Input() logs!: ReleaseLog[];
  constructor() {}

  ngOnInit(): void {}
}
