import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found.component";
import { RxjsOpImComponent } from "./modules/rxjs-op-instance-method/rxjs-op-im.component";
import { RxjsOpSmComponent } from "./modules/rxjs-op-static-method/rxjs-op-sm.component";
import { AboutComponent } from "./modules/unsubscribing-streams/components/about.component";
import { HomeComponent } from "./modules/unsubscribing-streams/components/home.component";
import { HomeComponent as hc } from "./modules/using-combineLatest/components/home.component";
import { Home2Component } from "./modules/unsubscribing-streams/components/home2.component";
import { UnsubStreamComponent } from "./modules/unsubscribing-streams/unsub-stream.component";
import { UsingCombineComponent } from "./modules/using-combineLatest/using-combine.component";
import { AnotherHomeComponent } from "./modules/using-combineLatest/components/another-home.component";

const routes: Routes = [
  { path: "", redirectTo: "rxjs-operator-instance-methods", pathMatch: "full" },
  { path: "rxjs-operator-instance-methods", component: RxjsOpImComponent },
  { path: "rxjs-operator-static-methods", component: RxjsOpSmComponent },
  {
    path: "unsubscribing-streams",
    component: UnsubStreamComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "home2",
        component: Home2Component,
      },
    ],
  },
  {
    path: "using-combineLatest",
    component: UsingCombineComponent,
    children: [
      { path: "home", component: hc },
      { path: "home2", component: AnotherHomeComponent },
    ],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
