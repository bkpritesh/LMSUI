import { Component, OnInit } from '@angular/core';
import { Course } from '../../../modal/Course';
import { ServiceService } from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AuthserviceService } from '../../../account/AuthService/authservice.service';
import { Batch } from '../../../modal/Batch';
import { Student } from '../../../modal/Student';
import { Instructor } from '../../../modal/Instructor';
import { data } from 'jquery';
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styles: [
  ]
})
export class BatchComponent implements OnInit {

  courseCode: Course[] | undefined;
  courseId: any = '';
  batch = new Batch();
  student: any=[];

  dropdownList = [];
  students = [];
  dropdownSetting: IDropdownSettings = {};
  batchId: any;
  time: string = '';

  teacher: Instructor[] | undefined;

  constructor(private apibased: ServiceService, private toastrService: ToastrService, private router: Router, private authservice: AuthserviceService, private activeroute: ActivatedRoute) {
    //this.currentUser = this.authservice.getCurrentUser();
  }


  

  ngOnInit() {
    this.apibased.getNewBatch().subscribe((res: any) => {
      debugger
      this.batch.batchCode = res.batchCode;
    });

    this.apibased.getCourseData().subscribe((res: any) => {
      debugger
      this.courseCode = res;
      //this.courseId = res.courseCode;
    }, error => {
      console.log(error);
    });

    this.apibased.getInstructor().subscribe((data:any) => {
      this.teacher = data;
    });

    this.apibased.getStudentData().subscribe((data:any[]) => {
      this.student = data;
    });

    this.dropdownSetting = {
      idField: 'StudentCode',
      textField: 'FName',
      allowSearchFilter: true,
      itemsShowLimit: 3,
    };


  }

  getDataForSelectedOption(course: string) {
    debugger
    this.apibased.gotoCourseData(course).subscribe(res => {
      debugger
      this.courseId = res;
    });
  }
  
  addBatch() {
    debugger
    
    this.apibased.addNewBatch(this.batch).subscribe(() => {
      debugger
      this.toastrService.success('The Batch is Added!');
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
    });
  }
}
