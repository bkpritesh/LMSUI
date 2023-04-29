import { Component, OnInit } from '@angular/core';
import { Course } from '../../../modal/Course';
import { ServiceService } from '../../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Batch } from '../../../modal/Batch';
import { Student } from '../../../modal/Student';
import { Instructor } from '../../../modal/Instructor';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../../../account/AuthService/authservice.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styles: [
  ]
})
export class EditBatchComponent implements OnInit {

  id: string | null = null;
  courseCode: Course[] | undefined;
  courseId: any = '';
  batch = new Batch();
  student: any = [];

  dropdownList = [];
  students = [];
  dropdownSetting: IDropdownSettings = {};
  batchId: any;
  time: string = '';

  teacher: Instructor[] | undefined;

  constructor(private apibased: ServiceService, private toastrService: ToastrService, private router: Router, private authservice: AuthserviceService, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.apibased.getStudentData().subscribe((data: any[]) => {
      this.student = data;
    });

    this.dropdownSetting = {
      idField: 'studentCode',
      textField: 'fullName',
      allowSearchFilter: true,
      itemsShowLimit: 3,
    };

    this.activeroute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      console.log(this.id);
      this.getData();
    });

    //this.apibased.getNewBatch().subscribe((res: any) => {
    //  debugger
    //  this.batch.batchCode = res.batchCode;
    //});

    //this.apibased.gotoBatchData(this.batchId).subscribe(res => {
    //  debugger;
    //  console.log(res);
    //});

   

    this.apibased.getCourseData().subscribe((res: any) => {
      debugger
      this.courseCode = res;
    }, error => {
      console.log(error);
    });

    this.apibased.getInstructor().subscribe((data: any) => {
      this.teacher = data;
    });

    
  }

  getDataForSelectedOption(course: string) {
    debugger
    this.apibased.gotoCourseData(course).subscribe(res => {
      debugger
      this.courseId = res;
    });
  }


  getData() {
    if (this.id) {
      this.apibased.gotoBatchData(this.id).subscribe(res => {
        debugger
        this.batch = res; 
        console.log(this.batch);
        this.getDataForSelectedOption(this.batch.courseCode);
        this.batch.students = JSON.parse(this.batch.students);
      });
    }
    else {
      this.toastrService.error('SomeThing Went Wrong, So Try Again!');
    }
  }


  editBatch() {
    debugger
    this.batch.students = JSON.stringify(this.batch.students).toString(); 
    this.apibased.editBatch(this.batch).subscribe(() => {
      debugger
      this.toastrService.success('The Batch is Updated!');
      return this.router.navigateByUrl('/course/Batch');
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
    });
  }
}
