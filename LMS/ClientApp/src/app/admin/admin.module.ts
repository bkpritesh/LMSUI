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
import { LayoutModule } from './layout/layout.module';
import { CategoryComponent } from './category/category.component';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
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
  ],
  exports: [
    DashboardComponent,
    LayoutModule,
    CategoryComponent,
    NgMultiSelectDropDownModule,
    DatepickerModule,
    ToastrModule,
    CourseModule,
    StudentModule
  ],
  providers: [
    ServiceService
  ]
})
export class AdminModule { }
