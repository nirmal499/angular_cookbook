import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DynamicCompComponent } from "./dynamic-comp.component";

const routes: Routes = [
  { path: "dynamic-comp", component: DynamicCompComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicCompRoutingModule {}
