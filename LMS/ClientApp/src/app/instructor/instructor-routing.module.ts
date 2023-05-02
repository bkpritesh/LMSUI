import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchListComponent } from './batch-list/batch-list.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  //{ path: '', component:  },
  { path: 'BatchList', component: BatchListComponent },
  { path: 'ChapterList/:id', component: ChapterListComponent },
  { path: 'ChapterDetail/:batchCode/:chapterCode', component: ChapterDetailComponent },
  { path: 'Dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
