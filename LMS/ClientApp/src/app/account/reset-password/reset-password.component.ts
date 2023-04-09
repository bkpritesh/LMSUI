import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../AuthService/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, takeWhile, timer } from 'rxjs';
import { ResetPassword } from '../../modal/ResetPassword';
import { FormGroup, ValidatorFn, Validators, FormBuilder, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [
  ]
})
export class ResetPasswordComponent implements OnInit {

  //ResetPassword: FormGroup;


  constructor(private router: Router, private activeroute: ActivatedRoute, private apiservice: AuthserviceService, private toastrService: ToastrService) {
    //this.ResetPassword = this.fb.group({
    //  password: ['', Validators.required],
    //  Cpassword: ['', Validators.required]
    //}, {
    //  validator: passwordsMatchValidator
    //});
  }

  alive: boolean = true;
  RSToken: string = '';
  
  ngOnInit() {
    this.activeroute.queryParams.subscribe(params => {
      console.log(params.RestToken);
      if (params.RestToken) {
        this.RSToken = params.RestToken;
        let x = this.apiservice.ValidateResetToken(params.RestToken);
        console.log(x);
      } else {
        this.toastrService.error('The reset Token is Invalid!');
        timer(9000).pipe(takeWhile(() => this.alive)).subscribe(_ => { this.router.navigate(['']) });  
      }
    })
  }


  uReset(data: any) {
    let obj = new ResetPassword;
    obj.password = data.password;
    obj.resetToken = this.RSToken;
    this.apiservice.reset(obj).subscribe(data => {
      this.toastrService.success('The Password is Updated!');
      timer(9000).pipe(takeWhile(() => this.alive)).subscribe(_ => { this.router.navigate(['']) });
    }, error => {
      this.toastrService.error('Try Again!');
    });
  }

}

//function passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
//  const password = control.get('password');
//  const Cpassword = control.get('Cpassword');

//  if (password?.value !== Cpassword?.value) {
//    return { passwordsMismatch: true };
//  }

//  return null;
//}
