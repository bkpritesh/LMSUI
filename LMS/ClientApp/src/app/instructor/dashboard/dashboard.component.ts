import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { InstructorBatch } from '../../modal/InstructorBatch';
import { ChapterUpdate } from '../../modal/ChapterUpdate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  accountDeatil: any;
  accountId: string = '';
  InstructorDetail: any;
  InstructorId: string = '';
  batch : any='';
  BatchList: InstructorBatch[] | undefined;
  ChapterList: ChapterUpdate[] | undefined;

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
      this.BatchList = res;
      if (this.BatchList)
        this.batch = this.BatchList.map(batch => batch.BatchCode);
      this.getBatchChapter();
    });
  }

  getBatchChapter() {
    this.apiservice.getChapterList(this.batch).subscribe((res: any) => {
      debugger
      this.ChapterList = res;
      console.log(this.ChapterList);
    });
  }

}
