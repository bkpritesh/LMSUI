import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../account/AuthService/authservice.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  accountDeatil: any;

  constructor(private auth: AuthserviceService, private route: RouterModule, private http: HttpClientModule) { }

  ngOnInit(): void {
    const account = localStorage.getItem('account');
    debugger  
   
    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
    }
   
  }

  EditProfile() {
    alert('honey');
    
  }

  onLogout() {
    debugger
    this.auth.logout();
  }

}
