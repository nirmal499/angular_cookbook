import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { combineLatest, Observable, of } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { COLORS } from "../contants";

@Component({
  selector: "app-another-home",
  template: `
    <div class="home" [formGroup]="boxForm">
      <div class="row">
        <div class="col">
          <label for="bgColorSelect">Background Color</label>
          <select
            id="bgColorSelect"
            class="custom-select"
            formControlName="backgroundColor"
          >
            <option value="">Open this select menu</option>
            <option *ngFor="let option of colorOptions" [value]="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="col">
          <label for="textColorSelect">Text Color</label>
          <select
            id="textColorSelect"
            class="custom-select"
            formControlName="textColor"
          >
            <option value="">Open this select menu</option>
            <option *ngFor="let option of colorOptions" [value]="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="col">
          <label for="borderRadiusSelect">Border Radius</label>
          <select
            id="borderRadiusSelect"
            class="custom-select"
            formControlName="borderRadius"
          >
            <option value="">Open this select menu</option>
            <option *ngFor="let option of borderRadiusOptions" [value]="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="col">
          <label for="sizeSelect">Size</label>
          <select id="sizeSelect" class="custom-select" formControlName="size">
            <option value="">Open this select menu</option>
            <option *ngFor="let option of sizeOptions" [value]="option">
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <!-- <div class="row submit-btn-container">
        <button class="btn btn-primary" type="submit" (click)="applyChanges()">
          Change Styles
        </button>
      </div> -->
      <div class="row" *ngIf="boxStyles$ | async as bStyles">
        <div class="box" [ngStyle]="bStyles">
          <div class="box__text">Hello World!</div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AnotherHomeComponent implements OnInit, OnDestroy {
  sizeOptions = [100, 200, 300, 400, 500, 600, 700];
  colorOptions = COLORS;
  borderRadiusOptions = [4, 6, 8, 10, 12, 14, 16, 18, 20];

  boxStyles$?: Observable<{
    width: string;
    height: string;
    backgroundColor: string;
    color: string;
    borderRadius: string;
  }>;

  boxForm = new FormGroup({
    size: new FormControl(""),
    borderRadius: new FormControl(""),
    textColor: new FormControl(""),
    backgroundColor: new FormControl(""),
  });

  constructor() {}

  ngOnInit() {
    this.boxForm.get("size")?.setValue(this.sizeOptions[0]);
    this.boxForm.get("backgroundColor")?.setValue(this.colorOptions[0]);
    this.boxForm.get("textColor")?.setValue(this.colorOptions[1]);
    this.boxForm.get("borderRadius")?.setValue(this.borderRadiusOptions[0]);

    this.listenToInputChanges();
  }

  listenToInputChanges() {
    // this.boxStyles$ = combineLatest([
    //   this.boxForm.get("size")?.valueChanges,
    //   this.boxForm.get("borderRadius")?.valueChanges,
    //   this.boxForm.get("backgroundColor")?.valueChanges,
    //   this.boxForm.get("textColor")?.valueChanges,
    // ]).pipe(
    //   map(([size, borderRadius, backgroundColor, textColor]) => {
    //     return {
    //       width: `${size}px`,
    //       height: `${size}px`,
    //       backgroundColor,
    //       color: textColor,
    //       borderRadius: `${borderRadius}px`,
    //     };
    //   })
    // );

    /* Since we're using the combineLatest operator when the app starts, but we don't
        have it triggered because none of the inputs have changed, we need to initialize the
        box with some initial values. To do so, we'll use the startWith operator with the
        initial values, as follows: */
    this.boxStyles$ = combineLatest([
      this.boxForm
        .get("size")!
        .valueChanges.pipe(startWith(this.sizeOptions[0])),
      this.boxForm
        .get("borderRadius")!
        .valueChanges.pipe(startWith(this.borderRadiusOptions[0])),
      this.boxForm
        .get("backgroundColor")!
        .valueChanges.pipe(startWith(this.colorOptions[1])),
      this.boxForm
        .get("textColor")!
        .valueChanges.pipe(startWith(this.colorOptions[0])),
    ]).pipe(
      map(([size, borderRadius, backgroundColor, textColor]) => {
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor,
          color: textColor,
          borderRadius: `${borderRadius}px`,
        };
      })
    );

    /* The combineLatest method will not emit an initial value until each
        Observable emits at least one value. Therefore, we use the startWith
        operator with each individual form control's valueChanges stream
        to provide an initial emitted value */
  }

  ngOnDestroy() {}
}
