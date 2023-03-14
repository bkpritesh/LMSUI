import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule { }
