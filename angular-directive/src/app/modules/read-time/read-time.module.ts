import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadTimeRoutingModule } from './read-time-routing.module';
import { ReadTimeComponent } from './read-time.component';
import { ReadTimeDirectiveDirective } from './directives/read-time-directive.directive';


@NgModule({
  declarations: [
    ReadTimeComponent,
    ReadTimeDirectiveDirective
  ],
  imports: [
    CommonModule,
    ReadTimeRoutingModule
  ]
})
export class ReadTimeModule { }
