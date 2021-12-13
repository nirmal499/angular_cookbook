import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InoutComponent } from "./inout.component";

const routes: Routes = [{ path: "inout", component: InoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InoutRoutingModule {}
