import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Course } from '../../../modal/Course';
import { ToastrService } from 'ngx-toastr';
declare var window: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [  ]
})
export class ListComponent implements OnInit {

  courses: Course[] | undefined;
  course = new Course();
  courseId: string = '';
  DeleteformModal: any;



  constructor(private apibased: ServiceService, private toastrService: ToastrService) { }

  openDeleteFormModal(Cid: string) {
    this.courseId = Cid;
    this.DeleteformModal.show();
  }

  closeFormModal() {
    this.DeleteformModal.hide();
  }

  ngOnInit(): void {
    this.load();

    this.DeleteformModal = new window.bootstrap.Modal(
      document.getElementById('deleteCourse')
    );

  }



  load() {
    debugger
    this.apibased.getCourseData().subscribe(res => {
      debugger
      this.courses = res;
      this.closeFormModal();
    });
  }

  deleteCourse() {
    debugger
    this.apibased.deleteCourse(this.courseId).subscribe(() => {
      this.closeFormModal();
      this.toastrService.success('The Course is Delete!');
      this.load();
    }, error => {
      this.toastrService.error('Try Again!');
    });
  }

}
