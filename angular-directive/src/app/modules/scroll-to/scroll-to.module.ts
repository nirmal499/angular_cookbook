import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToRoutingModule } from './scroll-to-routing.module';
import { ScrollToComponent } from './scroll-to.component';
import { ScrollToDirective } from './directives/scroll-to.directive';


@NgModule({
  declarations: [
    ScrollToComponent,
    ScrollToDirective
  ],
  imports: [
    CommonModule,
    ScrollToRoutingModule
  ]
})
export class ScrollToModule { }
