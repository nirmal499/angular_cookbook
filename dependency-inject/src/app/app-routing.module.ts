import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found.component";
import { DiTokenComponent } from "./modules/di-token/di-token.component";

const routes: Routes = [
  { path: "", redirectTo: "di-token", pathMatch: "full" },
  { path: "di-token", component: DiTokenComponent },
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
