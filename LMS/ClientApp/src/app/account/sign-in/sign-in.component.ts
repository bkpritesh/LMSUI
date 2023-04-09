import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { Observable, first, takeWhile, timer } from 'rxjs';
import { FormsModule, NgForm, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../AuthService/authservice.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private apiservice: AuthserviceService, private fb: FormBuilder, private toastrService: ToastrService) {
    // redirect to home if already logged in
    if (this.apiservice.accountValue) {
      this.router.navigate(['/']);
    }
  }


  alive: boolean = true;

  UserLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  ngOnInit() {  }

  ulogin(data: any) {
    

    debugger
    this.apiservice.login(data).pipe(first()).subscribe(data => {
      this.toastrService.success('Welcome to LMS!');
      timer(9000).pipe(takeWhile(() => this.alive)).subscribe(_ => { this.router.navigate(['dashboard']) });
    },
      error => {
        this.toastrService.error('Email and Password is Invalid');
      });
  }

}
