import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../admin/Service/service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
  ]
})
export class TestComponent implements OnInit {

  id: string = '';
  questions: any[] = [];
  currentQuestion: any;
  currentIndex = 0;
  selectedOption: any;

  constructor(private activeroute: ActivatedRoute, private apibase: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.paramMap.get('id') as string;
    this.apibase.getAssessmentExam(this.id).subscribe((data: any) => {
debugger
      this.questions = data;
      this.currentQuestion = this.questions[this.currentIndex];
    });
   

  }


}
