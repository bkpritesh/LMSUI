import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import { ListComponent } from './list/list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


@NgModule({
  declarations: [
    ListComponent,
    AddCourseComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ],
  exports: [
    CourseRoutingModule,
    ListComponent,
    AddCourseComponent,
    EditCourseComponent
  ],
})
export class CourseModule { }
