import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutModule } from './default-layout/default-layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DefaultLayoutModule    
  ],
  exports: [
    DefaultLayoutModule,
    DashboardComponent,
  ]
})
export class ContainerModule { }
