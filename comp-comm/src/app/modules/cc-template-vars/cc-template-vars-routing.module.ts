import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CcTemplateVarsComponent } from "./cc-template-vars.component";

const routes: Routes = [
  { path: "temp-var", component: CcTemplateVarsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcTemplateVarsRoutingModule {}
