import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ],
  exports: [
    InstructorRoutingModule,
    ListComponent,
  ]
})
export class InstructorModule { }
