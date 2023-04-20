import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch/batch.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { EditBatchComponent } from './edit-batch/edit-batch.component';
import { SyllabusUploadComponent } from './syllabus-upload/syllabus-upload.component';


@NgModule({
  declarations: [
    BatchComponent,
    BatchListComponent,
    EditBatchComponent,
    SyllabusUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    BatchRoutingModule
  ],
  exports: [
    BatchRoutingModule,
    BatchComponent,
    BatchListComponent,
    EditBatchComponent,
    SyllabusUploadComponent
  ]
})
export class BatchModule { }
