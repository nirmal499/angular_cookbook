import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsingServiceComponent } from "./using-service.component";

const routes: Routes = [
  { path: "using-service", component: UsingServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsingServiceRoutingModule {}
