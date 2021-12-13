import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { SocialCardType } from "../contants/social-card-type";
import { FbCardComponent } from "./fb-card.component";
import { TwitterCardComponent } from "./twitter-card.component";

@Component({
  selector: "app-social-card",
  template: `
    <!-- <div *ngIf="type; else elseBlock">
      <div [ngSwitch]="type">
        <app-fb-card *ngSwitchCase="cardTypes.Facebook"></app-fb-card>
        <app-twitter-card *ngSwitchCase="cardTypes.Twitter"></app-twitter-card>
      </div>
    </div>
    <ng-template #elseBlock>
      <h4>Nothing Selected</h4>
    </ng-template> -->

    <div #vrf></div>
  `,
  styles: [],
})
export class SocialCardComponent implements OnInit, OnChanges {
  @Input() type?: SocialCardType;
  cardTypes = SocialCardType;
  @ViewChild("vrf", { read: ViewContainerRef }) vrf?: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type.currentValue !== undefined) {
      //console.log(`Card type changed to: ${changes.type.currentValue}`);
      this.loadDynamicComponent(changes.type.currentValue);
    }
  }

  loadDynamicComponent(type: SocialCardType) {
    let component;
    /* No need for default since type can only be either 1 or 2 */
    switch (type) {
      case SocialCardType.Facebook:
        component = FbCardComponent;
        break;
      case SocialCardType.Twitter:
        component = TwitterCardComponent;
        break;
    }

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    /* without clear() you'll see the component being added to the view as an additional element
      fbcomponent and twitter component gets stacked over eachother every time we click
    */
    this.vrf?.clear();
    this.vrf?.createComponent(componentFactory);
  }
}
