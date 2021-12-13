import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AsyncValidComponent } from "./async-valid.component";
import { VersionControlComponent } from "./components/version-control.component";
import { ReleaseFormComponent } from "./components/release-form.component";
import { ReleaseLogsComponent } from "./components/release-logs.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AsyncValidComponent,
    VersionControlComponent,
    ReleaseFormComponent,
    ReleaseLogsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class AsyncValidModule {}
