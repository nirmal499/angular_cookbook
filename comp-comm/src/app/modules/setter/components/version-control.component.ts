import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-version-control",
  template: `
    <form [formGroup]="versionForm" (ngSubmit)="formSubmit()">
      <div class="form-group">
        <label for="versionNumber">Version Number</label>
        <input
          formControlName="version"
          type="text"
          id="versionNumber"
          placeholder="Enter version number"
        />
        <small id="versionHelp">Use semantic versioning (x.x.x)</small>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div>
      <h3>Using Setters for intercepting input property</h3>
      <app-vc-logs [vName]="versionName"></app-vc-logs>
    </div>
    <hr />
    <hr />
    <div>
      <h3>Using ngOnChanges to intercept input property changes</h3>
      <app-vc-logs1 [vName]="versionName"></app-vc-logs1>
    </div>
  `,
  styles: [],
})
export class VersionControlComponent implements OnInit {
  versionForm = new FormGroup({
    version: new FormControl("", [
      Validators.pattern("([0-9]+).([0-9]+).([0-9]+)"),
    ]),
  });
  versionName = "0.0.0";
  constructor() {}

  ngOnInit(): void {
    this.versionForm.get("version")?.setValue(this.versionName);
  }

  formSubmit() {
    if (!this.versionForm.valid) {
      alert("Invalid version value. Please use symantic versioning");
      return;
    }
    this.versionName = this.versionForm.get("version")?.value;
  }
}
