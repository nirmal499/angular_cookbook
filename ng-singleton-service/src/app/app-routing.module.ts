import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VersioningComponent } from "./versioning/versioning.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "versioning",
  },
  {
    path: "versioning",
    loadChildren: () =>
      import("./versioning/versioning.module").then((m) => m.VersioningModule),
  },
  // {
  //   path: "versioning",
  //   component: VersioningComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
