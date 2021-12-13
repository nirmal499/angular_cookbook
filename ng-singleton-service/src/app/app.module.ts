import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotificationsButtonComponent } from "./components/notifications-button/notifications-button.component";
import { NotificationsService } from "./services/notifications.service";
/* We don't need this becoz the we are lazy loading this module. Check out the app-routing.module.ts */
import { VersioningModule } from "./versioning/versioning.module";

@NgModule({
  declarations: [AppComponent, NotificationsButtonComponent],
  //imports: [BrowserModule, VersioningModule, AppRoutingModule],
  imports: [BrowserModule, AppRoutingModule],
  /* https://javascript.plainenglish.io/understanding-service-providers-in-angular-6f1ec72b7535 */
  //providers: [NotificationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
