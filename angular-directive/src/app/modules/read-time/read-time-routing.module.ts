import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadTimeComponent } from "./read-time.component";

const routes: Routes = [
  { path: "read-time-directive", component: ReadTimeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadTimeRoutingModule {}
