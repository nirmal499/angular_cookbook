import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer.component";
import { HeaderComponent } from "./components/header.component";
import { NotFoundComponent } from "./components/not-found.component";
import { RxjsOpInstanceMethodModule } from "./modules/rxjs-op-instance-method/rxjs-op-instance-method.module";
import { RxjsOpStaticMethodModule } from "./modules/rxjs-op-static-method/rxjs-op-static-method.module";
import { UnsubscribingStreamsModule } from "./modules/unsubscribing-streams/unsubscribing-streams.module";
import { UsingCombineLatestModule } from "./modules/using-combineLatest/using-combine-latest.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RxjsOpInstanceMethodModule,
    RxjsOpStaticMethodModule,
    UnsubscribingStreamsModule,
    UsingCombineLatestModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
