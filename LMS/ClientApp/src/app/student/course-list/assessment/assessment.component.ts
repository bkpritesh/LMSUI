import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../admin/Service/service.service';
import { Assessment } from '../../../modal/Assessment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styles: [
  ]
})
export class AssessmentComponent implements OnInit {

  id: string = '';
  assessment: Assessment[] | undefined;

  constructor(private activeroute: ActivatedRoute, private apibase: ServiceService, private route: Router) { }

  ngOnInit(): void {
debugger
    this.id = this.activeroute.snapshot.paramMap.get('id') as string;
    debugger
    this.apibase.getAssessmentByCourseCode(this.id).subscribe((res: any) => {
debugger  
      this.assessment = res;
      console.log(this.assessment);
    });
     
  }

  goToAssessment(id: string) {
    this.route.navigate(['/Welcome', id]);
  }

}
