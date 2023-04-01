import { Component, OnInit } from '@angular/core';
import { Category } from '../../../modal/category';
import { Course } from '../../../modal/Course';
import { ServiceService } from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styles: [
  ]
})
export class AddCourseComponent implements OnInit {

  categoryCode: Category[] | undefined;
  course = new Course();

  constructor(private apibased: ServiceService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit() {
    this.apibased.getData().subscribe((res: any) => {
      debugger
      console.log(res);
      this.categoryCode = res;
    });
  }

  addCourse() {
    this.apibased.addCourse(this.course).subscribe(res => {
      debugger
      this.toastrService.success('The Course is Added!');
      return this.router.navigateByUrl('/course');
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
    });
  }

}
