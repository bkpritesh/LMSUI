import { Component, OnInit } from '@angular/core';
import { Course } from '../../../modal/Course';
import { Category } from '../../../modal/category';
import { ServiceService } from '../../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthserviceService } from '../../../account/AuthService/authservice.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styles: [  ]
})

export class EditCourseComponent implements OnInit {

  api = environment.API_URL;

  categoryCode: Category[] | undefined;
  category: string = '';
  course = new Course();
  courseId: string = '';
  selectedOption: string | null = null;
  id: string | null = null;
  document = File;
  currentUser: any;
  DocumentId: any;

  constructor(private apibased: ServiceService, private toastrService: ToastrService, private authservice: AuthserviceService, private route: Router, private activeroute: ActivatedRoute, private http: HttpClient) {
    this.currentUser = this.authservice.getCurrentUser();
  }

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      console.log(this.id);
      this.getData();
    });

    this.apibased.getData().subscribe((res: any) => {
      debugger
      console.log(res);
      this.categoryCode = res;
    });
    
  }

  getData() {
    if (this.id) {
      debugger
      this.apibased.gotoCourseData(this.id).subscribe(data => {       
        this.course = data;
        debugger
        this.category = data.name;
        console.log(this.course);
      });
    }
    else {
      this.toastrService.error('SomeThing Went Wrong, So Try Again!');
    }
  }

  uploadFile(event: any) {
    debugger
    const file: File = event.target.files[0];
    this.uploadFileData(file, this.currentUser.accountId, "CourseImage");
  }

  uploadFileData(file: File, account: string, type: string) {
    debugger
    this.apibased.addDocument(file, account, type).subscribe((data: any) => {
      debugger
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
