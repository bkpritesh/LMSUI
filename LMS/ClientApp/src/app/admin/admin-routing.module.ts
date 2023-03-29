import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoryComponent } from './category/category.component';
import { AdmissionComponent } from './admission/admission.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
//import { CourseRoutingModule } from './course/course-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'InsertStudent', component: AdmissionComponent },
      { path: 'student', component: StudentComponent },
      { path: 'Course', component: CourseComponent }


      //{ path: 'course', loadChildren: () => import('./course/course-routing.module').then(m => m.CourseRoutingModule) }
      //{ path: 'course', component: },
    ]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
