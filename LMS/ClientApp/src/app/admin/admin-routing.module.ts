import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from '../layout/layout.component';
import { CategoryComponent } from './category/category.component';
import { AuthGuard } from '../account/AuthService/auth.guard';
import { ProfileComponent } from '../profile/profile.component';

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
      { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
      { path: 'course', loadChildren: () => import('./course/course-routing.module').then(m => m.CourseRoutingModule),  },
      { path: 'student', loadChildren: () => import('./student/student-routing.module').then(m => m.StudentRoutingModule) },
      { path: 'Batch', loadChildren: () => import('./batch/batch-routing.module').then(m => m.BatchRoutingModule) },
      { path: 'EditProfile', component: ProfileComponent },
    ]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
