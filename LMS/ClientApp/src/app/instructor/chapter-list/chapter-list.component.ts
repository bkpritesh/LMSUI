import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { ChapterUpdate } from '../../modal/ChapterUpdate';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styles: [
  ]
})
export class ChapterListComponent implements OnInit {
  id: string = '';
  ChapterList: ChapterUpdate[] | undefined;

  constructor(private activeroute: ActivatedRoute, private apiservice: ServiceService) { }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.paramMap.get('id') as string;
    this.apiservice.getChapterList(this.id).subscribe((res: any) => {
      debugger
      this.ChapterList = res;
      console.log(this.ChapterList);
    });
  }
}
