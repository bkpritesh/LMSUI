import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AssessmentComponent } from '../course-list/assessment/assessment.component';

const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'AssessmentList/:id', component: AssessmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseListRoutingModule { }
