import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthserviceService } from '../AuthService/authservice.service';


@Injectable()
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private apiservice: AuthserviceService) {
    // redirect to home if already logged in
    if (this.apiservice.accountValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {  }

  ulogin(data:any) {
    debugger
    this.apiservice.login(data).pipe(first()).subscribe(data => {
      this.router.navigate(['dashboard']);
    },
      error => {
        alert("Incorrect email or pass!");
      });
  }

}
