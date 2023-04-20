import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ListComponent } from './list/list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'editcourse/:id', component: EditCourseComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
