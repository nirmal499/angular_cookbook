import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CcTemplateVarsComponent } from "./cc-template-vars.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { CcTemplateVarsRoutingModule } from "./cc-template-vars-routing.module";
import { Gallery2Component } from './components/gallery2/gallery2.component';

@NgModule({
  declarations: [CcTemplateVarsComponent, GalleryComponent, Gallery2Component],
  imports: [CommonModule, CcTemplateVarsRoutingModule],
})
export class CcTemplateVarsModule {}
