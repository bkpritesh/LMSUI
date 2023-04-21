import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'Welcome/:id', component: WelcomeComponent },
  { path: 'Exam/:id', component: TestComponent },
  { path: 'Result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
