import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';


@NgModule({
  declarations: [
    BatchListComponent,
    BatchDetailComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ],
  exports: [
    InstructorRoutingModule,
    BatchListComponent
  ]
})
export class InstructorModule { }
