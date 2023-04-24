import { Component, OnInit } from '@angular/core'; 
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatepickerOptions, DatepickerModule } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import { Student } from '../../../modal/Student';
import { Category } from '../../../modal/category';
import { ServiceService } from '../../Service/service.service';
import { data } from 'jquery';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styles: [
  ]
})
export class EditStudentComponent implements OnInit {

  id: string | null = null;
  //student: any;

  cities: any = '';
  city: string = '';
  states: any = '';
  India: string = '';

  education: any = '';
  skills: any = '';

  categoryCode: Category[] | undefined;
  courseCode: any = '';
  Fees: any;

  settings: IDropdownSettings = {};
  skillSet = [];

  birthDate: Date = new Date();
  hiddenBirthDate: any;
  joiningDate: Date=new Date();

  

  student = new Student();

  constructor(private apibase: ServiceService, private toastrService: ToastrService, private activeroute: ActivatedRoute, private route: Router) { }

  options: DatepickerOptions = {
    minYear: getYear(new Date()) - 30, // minimum available and selectable year
    maxYear: getYear(new Date()) + 30, // maximum available and selectable year
    placeholder: 'yyyy-mm-dd', // placeholder in case date model is null | undefined, example: 'Please pick a date'
    format: 'yyyy-MM-dd', // date format to display in input
    firstCalendarDay: 0, // 0 - Sunday, 6 - Monday
    position: 'top',
    inputClass: 'form-control ', // custom input CSS class to be applied
    calendarClass: 'datepicker-default form-control', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
  };

  ngOnInit(): void {

    this.activeroute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      console.log(this.id);
      this.getData();     
      this.India = "INDIA";
    });

    this.apibase.getstate().subscribe((res: any) => {
      this.states = res;
    });

    this.apibase.getEducation().subscribe((res: any) => {
      this.education = res;
    });

    this.apibase.getskills().subscribe((res: any) => {
      this.skills = res;
    });

    

    this.settings = {
      idField: 'SkillId',
      textField: 'Skills',
      allowSearchFilter: true,
      itemsShowLimit: 2,
    };   
  }

  onStateChange(state: string) {
    this.apibase.getcity(state).subscribe(res => {
      debugger
      this.cities = res;
      console.log(this.cities);
    });
  }


  onCategoryChange(cate: string) {
    this.apibase.getCourseByCategoryId(cate).subscribe(res => {      
      this.courseCode = res;
    });
  }

  onCourseSelect(course: string) {
    
    this.apibase.gotoCourseData(course).subscribe(res => {
      
      this.Fees = res.courseFee;
    });
  }


  HiddenBirthField() {    
    this.hiddenBirthDate = this.formatDate(this.birthDate);
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


  getData() {
    if (this.id) {
      debugger
      this.apibase.getStudentById(this.id).subscribe(data => {
        debugger
        this.student = data;
        this.joiningDate = new Date(data.joiningDate);
        const birthdate = new Date(data.birthDate);
        this.birthDate = birthdate;
        console.log(this.birthDate);
        this.student.skillSet = JSON.parse(this.student.skillSet);
        this.onStateChange(this.student.state);

      }); 
    }
    else {
      this.toastrService.error('SomeThing Went Wrong, So Try Again!');
    }
  }


  editStudent() {
    this.apibase.editStudent(this.student).subscribe(() => {
      this.toastrService.success('The Student is Updated!');
      return this.route.navigateByUrl('/student');
    }, error => {
      this.toastrService.error('Try Again!');
    });
  }
}
