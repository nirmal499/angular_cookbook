import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CustomFormComponent } from "./custom-form.component";
import { HomeComponent } from "./components/home.component";

const routes: Routes = [
  {
    path: "custom-form",
    component: CustomFormComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "prefix" },
      { path: "home", component: HomeComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFormControlRoutingModule {}
