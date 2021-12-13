import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./core/data.service";
import { AppUserCard } from "./interfaces/app-user-card.interface";

const NUMBER_OF_USERS = 10000;
const LOADER_TIMEOUT = 3000;

@Component({
  selector: "app-virtual-scroll",
  template: `
    <h4>{{ title }}</h4>

    <div class="content" role="main">
      <ng-container *ngIf="!showLoader; else loader">
        <app-amazing-list
          [listItems]="($listItemsData | async) ?? []"
        ></app-amazing-list>
      </ng-container>
    </div>

    <ng-template #loader>
      <app-loader></app-loader>
    </ng-template>
  `,
  styles: [],
})
export class VirtualScrollComponent implements OnInit {
  title = "Using Virtual Scroll for HUGE Lists";
  $listItemsData!: Observable<Partial<AppUserCard>[]>;
  showLoader!: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.showLoader = true;
    /* callback function will be executed after time `LOADER_TIMEOUT` */
    setTimeout(() => {
      this.showLoader = false;
      this.$listItemsData = this.dataService.getUsers();
    }, LOADER_TIMEOUT);
  }
}
