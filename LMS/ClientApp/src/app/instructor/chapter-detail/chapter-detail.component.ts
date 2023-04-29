import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorComponent } from '@kolkov/angular-editor';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ServiceService } from '../../Service/service.service';
import { ChapterUpdate, StudentData, SaveChapterUpdate } from '../../modal/ChapterUpdate';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styles: [
  ],
})
export class ChapterDetailComponent implements OnInit {
  @ViewChild('editor') editor!: AngularEditorComponent;
  editorContent: string;

  accountDeatil: any;
  accountId: string = '';
//  AccountTypeDetail = new Profile();

  bID: string = '';
  chID: string = '';
  chapterName = new ChapterUpdate();
  ChapterDetail = new SaveChapterUpdate();

  student: StudentData[] = [];
 

  dropdownList = [];
  students = [];
  AttendanceSetting: IDropdownSettings = {};

  constructor(private activeroute: ActivatedRoute, private apiservice: ServiceService, private toastrService: ToastrService, private route: Router) {
    this.editorContent = '';
  }

  ngOnInit(): void {

    const account = localStorage.getItem('account');

    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
      this.accountId = this.accountDeatil.accountId;
      console.log(this.accountDeatil);
    }

    this.chID = this.activeroute.snapshot.paramMap.get('chapterCode') as string;
    this.bID = this.activeroute.snapshot.paramMap.get('batchCode') as string;  

    this.apiservice.getChapterDetail(this.bID, this.chID).subscribe((res: any) => {
      debugger
      this.chapterName = res;
      this.ChapterDetail = res;
      const expectedDate = new Date(this.ChapterDetail.expectedDate);      
      let EformattedDate = `${expectedDate.getFullYear()}-${(expectedDate.getMonth() + 1).toString().padStart(2, '0')}-${expectedDate.getDate().toString().padStart(2, '0')}`;
      this.ChapterDetail.expectedDate = EformattedDate;
      const completedDate = new Date(this.ChapterDetail.completionDate);
      let CformattedDate = `${completedDate.getFullYear()}-${(completedDate.getMonth() + 1).toString().padStart(2, '0')}-${completedDate.getDate().toString().padStart(2, '0')}`;
      this.ChapterDetail.completionDate = CformattedDate;
    });

    this.apiservice.getBatchStudent(this.bID).subscribe((res: any) => {
      this.student = res;
      console.log(this.student);
    });

    this.AttendanceSetting = {
      idField: 'StudentCode',
      textField: 'FullName',
      allowSearchFilter: true,
      itemsShowLimit: 2,
    };
  }

  editorConfig = {
    sanitize: false,
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
};


  onEditorInput(event: any) {
    this.editorContent = event.target.innerHTML;
  }

  onSubmit() {
    debugger
    const expectedDate = new Date(this.ChapterDetail.expectedDate);
    this.ChapterDetail.expectedDate = this.ChapterDetail.expectedDate + 'T' + expectedDate.toLocaleTimeString('en-US'); 
    const completedDate = new Date(this.ChapterDetail.completionDate);
    this.ChapterDetail.completionDate = this.ChapterDetail.completionDate + 'T' + completedDate.toLocaleTimeString('en-US');
    this.ChapterDetail.resource = this.editorContent;
    this.ChapterDetail.presentStudent = JSON.stringify(this.ChapterDetail.presentStudent).toString();
    this.ChapterDetail.absentStudent = JSON.stringify(this.ChapterDetail.absentStudent).toString();
    this.ChapterDetail.createdBy = this.accountDeatil.accountId;
    this.ChapterDetail.modifiedBy = this.accountDeatil.accountId;

    this.apiservice.editChapterDetail(this.bID, this.chID, this.ChapterDetail).subscribe(() => {
      this.toastrService.success('The Assessment is Uploaded!');
      return this.route.navigateByUrl('/Instructor/ChapterList/' + this.bID);
    }, error => {
      debugger
      this.toastrService.error('Try Again!');
    });
  }

  oncancel() {
    debugger
    this.route.navigateByUrl("/Instructor/ChapterList/" + this.bID);
  }
}
