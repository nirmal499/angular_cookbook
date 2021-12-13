import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactUs3Component } from "./contact-us3.component";

const routes: Routes = [
  {
    path: "",
    component: ContactUs3Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUs3RoutingModule {}
