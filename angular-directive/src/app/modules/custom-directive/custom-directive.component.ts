import { Component, OnInit } from "@angular/core";

enum Visibility {
  On = "on",
  Off = "off",
}

@Component({
  selector: "app-custom-directive",
  template: `
    <h4>Your first custom structural directive</h4>

    <div class="content" role="main">
      <div class="content__toggle-actions">
        <h4 class="content__toggle-actions__heading">
          Visibility = {{ visibility }}
        </h4>
        <button
          [ngClass]="visibility === VISIBILITY.On ? 'btn-primary' : 'btn-light'"
          (click)="setVisibility(VISIBILITY.On)"
        >
          Visiblity On
        </button>
        <button
          [ngClass]="
            visibility === VISIBILITY.Off ? 'btn-primary' : 'btn-light'
          "
          (click)="setVisibility(VISIBILITY.Off)"
        >
          Visibility Off
        </button>
      </div>

      <div
        class="page-section"
        id="resources"
        *ngIf="visibility === VISIBILITY.Off"
      >
        <!-- Resources -->
        <h2>[ngIf Used]Content to show when visibility is off</h2>
      </div>

      <div
        class="page-section"
        id="resources"
        *appIfNot="visibility === VISIBILITY.Off"
      >
        <!-- Resources -->
        <h2>[appIfNot Used]Content to show when visibility is off</h2>
      </div>
    </div>
  `,
  styles: [],
})
export class CustomDirectiveComponent implements OnInit {
  visibility!: Visibility;
  VISIBILITY = Visibility;
  constructor() {}

  ngOnInit(): void {
    this.setVisibility(this.VISIBILITY.Off);
  }

  setVisibility(value: Visibility) {
    this.visibility = value;
  }
}
