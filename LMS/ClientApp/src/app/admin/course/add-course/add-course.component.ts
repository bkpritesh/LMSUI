import { Component, OnInit } from '@angular/core';
import { Category } from '../../../modal/category';
import { Course } from '../../../modal/Course';
import { ServiceService } from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../../account/AuthService/authservice.service';
import { data } from 'jquery';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styles: [
  ]
})
export class AddCourseComponent implements OnInit {

  categoryCode: Category[] | undefined;
  course = new Course();
  document =  File;
  currentUser: any;
  DocumentId: any;

  constructor(private apibased: ServiceService, private toastrService: ToastrService, private router: Router, private authservice: AuthserviceService) {
    this.currentUser = this.authservice.getCurrentUser();
  }

  ngOnInit() {
    this.apibased.getData().subscribe((res: any) => {
      debugger
      console.log(res);
      this.categoryCode = res;
    }, error => {
      console.log(error);
    }
    );
  }

  uploadFile(event: any) {
    debugger
    const file: File = event.target.files[0];
    this.uploadFileData(file, this.currentUser.accountId, "CourseImage");
  }

  uploadFileData(file: File, account: string, type: string) {
    this.apibased.addDocument(file, account, type).subscribe((data: any) => {
      debugger
      //console.log(data);
      this.DocumentId = data.documentID;
      this.course.docID = this.DocumentId;
      console.log('File uploaded successfully');
    }, error => {
      console.log('File upload failed:', error)
    });
  }

  addCourse() {
    debugger
    //const docvalue = this.uploadFileData.bind(data.bind(this.DocumentId));
    //this.course.documentID = docvalue;
    debugger
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
