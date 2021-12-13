import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { COLORS } from "../contants";

@Component({
  selector: "app-home",
  template: `
    <div class="home" [formGroup]="boxForm" (ngSubmit)="applyChanges()">
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
      <div class="row submit-btn-container">
        <button class="btn btn-primary" type="submit" (click)="applyChanges()">
          Change Styles
        </button>
      </div>
      <div class="row" *ngIf="boxStyles">
        <div class="box" [ngStyle]="boxStyles">
          <div class="box__text">Hello World!</div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit, OnDestroy {
  sizeOptions = [100, 200, 300, 400, 500, 600, 700];
  colorOptions = COLORS;
  borderRadiusOptions = [4, 6, 8, 10, 12, 14, 16, 18, 20];

  boxStyles?: {
    width: string;
    height: string;
    backgroundColor: string;
    color: string;
    borderRadius: string;
  };

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
    this.applyChanges();
  }

  setBoxStyles(
    size: string,
    backgroundColor: string,
    color: string,
    borderRadius: number
  ) {
    this.boxStyles = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor,
      color,
      borderRadius: `${borderRadius}px`,
    };
  }

  applyChanges() {
    this.setBoxStyles(
      this.boxForm.get("size")?.value,
      this.boxForm.get("backgroundColor")?.value,
      this.boxForm.get("textColor")?.value,
      this.boxForm.get("borderRadius")?.value
    );
  }

  ngOnDestroy() {}
}
