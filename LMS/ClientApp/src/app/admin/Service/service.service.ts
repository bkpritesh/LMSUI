import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Category } from '../../modal/category';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpservice: HttpClient, private router: Router) { }

  baseURL: string = "https://localhost:7027/api/Categories";

  getData(){
    debugger
    return this.httpservice.get<Category[]>(this.baseURL);
  }

  addCategoryData(category: Category): Observable<any> {
    const httpheaders = { 'content-type': 'application/json' }
    const body = JSON.stringify(category);
    let options = {
      headers: httpheaders
    };
    return this.httpservice.post(this.baseURL, body, options)
  }

}
