import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../../modal/account';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private accounttitle: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(private http: HttpClient, private router: Router) {
    this.accounttitle = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('account')!));
    this.account = this.accounttitle.asObservable();
  }

  public get accountValue(): Account {
    return this.accounttitle.value;
  }

  login(data:any) {
    debugger
    return this.http.post<Account>(`https://localhost:7027/api/Account/authenticate`, data).pipe(map(account => {
      debugger
      localStorage.setItem('access_token', JSON.stringify(account.jwtToken));
      localStorage.setItem('refress_token', JSON.stringify(account.refreshToken));
      this.accounttitle.next(account);
      return account;
    }));
  }

  ForgotPass(data: any) {
    return this.http.post('https://localhost:7027/api/ResetPassword', data).subscribe(res => {
     return res;
    });
  }
}
