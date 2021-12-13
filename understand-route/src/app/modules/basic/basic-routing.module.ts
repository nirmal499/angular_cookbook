import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BasicComponent } from "./basic.component";
import { AboutUsComponent } from "./components/about-us.component";
import { ContactUsComponent } from "./components/contact-us.component";

const routes: Routes = [
  {
    path: "basic",
    component: BasicComponent,
    children: [
      { path: "about-us", component: AboutUsComponent },
      { path: "contact-us", component: ContactUsComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {}
