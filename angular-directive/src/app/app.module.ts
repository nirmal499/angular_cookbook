import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer.component";
import { HeaderComponent } from "./components/header.component";
import { NotFoundComponent } from "./components/not-found.component";
import { AdAttributeDirectiveModule } from "./modules/ad-attribute-directive/ad-attribute-directive.module";
import { CustomDirectiveModule } from "./modules/custom-directive/custom-directive.module";
import { MultiStructuralDireModule } from "./modules/multi-structural-dire/multi-structural-dire.module";
import { ReadTimeModule } from "./modules/read-time/read-time.module";
import { ScrollToModule } from "./modules/scroll-to/scroll-to.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AdAttributeDirectiveModule,
    ReadTimeModule,
    ScrollToModule,
    CustomDirectiveModule,
    MultiStructuralDireModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
