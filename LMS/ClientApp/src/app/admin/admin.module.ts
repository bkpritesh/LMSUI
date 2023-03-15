import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from './Service/service.service';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './layout/layout.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,    
    AdminRoutingModule,    
  ],
  exports: [
    DashboardComponent,
    LayoutModule,
    CategoryComponent
  ],
  providers: [
    ServiceService
  ]
})
export class AdminModule { }
