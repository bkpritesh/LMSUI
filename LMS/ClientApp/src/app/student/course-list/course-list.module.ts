import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseListRoutingModule } from './course-list-routing.module';
import { AssessmentComponent } from './assessment/assessment.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AssessmentComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    CourseListRoutingModule,
    FormsModule,
    
  ],
  exports: [
    AssessmentComponent,
    CourseComponent,
    
  ]
})
export class CourseListModule { }
