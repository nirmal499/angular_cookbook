import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found.component";
import { AboutUs2Component } from "./modules/about-us2/about-us2.component";
import { ContactUs2Component } from "./modules/contact-us2/contact-us2.component";

const routes: Routes = [
  { path: "", redirectTo: "basic", pathMatch: "full" },
  { path: "about-us2", component: AboutUs2Component },
  { path: "contact-us2", component: ContactUs2Component },
  {
    path: "about-us3",
    loadChildren: () =>
      import("./modules/about-us3/about-us3.module").then(
        (m) => m.AboutUs3Module
      ),
  },
  {
    path: "contact-us3",
    loadChildren: () =>
      import("./modules/contact-us3/contact-us3.module").then(
        (m) => m.ContactUs3Module
      ),
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
