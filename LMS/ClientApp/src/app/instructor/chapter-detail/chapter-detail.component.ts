import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../admin/Service/service.service';
import { ChapterUpdate, StudentData } from '../../modal/ChapterUpdate';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styles: [
  ]
})
export class ChapterDetailComponent implements OnInit {

  bID: string = '';
  chID: string = '';
  ChapterDetail = new ChapterUpdate();

  student: StudentData[] = [];
  StudentCode: any = '';
  test = "Hello";


  constructor(private activeroute: ActivatedRoute, private apiservice: ServiceService, private route: Router) { }

  ngOnInit(): void {    
    this.chID = this.activeroute.snapshot.paramMap.get('chapterCode') as string;
    this.bID = this.activeroute.snapshot.paramMap.get('batchCode') as string;  

    this.apiservice.getChapterDetail(this.bID, this.chID).subscribe((res: any) => {
      debugger
      this.ChapterDetail = res;
debugger
      console.log(this.ChapterDetail);
    });

    this.apiservice.getBatchStudent(this.bID).subscribe((res: any) => {
      this.student = res;
      console.log(this.student);
    });
  }

  onselect(id: string, value: boolean) {
  //  debugger
  //  const attendaceP = document.getElementById('attendaceP') as HTMLInputElement;
  //  const attendaceA = document.getElementById('attendaceA') as HTMLInputElement;
  //  let hiddenField1 = document.getElementById('hiddenField1') as HTMLInputElement;
  //  let hiddenField2 = document.getElementById('hiddenField2') as HTMLInputElement;
    
  //  if (attendaceP.checked) {
  //    this.StudentCode = attendaceP.value;
  //  }else if (attendaceA.checked) {
  //    this.StudentCode = hiddenField2;
  //  }
  }

  onSubmit() {
    debugger
    this.apiservice.editChapterDetail(this.bID, this.chID);
  }

  oncancel() {
    debugger
    this.route.navigateByUrl("/Instructor/ChapterList/" + this.bID);
  }
}
