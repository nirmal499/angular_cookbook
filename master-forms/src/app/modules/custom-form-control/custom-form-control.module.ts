import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomFormComponent } from "./custom-form.component";
import { HomeComponent } from "./components/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomFormControlRoutingModule } from "./custom-form-control-routing.module";
import { RatingComponent } from './components/rating.component';

@NgModule({
  declarations: [CustomFormComponent, HomeComponent, RatingComponent],
  imports: [CommonModule, ReactiveFormsModule, CustomFormControlRoutingModule],
})
export class CustomFormControlModule {}
