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

  Course = new Course();
  CourseList: Course[] | undefined;
  cate = new Category();


  constructor(private apiservice: ServiceService) { }

  ngOnInit(): void {

    this.apiservice.getCourseData().subscribe((res: any) => {
      debugger
      this.CourseList = res;
      console.log(this.CourseList);
    });
  }

}
