import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomDirectiveComponent } from "./custom-directive.component";

const routes: Routes = [
  { path: "custom-directive", component: CustomDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomDirectiveRoutingModule {}
