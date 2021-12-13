import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdAttributeDirectiveComponent } from "./ad-attribute-directive.component";

const routes: Routes = [
  { path: "ad-attribute-directive", component: AdAttributeDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdAttributeDirectiveRoutingModule {}
