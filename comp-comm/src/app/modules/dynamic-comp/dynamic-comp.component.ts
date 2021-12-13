import { Component, OnInit } from "@angular/core";
import { SocialCardType } from "./contants/social-card-type";

@Component({
  selector: "app-dynamic-comp",
  template: `
    <div>
      <div>
        <h3>Pick Social Card Type</h3>
        <div>
          <div>
            <button (click)="setCardType(cardTypes.Facebook)">Facebook</button>
          </div>
          <div>
            <button (click)="setCardType(cardTypes.Twitter)">Twitter</button>
          </div>
        </div>
      </div>
    </div>
    <app-social-card [type]="selectedCardType"></app-social-card>
  `,
  styles: [],
})
export class DynamicCompComponent implements OnInit {
  cardTypes = SocialCardType;
  selectedCardType?: SocialCardType;

  constructor() {}

  ngOnInit(): void {}

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
    //console.log(this.selectedCardType);
  }
}
