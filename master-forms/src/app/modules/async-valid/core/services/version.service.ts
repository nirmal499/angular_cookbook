import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { vLog } from "../../interfaces/vLog";
import { delay, map } from "rxjs/operators";
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { Observable, of } from "rxjs";
import { compareVersion } from "../../utils";
import { Apps } from "../../constants/apps";

@Injectable({
  providedIn: "root",
})
export class VersionService {
  constructor(private http: HttpClient) {}

  getVersionLog() {
    return this.http.get<{ vLog: vLog }>("assets/data.json").pipe(
      map((res) => res.vLog),
      delay(2000)
    );
  }
  /* you might rely on some validations from a backend API, for instance. These situations
        would require something called asynchronous validators. In this recipe, you're going to
        create your first asynchronous validator. */

  versionValidator(appNameControl: AbstractControl): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      // if we don't have an app selected, do not validate
      if (!appNameControl.value) {
        return of(null);
      }
      return this.getVersionLog().pipe(
        map((vLog) => {
          const newVersion = control.value;
          const previousVersion = vLog[appNameControl.value as Apps];
          // check if the new version is greater than previous version
          return compareVersion(newVersion, previousVersion) === 1
            ? null
            : {
                newVersionRequired: previousVersion,
              };
        })
      );
    };
  }
}
