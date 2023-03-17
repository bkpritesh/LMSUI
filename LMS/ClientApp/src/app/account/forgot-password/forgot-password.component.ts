import { Component, Injectable, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
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

  constructor(private apiservice: AuthserviceService, private router: Router) {
    if (this.apiservice.accountValue) {
      this.router.navigate(['forgetpassword']);
    }
  }

  ngOnInit() {  }

  uForgetPass(data: any) {
    debugger
    //this.apiservice.ForgotPass(data).pipe(first()).subscribe(data => {
    //  //console.log(data);
    //  this.router.navigate(['resetpassword']);
    //}
    ////  ,
    ////error => {
    ////  alert("Incorrect email!");
    ////  }
    //);

    this.apiservice.ForgotPass1(data).subscribe(data => {
      debugger
      window.alert("Please Check Your Mail!");
      //this.router.navigate(['resetpassword']);
    }, error => {
      window.alert("Incorrect Email!");
    }
    );
  }   
}
