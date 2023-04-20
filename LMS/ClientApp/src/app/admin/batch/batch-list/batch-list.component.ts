import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { Batch } from '../../../modal/Batch';
import { Course } from '../../../modal/Course';
import { data } from 'jquery';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styles: [
  ]
})
export class BatchListComponent implements OnInit {

  //course: Course[] | undefined;
  //courses = Course;
  batches: Batch[] | undefined;
  id : string = '';
  constructor(private apibased: ServiceService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.load();
    //this.id = this.batches.batchcode;
    //this.apibased.getCourseData().subscribe(data => {
    //  debugger
    //  this.course = data;
    //})
  }

  load() {
    this.apibased.getBatch().subscribe((res: any) => {
      debugger
      this.batches = res;
      //this.closeFormModal();
    });
  }
}
