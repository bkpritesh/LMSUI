import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, pipe, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account, UserEmail } from '../../modal/account';
//import { ResetPassword } from '../../modal/ResetPassword';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private accounttitle: BehaviorSubject<Account>;
  public account: Observable<Account>;
 // public IsSend: Observable<boolean>;
 
  constructor(private http: HttpClient, private router: Router) {
    //debugger
    this.accounttitle = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('account')!));
    this.account = this.accounttitle.asObservable();
  }

  public get accountValue(): Account {
    //debugger
    return this.accounttitle.value;
  }

  login(data:any) {
    //debugger
    return this.http.post<Account>(`https://localhost:7027/api/Account/authenticate`, data).pipe(map(account => {
     // debugger
      //localStorage.setItem('access_token', JSON.stringify(account.jwtToken));
      //localStorage.setItem('refress_token', JSON.stringify(account.refreshToken));
      localStorage.setItem('account', JSON.stringify(account));
      this.accounttitle.next(account);
      return account;
    }));
  }

  getCurrentUser() {
    const user = localStorage.getItem('account');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  ValidateResetToken(data: any) {
    return this.http.get('https://localhost:7027/api/ValidateResetToken/ResetPassword/' + data).subscribe(res => {
      console.log(res);
    });
  }
  
  ForgotPass1(dt: any) {
   // debugger
    return this.http.post(`https://localhost:7027/api/ForgotPassword`, dt).pipe(
      /*map(res => {localStorage.setItem('access_token', JSON.stringify(res.));
       return res;
      }),*/
      retry(1), catchError(this.errorHandl));
  }

  errorHandl(error: any) {
    //debugger;
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  //another method
  /*ForgotPass(dt: any) {
  //  debugger
  //  return this.http.post<UserEmail>(`https://localhost:7027/api/ForgotPassword`, dt).pipe(map(res => {
  //    return res;
  //   }));
  }*/
  //another method



  reset(data: any) {
    return this.http.post('https://localhost:7027/api/ResetPassword', data).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  logout() {
    alert('Your session are expired!');
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
