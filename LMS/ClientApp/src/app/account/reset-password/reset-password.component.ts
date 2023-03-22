import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../AuthService/authservice.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, takeWhile, timer } from 'rxjs';
import { ResetPassword } from '../../modal/ResetPassword';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [
  ]
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: Router, private activeroute: ActivatedRoute, private apiservice: AuthserviceService, private toastrService: ToastrService) { }

  alive: boolean = true;
  RSToken: string= '';

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
