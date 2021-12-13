import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InoutModule } from "./modules/inout/inout.module";
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";
import { NotFoundComponent } from "./components/not-found.component";
import { UsingServiceModule } from "./modules/using-service/using-service.module";
import { SetterModule } from "./modules/setter/setter.module";
import { CcTemplateVarsModule } from "./modules/cc-template-vars/cc-template-vars.module";
import { DynamicCompModule } from "./modules/dynamic-comp/dynamic-comp.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    InoutModule,
    UsingServiceModule,
    SetterModule,
    CcTemplateVarsModule,
    DynamicCompModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
