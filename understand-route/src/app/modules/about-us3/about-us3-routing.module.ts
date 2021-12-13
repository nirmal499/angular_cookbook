import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUs3Component } from "./about-us3.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AboutUs3Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUs3RoutingModule {}
