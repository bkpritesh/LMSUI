import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstructorRoutingModule } from './instructor-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DatepickerModule } from 'ng2-datepicker';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    BatchListComponent,
    ChapterDetailComponent,
    ChapterListComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InstructorRoutingModule,
    AngularEditorModule,
    NgMultiSelectDropDownModule,
    DatepickerModule,
    HttpClientModule
  ],
  exports: [
    InstructorRoutingModule,
    BatchListComponent,
    ChapterDetailComponent,
    ChapterListComponent,
    AngularEditorModule,
    DashboardComponent
  ]
})
export class InstructorModule { }
