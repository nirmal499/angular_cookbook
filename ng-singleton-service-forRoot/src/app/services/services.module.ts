import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationsService } from "./notifications.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ServicesModule {
  /* We created a forRoot() method in our ServicesModule class that returns
      ModuleWithProviders containing our provided NotificationsService . This
      allows us to provide NotificationsService only once in the entire app, which
      results in only one instance of the service in the app. */
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [NotificationsService],
    };
  }
}
