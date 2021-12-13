import { Component, Inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { APP_CONFIG, IAppConfig } from "src/app/constants/app.config";
import { BucketService } from "src/app/services/bucket.service";
import {
  addItemToBucket,
  removeItemFromBucket,
} from "src/app/store/app.actions";
import { AppState } from "src/app/store/app.reducer";
import { Fruit } from "../../../constants/fruit";
import { IFruit } from "../../../interfaces/fruit.interface";

@Component({
  selector: "app-bucket",
  templateUrl: "./bucket.component.html",
  styleUrls: [],
})
export class BucketComponent implements OnInit {
  $bucket!: Observable<IFruit[]>;
  selectedFruit: Fruit = Fruit.Apple;
  fruits: string[] = Object.values(Fruit);
  canDeleteItems!: boolean;
  constructor(
    private bucketService: BucketService,
    @Inject(APP_CONFIG) private config: IAppConfig,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.$bucket = this.bucketService.$bucket;
    this.bucketService.loadItems();
    this.canDeleteItems = this.config.canDeleteItems;
  }

  addSelectedFruitToBucket() {
    const newItem: IFruit = {
      id: Date.now(),
      name: this.selectedFruit,
    };
    this.bucketService.addItem(newItem);
    this.store.dispatch(addItemToBucket(newItem));
  }
  deleteFromBucket(fruit: IFruit) {
    this.bucketService.removeItem(fruit);
    this.store.dispatch(removeItemFromBucket(fruit));
  }
}
