import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AppConfig, APP_CONFIG } from "./constants/app.config";
import * as appStore from "./store/app.reducer";
import { LoaderComponent } from './components/loader.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ app: appStore.reducer }),
  ],
  /* You can test whether everything works by setting the AppConfig constant's
      canDeleteItems property to false . Note that the delete button is now hidden
      for both the admin and employee. Once tested, set the value of canDeleteItems
      back to true again */
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
