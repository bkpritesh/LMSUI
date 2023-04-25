import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../admin/Service/service.service';
import { Category } from '../../../modal/category';
import { StudentCourse } from '../../../modal/StudentCourse';

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

  CourseList: StudentCourse[] | undefined;
  cate = new Category();


  constructor(private apiservice: ServiceService) { }

  ngOnInit(): void {

    const account = localStorage.getItem('account');

    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
      this.accountId = this.accountDeatil.accountId;
    }

    this.apiservice.AccountDetailByID(this.accountId).subscribe((res: any) => {
      debugger
      this.StudentDetail = res;
      this.studentId = this.StudentDetail.studentCode;
      console.log(this.studentId);
      debugger
      this.getStudentcourse();
    });
  }

  getStudentcourse() {
    this.apiservice.getStudentCourse(this.studentId).subscribe((res:any) => {
      debugger
      this.CourseList = res;
      console.log(this.CourseList);
    });
    
  }
}
