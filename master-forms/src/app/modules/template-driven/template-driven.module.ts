import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TempDrivComponent } from "./temp-driv.component";
import { ReleaseLogsComponent } from "./components/release-logs.component";
import { VersionControlComponent } from "./components/version-control.component";
import { ReleaseFormComponent } from "./components/release-form.component";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    TempDrivComponent,
    ReleaseLogsComponent,
    VersionControlComponent,
    ReleaseFormComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class TemplateDrivenModule {}
