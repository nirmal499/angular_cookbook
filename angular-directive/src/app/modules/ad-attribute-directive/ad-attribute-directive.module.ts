import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdAttributeDirectiveRoutingModule } from "./ad-attribute-directive-routing.module";
import { AdAttributeDirectiveComponent } from "./ad-attribute-directive.component";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [AdAttributeDirectiveComponent, HighlightDirective],
  imports: [CommonModule, AdAttributeDirectiveRoutingModule, FormsModule],
})
export class AdAttributeDirectiveModule {}
