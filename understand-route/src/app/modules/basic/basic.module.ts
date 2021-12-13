import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicComponent } from "./basic.component";
import { BasicRoutingModule } from "./basic-routing.module";
import { AboutUsComponent } from "./components/about-us.component";
import { ContactUsComponent } from "./components/contact-us.component";
import { BasicFooterComponent } from "./components/basic-footer.component";

@NgModule({
  declarations: [
    BasicComponent,
    AboutUsComponent,
    ContactUsComponent,
    BasicFooterComponent,
  ],
  imports: [CommonModule, BasicRoutingModule],
})
export class BasicModule {}
