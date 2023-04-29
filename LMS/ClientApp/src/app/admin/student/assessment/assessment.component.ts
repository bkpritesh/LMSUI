import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../../Service/service.service';
import { AuthserviceService } from '../../../account/AuthService/authservice.service';
import { Assessment } from '../../../modal/Assessment';
import { Course } from '../../../modal/Course';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styles: [
  ]
})
export class AssessmentComponent implements OnInit {

  currentUser: any;
  courseCode: Course[] | undefined;
  course = new Course();
  Assessment = new Assessment();

  constructor(private apiservice: ServiceService, private authservice: AuthserviceService, private toastrService: ToastrService, private router: Router) {
    this.currentUser = this.authservice.getCurrentUser();
  }

  ngOnInit(): void {
    this.apiservice.getCourseData().subscribe((res: any) => {
      console.log(res);
      this.courseCode = res;
      console.log(this.courseCode?.length);
      debugger;
    })
  }

  uploadFile(event: any) {
    const file: File = event.target.files[0];
    debugger
    this.Assessment.File = file;
  }

  UploadSyllabuses() {
    debugger
    this.apiservice.addAssessment(this.Assessment).subscribe(() => {
      debugger
      this.toastrService.success('The Assessment is Uploaded!');
      return this.router.navigateByUrl('/Student');
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
      return this.router.navigateByUrl('/Student');
    });
  }

}
