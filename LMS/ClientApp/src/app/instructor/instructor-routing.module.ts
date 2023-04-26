import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchListComponent } from './batch-list/batch-list.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';

const routes: Routes = [
  //{ path: '', component:  },
  { path: 'BatchList', component: BatchListComponent },
  { path: 'ChapterList/:id', component: ChapterListComponent },
  { path: 'ChapterDetail/:batchCode/:chapterCode', component: ChapterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
