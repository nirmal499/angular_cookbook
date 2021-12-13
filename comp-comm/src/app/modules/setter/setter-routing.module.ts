import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SetterComponent } from "./setter.component";

const routes: Routes = [{ path: "setter", component: SetterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetterRoutingModule {}
