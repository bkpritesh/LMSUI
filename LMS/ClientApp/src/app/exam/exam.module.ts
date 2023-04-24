import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExamRoutingModule } from './exam-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    ResultComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    FormsModule
  ],
  exports: [
    WelcomeComponent,
    ResultComponent,
    TestComponent
  ]
})
export class ExamModule { }
