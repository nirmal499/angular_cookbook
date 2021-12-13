import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found.component";
import { VirtualScrollComponent } from "./modules/virtual-scroll/virtual-scroll.component";

const routes: Routes = [
  { path: "", redirectTo: "virtual-scroll", pathMatch: "full" },
  { path: "virtual-scroll", component: VirtualScrollComponent },
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
