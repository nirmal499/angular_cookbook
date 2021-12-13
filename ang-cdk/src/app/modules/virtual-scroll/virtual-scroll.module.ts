import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VirtualScrollComponent } from "./virtual-scroll.component";
import { LoaderComponent } from "./components/loader.component";
import { AmazingListComponent } from "./components/amazing-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [VirtualScrollComponent, LoaderComponent, AmazingListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
  ],
})
export class VirtualScrollModule {}
