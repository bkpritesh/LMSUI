import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CourseListModule } from './course-list/course-list.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CourseListModule
  ],
  exports: [
    CourseListModule
  ]
})
export class StudentModule { }
