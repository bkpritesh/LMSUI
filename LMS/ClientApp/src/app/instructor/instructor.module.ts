import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InstructorRoutingModule } from './instructor-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';


@NgModule({
  declarations: [
    BatchListComponent,
    ChapterDetailComponent,
    ChapterListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InstructorRoutingModule
  ],
  exports: [
    InstructorRoutingModule,
    BatchListComponent,
    ChapterDetailComponent,
    ChapterListComponent
  ]
})
export class InstructorModule { }
