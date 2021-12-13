import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicCompComponent } from "./dynamic-comp.component";
import { FbCardComponent } from "./components/fb-card.component";
import { SocialCardComponent } from "./components/social-card.component";
import { TwitterCardComponent } from "./components/twitter-card.component";
import { DynamicCompRoutingModule } from "./dynamic-comp-routing.module";

@NgModule({
  declarations: [
    DynamicCompComponent,
    FbCardComponent,
    SocialCardComponent,
    TwitterCardComponent,
  ],
  imports: [CommonModule, DynamicCompRoutingModule],
})
export class DynamicCompModule {}
