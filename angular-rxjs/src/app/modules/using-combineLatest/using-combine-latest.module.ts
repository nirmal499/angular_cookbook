import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home.component";
import { UsingCombineComponent } from "./using-combine.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AnotherHomeComponent } from './components/another-home.component';

@NgModule({
  declarations: [HomeComponent, UsingCombineComponent, AnotherHomeComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class UsingCombineLatestModule {}
