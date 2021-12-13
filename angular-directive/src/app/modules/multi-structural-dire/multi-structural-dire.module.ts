import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MultiStructuralDireRoutingModule } from "./multi-structural-dire-routing.module";
import { MultiStructuralDireComponent } from "./multi-structural-dire.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MultiStructuralDireComponent],
  imports: [CommonModule, FormsModule, MultiStructuralDireRoutingModule],
})
export class MultiStructuralDireModule {}
