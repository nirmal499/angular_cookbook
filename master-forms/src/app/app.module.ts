import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer.component";
import { HeaderComponent } from "./components/header.component";
import { NotFoundComponent } from "./components/not-found.component";
import { AsyncValidModule } from "./modules/async-valid/async-valid.module";
import { CustomFormControlModule } from "./modules/custom-form-control/custom-form-control.module";
import { ReactiveDrivenModule } from "./modules/reactive-driven/reactive-driven.module";
import { TemplateDrivenModule } from "./modules/template-driven/template-driven.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    TemplateDrivenModule,
    ReactiveDrivenModule,
    AsyncValidModule,
    CustomFormControlModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
