import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    LayoutModule,
    AdminRoutingModule,    
  ],
  exports: [
    DashboardComponent,
    LayoutModule,
    CategoryComponent
  ],
})
export class AdminModule { }
