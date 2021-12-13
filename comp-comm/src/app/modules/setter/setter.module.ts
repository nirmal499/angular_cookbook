import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SetterRoutingModule } from "./setter-routing.module";
import { SetterComponent } from "./setter.component";
import { VersionControlComponent } from "./components/version-control.component";
import { VcLogsComponent } from "./components/vc-logs.component";
import { VcLogs1Component } from "./components/vc-logs1.component";

@NgModule({
  declarations: [
    SetterComponent,
    VersionControlComponent,
    VcLogsComponent,
    VcLogs1Component,
  ],
  imports: [CommonModule, SetterRoutingModule, ReactiveFormsModule],
})
export class SetterModule {}
