import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../admin/Service/service.service';
import { Assessment } from '../../modal/Assessment';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
    '.bg-blue{min-height:100vh}',
  ]
})
export class WelcomeComponent implements OnInit {

  id: string = '';
  assessment: Assessment[] | undefined;

  constructor(private activeroute: ActivatedRoute, private apibase: ServiceService, private route: Router) { }

  ngOnInit(): void {
    debugger
    this.id = this.activeroute.snapshot.paramMap.get('id') as string;
  }

  redirectExam(id: string) {
    debugger
    this.route.navigate(['/Exam',id]);
  }

  returnAssessment(id: string) {
    this.route.navigate(['/CourseList']);
  }
}
