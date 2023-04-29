import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../../Service/service.service';
import { AuthserviceService } from '../../../account/AuthService/authservice.service';
import { Batch, BatchDetail } from '../../../modal/Batch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-syllabus-upload',
  templateUrl: './syllabus-upload.component.html',
  styles: [
  ]
})
export class SyllabusUploadComponent implements OnInit {
 @ViewChild('formFile') formFileInput!: ElementRef<HTMLInputElement>;

  batchCode: Batch[] | undefined;
  batch = new Batch();
  courseId: any = '';
  currentUser: any;
  BatchDetail = new BatchDetail();

  constructor(private apiservice: ServiceService, private authservice: AuthserviceService, private toastrService: ToastrService, private router: Router) {
    this.currentUser = this.authservice.getCurrentUser();
  }

  ngOnInit(): void {
    this.apiservice.getBatch().subscribe((res: any) => {
      this.batchCode = res;
      debugger;
    })
  }

  getDataForSelectedOption(course: string) {
    this.apiservice.gotoBatchData(course).subscribe(res => {
      debugger
      this.courseId = res;
    })
  }

  uploadFile(event: any) {
    const file: File = event.target.files[0];
    debugger
    this.BatchDetail.File = file;
  }

  UploadSyllabuses() {
    debugger
    this.BatchDetail.batchCode = this.courseId.batchCode; 
    this.BatchDetail.CourseCode = this.courseId.courseCode;
    this.apiservice.addBatchDetail(this.BatchDetail).subscribe(() => {
      debugger
      this.toastrService.success('The Batch Syllabus is Uploaded!');
      return this.router.navigateByUrl('/Batch');
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
      return this.router.navigateByUrl('/Batch');
    });
  }

}
