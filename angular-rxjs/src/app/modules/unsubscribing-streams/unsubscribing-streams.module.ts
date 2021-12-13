import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnsubStreamComponent } from "./unsub-stream.component";
import { HomeComponent } from "./components/home.component";
import { AboutComponent } from "./components/about.component";
import { RouterModule } from "@angular/router";
import { Home2Component } from './components/home2.component';

@NgModule({
  declarations: [UnsubStreamComponent, HomeComponent, AboutComponent, Home2Component],
  imports: [CommonModule, RouterModule],
})
export class UnsubscribingStreamsModule {}
