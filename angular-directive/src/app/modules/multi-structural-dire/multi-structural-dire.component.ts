import { Component, OnInit } from "@angular/core";

export enum Fruit {
  Apple = "Apple 🍎",
  Banana = "Banana 🍌",
  Grapes = "Grapes 🍇",
  Cherries = "Cherry 🍒",
}

interface IFruit {
  id: number;
  name: Fruit;
}

@Component({
  selector: "app-multi-structural-dire",
  template: `
    <h4>How to use *ngIf and *ngSwitch together?</h4>

    <div class="content" role="main">
      <div class="add-section">
        <div class="input-group">
          <select
            [(ngModel)]="selectedFruit"
            class="custom-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected value="">Choose...</option>
            <option *ngFor="let fruit of fruits" value="{{ fruit }}">
              {{ fruit }}
            </option>
          </select>
          <div class="input-group-append">
            <button
              [disabled]="!selectedFruit"
              class="btn btn-outline-secondary"
              type="button"
              (click)="addSelectedFruitToBucket()"
            >
              Add to Bucket
            </button>
          </div>
        </div>
      </div>
      <div class="page-section">
        <h2>Bucket <i class="material-icons">shopping_cart</i></h2>
        <div class="fruits">
          <ng-container *ngIf="bucket.length > 0; else bucketEmptyMessage">
            <div class="fruits__item" *ngFor="let item of bucket">
              <div class="fruits__item__title">{{ item.name }}</div>
              <div (click)="deleteFromBucket(item)">
                <div style="border:2px solid black">delete</div>
              </div>
            </div>
          </ng-container>
          <ng-template #bucketEmptyMessage>
            <div class="fruits__no-items-msg">
              No items in bucket. Add some fruits!
            </div>
          </ng-template>
          <!-- <div class="fruits__no-items-msg" *ngIf="!bucket.length">
            No items in bucket. Add some fruits!
          </div> -->
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class MultiStructuralDireComponent implements OnInit {
  selectedFruit: Fruit = Fruit.Apple;
  fruits: string[] = Object.values(Fruit);
  bucket: IFruit[] = [];

  addSelectedFruitToBucket() {
    this.bucket.push({
      id: Date.now(),
      name: this.selectedFruit,
    });
  }

  deleteFromBucket(item: IFruit) {
    this.bucket = this.bucket.filter((fruit) => fruit.id != item.id);
  }
  constructor() {}

  ngOnInit(): void {}
}
