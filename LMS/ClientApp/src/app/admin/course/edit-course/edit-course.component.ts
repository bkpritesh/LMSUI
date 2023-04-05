import { Component, OnInit } from '@angular/core';
import { Course } from '../../../modal/Course';
import { Category } from '../../../modal/category';
import { ServiceService } from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styles: [  ]
})

export class EditCourseComponent implements OnInit {

  categoryCode: Category[] | undefined;
  course = new Course();
  courseId: string = '';
  selectedOption: string | null = null;
  id: string | null = null;
  document = File;
  currentUser: any;
  DocumentId: any;

  constructor(private apibased: ServiceService, private toastrService: ToastrService, private route: Router, private activeroute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.apibased.getData().subscribe((res: any) => {
      debugger
      console.log(res);
      this.categoryCode = res;
    });
    this.activeroute.paramMap.subscribe((params:any) => {
      this.id = params.get('id');
      console.log(this.id);
      this.getData(); 
      });
  }

  getData() {
    if (this.id) {
      debugger
      this.apibased.gotoCourseData(this.id).subscribe(data => {       
        this.course = data;
        console.log(this.course);
      });
    }
    else {
      this.toastrService.error('SomeThing Went Wrong, So Try Again!');
    }
  }

  uploadFile(event: any) {
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

  editCourse() {
    debugger
    this.apibased.editCourse(this.course).subscribe(() => {
      this.toastrService.success('The Category is Updated!');
      return this.route.navigateByUrl('/course');
      }, error => {
        this.toastrService.error('Try Again!');
      });
    }
}
