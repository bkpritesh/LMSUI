import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthserviceService } from '../AuthService/authservice.service';

@Injectable()
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: [
  ]
})

export class ForgotPasswordComponent implements OnInit {

  constructor(private apiservice: AuthserviceService, private router: Router) { }

  ngOnInit() { }

  uForgetPass(data: any) {
    this.apiservice.ForgotPass(data).subscribe(data => {
      this.router.navigate(['category']);
    });
  }
}
