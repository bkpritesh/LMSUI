import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  count: any = '';
  id = '2023';
  cashCount: any = '';
  student: any = '';
  MonthlyEnrollemnt: any = '';
  MonthlyPayment: any = '';

  constructor(private serviceapi: ServiceService) { }

  ngOnInit(): void {
    this.serviceapi.GetAllCount().subscribe((res: any) => {
      this.count = res;
    });

    this.serviceapi.GetAllCashCount(this.id).subscribe((res: any) => {
      debugger
      this.cashCount = res;
    });

    this.serviceapi.GetCourseEnrollment(this.id).subscribe((res: any) => {
      return this.student = res;
    });

    this.serviceapi.GetStudentEnrollmentByYear(this.id).subscribe((res: any) => {
      return this.MonthlyEnrollemnt = res;
    });

    this.serviceapi.GetMonthlyPaymentByYear(this.id).subscribe((res: any) => {      
      return this.MonthlyPayment = res;
    });

  }

  load() {
    debugger
    
  }



}
