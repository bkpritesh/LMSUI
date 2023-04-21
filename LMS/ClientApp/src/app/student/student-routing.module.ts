import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

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
      //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'CourseList', loadChildren: () => import('./course-list/course-list.module').then(m => m.CourseListModule)},
      //{ path: 'AssessmentList/:id', component: },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
