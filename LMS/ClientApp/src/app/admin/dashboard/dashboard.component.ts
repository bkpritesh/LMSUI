import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Observable, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  isLoader: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
    //debugger;
    //var result = document.getElementsByClassName("loading");
    //this.isLoader = true;
    //debugger
    //setTimeout(this.loader, 9000) 
  }

  //loader() {
  //  debugger
  //  this.isLoader = false;
  //}



}
