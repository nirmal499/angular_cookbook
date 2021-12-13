import { Component, OnInit } from "@angular/core";
import { ReleaseLog } from "../classes/release-log";

@Component({
  selector: "app-version-control",
  template: `
    <div class="version-control">
      <app-release-form
        (newReleaseLog)="addNewReleaseLog($event)"
      ></app-release-form>
      <app-release-logs [logs]="releaseLogs"></app-release-logs>
    </div>
  `,
  styles: [],
})
export class VersionControlComponent implements OnInit {
  releaseLogs: ReleaseLog[] = [];
  constructor() {}

  addNewReleaseLog(log: ReleaseLog) {
    this.releaseLogs.unshift(log);
  }

  ngOnInit(): void {}
}
