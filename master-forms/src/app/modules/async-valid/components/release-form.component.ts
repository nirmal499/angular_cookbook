import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { IReleaseLog, ReleaseLog } from "../classes/release-log";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Apps } from "../constants/apps";
import { REGEXES } from "../constants/regexes";
import { VersionService } from "../core/services/version.service";
import { takeWhile } from "rxjs/operators";

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
      <ng-container *ngIf="releaseForm.get('version') as versionControl">
        <!-- We'll use our custom error, newVersionRequired, from the validator function to show the error when the
            specified version isn't newer than the previous version -->
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
          <div
            [hidden]="
              releaseForm.get('version')!.valid ||
              releaseForm.get('version')!.pristine
            "
            class="alert-danger"
          >
            Please write an appropriate version number
          </div>
          <div
            *ngIf="
              versionControl.getError('newVersionRequired') &&
              !versionControl.pristine
            "
            class="alert-danger"
          >
            The version number should be greater than the last version '{{
              versionControl.errors?.newVersionRequired
            }}'
          </div>
          <!-- The version number should be greater than the last version '{{versionControl.
                errors['newVersionRequired']}}' -->
        </div>
        <button
          *ngIf="versionControl.status !== 'PENDING'; else loader"
          type="submit"
          [disabled]="releaseForm.invalid"
          class="btn btn-primary"
        >
          Submit
        </button>
        <!-- One issue right now is that we are able to submit the form while the asynchronous
            validation is in progress. That's because Angular, by default, marks the error as
            null until the validation is done. To tackle this, we can show a loading message
            instead of the submit button in the template -->
      </ng-container>
      <ng-template #loader> Please wait... </ng-template>
    </form>
  `,
  styles: [],
})
export class ReleaseFormComponent implements OnInit, OnDestroy {
  @Output() newReleaseLog = new EventEmitter<ReleaseLog>();
  apps = Object.values(Apps);

  isComponentAlive = false;
  newLog: IReleaseLog = {
    app: Apps.CALENDAR,
    version: "0.0.0",
  };
  versionInputRegex = REGEXES.SEMANTIC_VERSION;
  releaseForm = new FormGroup({
    app: new FormControl("", Validators.required),
    version: new FormControl("", [
      Validators.required,
      Validators.pattern(this.versionInputRegex),
    ]),
  });
  constructor(private versionService: VersionService) {}

  formSubmit(form: FormGroup): void {
    /* We still have an issue where the user can type and press Enter quickly to submit
      the form. To prevent this from happening, let's add a check in our formSubmit
      method */
    if (form.get("version")!.status === "PENDING") {
      return;
    }

    const { app, version } = form.value;
    console.log({ app, version });

    const newLog: ReleaseLog = new ReleaseLog(app, version);
    this.newReleaseLog.emit(newLog);
  }

  ngOnInit(): void {
    this.isComponentAlive = true;
    this.releaseForm
      .get("version")!
      .setAsyncValidators(
        this.versionService.versionValidator(this.releaseForm.get("app")!)
      );

    /* If we select a valid version number and
        change the app, we can still submit the form with the entered version number
        although it is logically wrong. To handle this, we should update the validation of the
        'version' form control whenever the value of the 'app' form control changes. */
    this.releaseForm
      .get("app")!
      .valueChanges.pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(() => {
        this.releaseForm.get("version")!.updateValueAndValidity();
      });
    /* One more interesting thing in the recipe is that if we added a valid version number
      and changed the app, we could still submit the form. We handle that by adding a
      subscription to .valueChanges of the 'app' form control, so whenever that
      happens, we trigger another validation on the 'version' form control using the
      .updateValueAndValidity() method */
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
