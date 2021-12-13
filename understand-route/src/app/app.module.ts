import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer.component";
import { HeaderComponent } from "./components/header.component";
import { NotFoundComponent } from "./components/not-found.component";
import { AboutUs2Module } from "./modules/about-us2/about-us2.module";
import { BasicModule } from "./modules/basic/basic.module";
import { ContactUs2Module } from "./modules/contact-us2/contact-us2.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BasicModule,
    /* Since we've established that all our components in the recipe are loaded eagerly on the app
      start, it is necessary to understand that it happens because we import HomeModule and
      AboutModule in the imports array of AppModule */
    AboutUs2Module,
    ContactUs2Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
