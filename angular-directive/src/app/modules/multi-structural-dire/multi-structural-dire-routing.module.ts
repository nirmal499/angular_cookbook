import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MultiStructuralDireComponent } from "./multi-structural-dire.component";

const routes: Routes = [
  {
    path: "multi-structural-directive",
    component: MultiStructuralDireComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiStructuralDireRoutingModule {}
