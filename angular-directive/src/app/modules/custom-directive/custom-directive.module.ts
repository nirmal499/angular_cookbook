import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomDirectiveRoutingModule } from "./custom-directive-routing.module";
import { CustomDirectiveComponent } from "./custom-directive.component";
import { IfNotDirective } from "./directives/if-not.directive";

@NgModule({
  declarations: [CustomDirectiveComponent, IfNotDirective],
  imports: [CommonModule, CustomDirectiveRoutingModule],
})
export class CustomDirectiveModule {}
