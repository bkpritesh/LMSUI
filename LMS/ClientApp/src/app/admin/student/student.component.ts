import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Student } from '../../modal/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private apibased: ServiceService) { }

  student: Student[] | undefined;

  ngOnInit(): void {
    this.load();
  }

  load() {
    debugger
    this.apibased.getStudentData().subscribe(res => {
      debugger
      this.student = res;
    });
  }  

}
