import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AdmissionComponent } from './admission/admission.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'InsertStudent', component: AdmissionComponent },
  { path: 'EditStudent/:id', component: EditStudentComponent },
  { path: 'Assessment', component: AssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
