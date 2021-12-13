import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { IReleaseLog, ReleaseLog } from "../classes/release-log";
import { NgForm } from "@angular/forms";
import { Apps } from "../constants/apps";
import { REGEXES } from "../constants/regexes";

@Component({
  selector: "app-release-form",
  template: `
    <style>
      .alert-danger {
        color: #d8000c;
        background-color: #ffbaba;
        margin-top: 16px;
      }
      /* Valid form input */
      .ng-valid[required],
      .ng-valid.required {
        border-bottom: 3px solid #259f2b;
      }

      /* Invalid form input */
      .ng-invalid:not(form) {
        border-bottom: 3px solid #c92421;
      }
    </style>
    <form #releaseForm="ngForm" (ngSubmit)="formSubmit(releaseForm)">
      <div class="form-group">
        <label for="appName">Select App</label>
        <select
          #nameInput="ngModel"
          name="app"
          [(ngModel)]="newLog.app"
          class="form-control"
          id="appName"
          required
        >
          <option value="">--Choose--</option>
          <option *ngFor="let app of apps" [value]="app">{{ app }}</option>
        </select>
        <!-- The name input shouldn't be empty and an app should be selected from the select box -->
        <!-- RED alert when the input is invalid -->
        <div
          [hidden]="nameInput.valid || nameInput.pristine"
          class="alert-danger"
        >
          Please choose an app
        </div>
      </div>
      <div class="form-group">
        <label for="versionNumber">Version Number</label>
        <input
          #versionInput="ngModel"
          [pattern]="versionInputRegex"
          name="version"
          [(ngModel)]="newLog.version"
          type="text"
          class="form-control"
          id="versionNumber"
          aria-describedby="versionHelp"
          placeholder="Enter version number"
        />
        <small id="versionHelp" class="form-text text-muted"
          >Use semantic versioning (x.x.x)</small
        >
        <div
          [hidden]="
            versionInput.value && (versionInput.valid || versionInput.pristine)
          "
          class="alert-danger"
        >
          Please write an appropriate version number
        </div>
      </div>
      <button
        type="submit"
        [disabled]="releaseForm.invalid"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  `,
  styles: [],
})
export class ReleaseFormComponent implements OnInit {
  @Output() newReleaseLog = new EventEmitter<ReleaseLog>();
  apps = Object.values(Apps);
  newLog: IReleaseLog = {
    app: Apps.CALENDAR,
    version: "0.0.0",
  };
  versionInputRegex = REGEXES.SEMANTIC_VERSION;
  constructor() {}

  formSubmit(form: NgForm): void {
    const { app, version } = form.value;
    const newLog: ReleaseLog = new ReleaseLog(app, version);
    this.newReleaseLog.emit(newLog);
  }

  ngOnInit(): void {}
}
