import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { InstructorBatch } from '../../modal/InstructorBatch';
import { InstructorModule } from '../instructor.module';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styles: [
  ]
})
export class BatchListComponent implements OnInit {

  accountDeatil: any;
  accountId: string = '';
  InstructorDetail: any;
  InstructorId: string = '';

  BatchList: InstructorBatch[] | undefined;

  constructor(private apiservice: ServiceService) { }

  ngOnInit(): void {

    const account = localStorage.getItem('account');

    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
      this.accountId = this.accountDeatil.accountId;
    }

    this.apiservice.AccountDetailByID(this.accountId).subscribe((res: any) => {
      debugger
      this.InstructorDetail = res;
      this.InstructorId = this.InstructorDetail.instructorCode;
      console.log(this.InstructorId);
      debugger
      this.getInstructorCourse();
    });
  }

  getInstructorCourse() {
    this.apiservice.getBatchByInstructor(this.InstructorId).subscribe((res: any) => {
      debugger
      this.BatchList = res;
      console.log(this.BatchList);
    });    
  }


}
