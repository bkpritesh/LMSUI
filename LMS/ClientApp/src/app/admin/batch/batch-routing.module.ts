import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchComponent } from './batch/batch.component';
import { EditBatchComponent } from './edit-batch/edit-batch.component';
import { SyllabusUploadComponent } from './syllabus-upload/syllabus-upload.component';

const routes: Routes = [
  { path: '', component: BatchListComponent },
  { path: 'addBatch', component: BatchComponent },
  { path: 'editBatch/:id', component: EditBatchComponent },
  { path: 'Syllabus', component: SyllabusUploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
