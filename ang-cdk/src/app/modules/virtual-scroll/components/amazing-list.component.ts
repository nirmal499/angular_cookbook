import { Component, Input, OnInit } from "@angular/core";
import { AppUserCard } from "../interfaces/app-user-card.interface";

@Component({
  selector: "app-amazing-list",
  template: `
    <style>
      .example-viewport {
        height: 200px;
        width: 200px;
        border: 1px solid black;
      }

      .example-item {
        height: 50px;
      }
    </style>
    <h4 class="heading">Our trusted customers</h4>
    <cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
      <div class="list list-group">
        <!-- <div class="list__item list-group-item" *ngFor="let item of listItems"> -->
        <div
          class="list__item list-group-item example-item"
          *cdkVirtualFor="let item of listItems"
        >
          <!-- https://material.angular.io/cdk/scrolling/examples -->
          <div class="list__item__primary">
            <div class="list__item__primary__info">
              {{ item.name }}
            </div>
            <!-- <div class="list__item__primary__info">
              {{ item.phone }}
            </div> -->
          </div>
          <!-- <div class="list__item__secondary">
            <div class="list__item__secondary__info">
              <img src="{{ item.picture }}" />
            </div>
            <div class="list__item__secondary__info">
              {{ item.email }}
            </div>
          </div> -->
        </div>
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [],
})
export class AmazingListComponent implements OnInit {
  @Input() listItems: Partial<AppUserCard>[] = [];
  constructor() {}

  ngOnInit(): void {}
}
