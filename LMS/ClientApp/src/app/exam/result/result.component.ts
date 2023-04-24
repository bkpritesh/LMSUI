import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
    '.bg-blue{min-height:100vh}',
  ]
})
export class ResultComponent implements OnInit {
   
  accountDeatil: any;
  FName: string = '';
  LName: string = '';

  response: any;
  result: string='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    const account = localStorage.getItem('account');

    if (account !== null) {
      debugger
      this.accountDeatil = JSON.parse(account);
      this.FName = this.accountDeatil.firstName;
      this.LName = this.accountDeatil.lastName;
      
      console.log(this.accountDeatil);
    }


    const queryParams = this.route.snapshot.queryParams;
    if (queryParams.response) {
      this.response = JSON.parse(queryParams.response);
      console.log(this.response);
      this.setResult();
    }
  }

  private setResult() {
    if (this.response && this.response.someValue === true) {
      this.result = 'Pass';
    } else {
      this.result = 'Fail';
    }
  }

}
