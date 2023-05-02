import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CourseListModule } from './course-list/course-list.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [ 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CourseListModule
  ],
  exports: [
    CourseListModule,
    DashboardComponent
  ]
})
export class StudentModule { }
