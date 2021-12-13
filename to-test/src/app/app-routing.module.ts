import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { NotFoundComponent } from "./modules/shared/components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "about-us", pathMatch: "full" },
  { path: "about-us", component: AboutUsComponent },
  { path: "how-it-works", component: HowItWorksComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
