import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found.component";
import { AsyncValidComponent } from "./modules/async-valid/async-valid.component";
import { CustomFormComponent } from "./modules/custom-form-control/custom-form.component";
import { ReactiveDrivComponent } from "./modules/reactive-driven/reactive-driv.component";
import { TempDrivComponent } from "./modules/template-driven/temp-driv.component";

const routes: Routes = [
  { path: "", redirectTo: "temp-driven", pathMatch: "full" },
  { path: "temp-driven", component: TempDrivComponent },
  { path: "reactive-driven", component: ReactiveDrivComponent },
  { path: "async-valid", component: AsyncValidComponent },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
