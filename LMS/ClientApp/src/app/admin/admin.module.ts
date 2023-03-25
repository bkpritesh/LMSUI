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
import { AdmissionComponent } from './admission/admission.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    AdmissionComponent
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
    NgMultiSelectDropDownModule,
    DatepickerModule
  ],
  exports: [
    DashboardComponent,
    LayoutModule,
    CategoryComponent,
    AdmissionComponent,
    NgMultiSelectDropDownModule,
    DatepickerModule,
    ToastrModule
  ],
  providers: [
    ServiceService
  ]
})
export class AdminModule { }
