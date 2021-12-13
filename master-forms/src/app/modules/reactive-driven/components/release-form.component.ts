import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { IReleaseLog, ReleaseLog } from "../classes/release-log";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
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
      .ng-valid:not(form),
      .ng-valid.required {
        border-bottom: 3px solid #259f2b;
      }
      /* Invalid form input */
      .ng-invalid:not(form) {
        border-bottom: 3px solid #c92421;
      }
    </style>
    <form [formGroup]="releaseForm" (ngSubmit)="formSubmit(releaseForm)">
      <div class="form-group">
        <label for="appName">Select App</label>
        <select
          formControlName="app"
          class="form-control"
          id="appName"
          required
        >
          <option value="">--Choose--</option>
          <option *ngFor="let app of apps" [value]="app">{{ app }}</option>
        </select>
        <div
          [hidden]="
            releaseForm.get('app')!.valid || releaseForm.get('app')!.pristine
          "
          class="alert-danger"
        >
          Please choose an app
        </div>
      </div>
      <div class="form-group">
        <label for="versionNumber">Version Number</label>
        <input
          formControlName="version"
          type="text"
          class="form-control"
          id="versionNumber"
          aria-describedby="versionHelp"
          placeholder="Enter version number"
        />
        <small id="versionHelp" class="form-text text-muted"
          >Use semantic versioning (x.x.x)</small
        >
        <!-- We're using the condition with .pristine to make sure that as soon as the user selects
            the correct input and the input is modified, we hide the error again so that it doesn't show
            while the user is typing in the input or making another selection. Finally, we made sure
            that the form cannot even be submitted if the values of the form controls are invalid. We
            disabled the submit button using [disabled]="releaseForm.invalid" -->
        <div
          [hidden]="
            releaseForm.get('version')!.valid ||
            releaseForm.get('version')!.pristine
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
  releaseForm = new FormGroup({
    app: new FormControl("", [Validators.required]),
    version: new FormControl("", [
      Validators.required,
      Validators.pattern(this.versionInputRegex),
    ]),
  });
  constructor() {}

  formSubmit(form: FormGroup): void {
    const { app, version } = form.value;
    console.log({ app, version });

    const newLog: ReleaseLog = new ReleaseLog(app, version);
    this.newReleaseLog.emit(newLog);
  }

  ngOnInit(): void {}
}
