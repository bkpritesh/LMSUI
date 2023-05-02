import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
      { path: 'Dashboard', component: DashboardComponent}, //canActivate: [AuthGuard]
      { path: 'CourseList', loadChildren: () => import('./course-list/course-list.module').then(m => m.CourseListModule)},
      //{ path: 'AssessmentList/:id', component: },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
