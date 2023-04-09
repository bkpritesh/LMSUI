import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { AdmissionComponent } from './admission/admission.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DatepickerModule } from 'ng2-datepicker';
import { ToastrModule } from 'ngx-toastr';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    StudentComponent,
    AdmissionComponent,
    EditStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    DatepickerModule,
    ToastrModule
  ],
  exports: [
    StudentComponent,
    AdmissionComponent,
    EditStudentComponent,
  ]
})
export class StudentModule { }
