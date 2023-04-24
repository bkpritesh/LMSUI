import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../admin/Service/service.service';
import { Category } from '../../../modal/category';
import { Course } from '../../../modal/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent implements OnInit {

  accountDeatil: any;
  accountId: string = '';
  StudentDetail: any;
  studentId: string = '';
  Courses: any;

  Course = new Course();
  CourseList: Course[] | undefined;
  cate = new Category();


  constructor(private apiservice: ServiceService) { }

  ngOnInit(): void {

    const account = localStorage.getItem('account');

    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
      this.accountId = this.accountDeatil.accountId;
      //console.log(this.accountDeatil);
    }

    this.apiservice.AccountDetailByID(this.accountId).subscribe((res:any) => {
      debugger
      this.StudentDetail = res;
      this.studentId = this.StudentDetail.studentCode;
      console.log(this.studentId);
      this.getStudentcourse();
    });  


    

    this.apiservice.gotoCourseData(this.Courses).subscribe((res: any) => {
      //debugger
      this.CourseList = res;
      console.log(this.CourseList);
    });
  }

  getStudentcourse() {
    this.apiservice.getStudentById(this.studentId).subscribe(res => {
      debugger
      this.Courses = res.courseCode;
      console.log(this.Courses);
    });
  }

}
