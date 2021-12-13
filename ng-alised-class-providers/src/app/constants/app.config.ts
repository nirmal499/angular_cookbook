import { InjectionToken } from "@angular/core";

export interface IAppConfig {
  canDeleteItems: boolean;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>("APP_CONFIG");

export const AppConfig: IAppConfig = {
  /* 
    With canDeleteItems: false
    Note that the delete button is now hidden
    for both the admin and employee. Once tested, set the value of canDeleteItems
    back to true again. */
  canDeleteItems: true,
};
