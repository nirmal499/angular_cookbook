import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveDrivComponent } from "./reactive-driv.component";
import { VersionControlComponent } from "./components/version-control.component";
import { ReleaseFormComponent } from "./components/release-form.component";
import { ReleaseLogsComponent } from "./components/release-logs.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ReactiveDrivComponent,
    VersionControlComponent,
    ReleaseFormComponent,
    ReleaseLogsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ReactiveDrivenModule {}
