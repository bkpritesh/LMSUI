import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { ToastrService } from 'ngx-toastr';
import { Student2 } from '../../modal/Student';
import { ServiceService } from '../Service/service.service';
import { Category } from '../../modal/category';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styles: [  ]
})
export class AdmissionComponent implements OnInit {

  cities: any = '';
  states: any = '';

  education: any = '';
  skills: any = '';

  categoryCode: Category[] | undefined;
  course: any = '';

  settings: IDropdownSettings = {};

  form!: FormGroup;
  selectedItems: any[] = [];

  joiningDate: Date = new Date();
  hiddenJoiningDate: string = '';
  birthDate: Date = new Date();
  hiddenBirthDate: string = '';

  student2 = new Student2();

  constructor(private apibased: ServiceService, private toastrService: ToastrService, private fb: FormBuilder) { }

  options: DatepickerOptions = {
    minYear: getYear(new Date()) - 30, // minimum available and selectable year
    maxYear: getYear(new Date()) + 30, // maximum available and selectable year
    placeholder: 'dd-mm-yyyy', // placeholder in case date model is null | undefined, example: 'Please pick a date'
    format: 'dd/MM/yyyy', // date format to display in input
    firstCalendarDay: 0, // 0 - Sunday, 6 - Monday
    position: 'top',
    inputClass: 'form-control ', // custom input CSS class to be applied
    calendarClass: 'datepicker-default form-label', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
  };



  ngOnInit(): void {

    this.apibased.getstate().subscribe((res: any) => {      
      this.states = res;
    });

    this.apibased.getEducation().subscribe((res: any) => {
      this.education = res;
    });

    this.apibased.getskills().subscribe((res: any) => {
      this.skills = res;
    });

    this.apibased.getData().subscribe((res: any) => {
      this.categoryCode = res;
    });

    this.settings = {
      idField: 'SkillId',
      textField: 'Skills',
      allowSearchFilter: true,
    };

    this.form = this.fb.group({
      myItems: [this.selectedItems]
    });
  }




  onStateChange(state: string) {
    this.apibased.getcity(state).subscribe(res => {
      debugger
      this.cities = res;
    });
  }


  onCategoryChange(cate:string) {
    this.apibased.getCourseByCategoryId(cate).subscribe(res => {
      debugger
      this.course = res;
      //console.log(this.course);
    });
  }


  HiddenBirthField(event: any): void {
    this.hiddenBirthDate = this.birthDate.toISOString().substr(0, 10);
    console.log(this.hiddenBirthDate);
  }
  
 


  HiddenJoiningField(event: any): void  {
    this.hiddenJoiningDate = this.joiningDate.toISOString().substr(0, 10);
    console.log(this.hiddenJoiningDate); 
  }


   

  addStudent() {
    debugger
    this.apibased.addStudentData(this.student2).subscribe(() => {
      debugger
     
      this.toastrService.success('The Student is Added!');
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
    });
  }
}
