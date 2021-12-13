import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ScrollToComponent } from "./scroll-to.component";

const routes: Routes = [
  {
    path: "scroll-to-directive",
    component: ScrollToComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollToRoutingModule {}
