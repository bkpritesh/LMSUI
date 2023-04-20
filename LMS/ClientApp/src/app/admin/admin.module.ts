import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule } from 'ng2-datepicker';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from './Service/service.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from '../profile/profile.component';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { ControlsModule } from './../controls/controls.module'
import { BatchModule } from './batch/batch.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProfileComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 8000,
      progressBar: true,
      progressAnimation: 'decreasing'
    }), 
    LayoutModule,    
    AdminRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    DatepickerModule,
    CourseModule,
    StudentModule,
    ControlsModule,
    BatchModule,
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    NgMultiSelectDropDownModule,
    DatepickerModule,
    ToastrModule,
    CourseModule,
    StudentModule,
    ProfileComponent,
  ],
  providers: [
    ServiceService
  ]
})
export class AdminModule { }
