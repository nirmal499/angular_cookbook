import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { AuthModule } from "./modules/auth/auth.module";
import { PublicModule } from "./modules/public/public.module";
import { SharedModule } from "./modules/shared/shared.module";
import { UserModule } from "./modules/user/user.module";

@NgModule({
  declarations: [AppComponent, AboutUsComponent, HowItWorksComponent],
  imports: [
    /* Here order matter a lot */
    BrowserModule,
    AuthModule,
    UserModule,
    PublicModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
