import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../../../modal/Student';
import { ServiceService } from '../../../Service/service.service';
import { Category } from '../../../modal/category';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styles: [],
  providers: []
})
export class AdmissionComponent implements OnInit {

  cities: any = '';
  states: any = '';

  education: any = '';
  skills: any = '';

  categoryCode: Category[] | undefined;
  courseCode: any = '';
  Fees: any;

  settings: IDropdownSettings = {};

  joiningDate: Date = new Date();
  hiddenJoiningDate: any;
  birthdate: Date = new Date();
  hiddenBirthDate: any;

  student2 = new Student();

  constructor(private apibased: ServiceService, private toastrService: ToastrService) {  }

  
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
      itemsShowLimit: 2,
    };
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
      this.courseCode = res;
    });
  }

  onCourseSelect(course: string) {
    debugger
    this.apibased.gotoCourseData(course).subscribe(res => {
      debugger
      this.Fees = res.courseFee;
    });
  }
  

  HiddenBirthField() {
    debugger
    this.hiddenBirthDate = this.formatDate(this.birthdate);
  } 
  
 
  HiddenJoiningField()  {
    debugger
    this.hiddenJoiningDate = this.formatDate(this.joiningDate);
  }


  formatDate(date: Date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
  }


  //calculation() {
  //  var coursefee = this.student2.courseFees;
  //  var discount =;
  //  var payedfee =;
  //  var Totalfee = coursefee - payedfee - (discount / 100);
  //}

   
  addStudent() {
    debugger
    this.student2.birthDate = this.hiddenBirthDate;
    this.student2.joiningDate = this.hiddenJoiningDate;
    this.student2.isStudent = true;
    this.student2.country = '1005';
    //this.student2.skillSet = JSON.parse(this.student2.skillSet.replace(/\\"/g, '"'));
    this.student2.skillSet = JSON.stringify(this.student2.skillSet).toString();
    this.student2.accountType = "Student";
    debugger 
    this.student2.courseFees = this.Fees;
    this.apibased.addStudentData(this.student2).subscribe(() => {
      debugger      
      this.toastrService.success('The Student is Added!');
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
    });
  }
}
