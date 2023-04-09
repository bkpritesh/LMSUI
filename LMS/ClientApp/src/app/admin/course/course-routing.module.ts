import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ListComponent } from './list/list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchComponent } from './batch/batch.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'editcourse/:id', component: EditCourseComponent },
  { path: 'batch', component: BatchListComponent },
  { path: 'batch/add', component: BatchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }