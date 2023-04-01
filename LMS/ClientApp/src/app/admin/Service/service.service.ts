import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Category } from '../../modal/category';
import { Student, Student2 } from '../../modal/Student';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Course } from '../../modal/Course';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements HttpInterceptor {

  constructor(private httpservice: HttpClient, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error('Method not implemented.');
    }

  private apiUrl = environment.API_URL;

  //Category Section

  baseURL: string = `${this.apiUrl}/api/Categories`;

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

  gotoCategoryData(id: string) {
    return this.httpservice.get<Category>(this.baseURL + '/' + id);
  }

  editCategory(updatedData: any) {
    return this.httpservice.put(this.baseURL + '/' + updatedData.categoryId, updatedData);
  }

  deleteCategory(deleteData: any) {
    debugger
    return this.httpservice.delete(this.baseURL + '/' + deleteData);
  }
  //Category Section


  //Skills
  getskills(): Observable<any> {
    return this.httpservice.get<any>(`${this.apiUrl}/api/Education/skills`);
  }
  //Skills


  //Education
  getEducation(): Observable<any> {
    return this.httpservice.get<any>(`${this.apiUrl}/api/Education/Qualification`);
  }
  //Education


  //State & City
  getstate(): Observable<any>{
    return this.httpservice.get<any>(`${this.apiUrl}/api/StateAndCities`);
  }

  getcity(id: string) {
    return this.httpservice.get(`${this.apiUrl}/api/StateAndCities/cities/${id}`);
  }
  //State & City



  //Course
  courseapi: string = `${this.apiUrl}/api/Course`; 

  getCourseByCategoryId(id: string) {
    return this.httpservice.get(`${this.apiUrl}/api/Categories/Course/${id}`)
  }

  getCourseData() {
    return this.httpservice.get<Course[]>(this.courseapi) ;
  }

  gotoCourseData(id: string) {
    debugger
    return this.httpservice.get<Course>(this.courseapi + '/CourseCode?CourseCode=' + id);
  }

  deleteCourse(deleteData: any) {
    debugger
    return this.httpservice.delete(this.courseapi + '/' + deleteData);
  }

  addCourse(course: Course): Observable < any > {
    const httpheaders = { 'content-type': 'application/json' }
    const body = JSON.stringify(course);
      let options = {
        headers: httpheaders
    };
    return this.httpservice.post(this.courseapi, body, options)
  }

  editCourse(updatedData: any) {
    return this.httpservice.put(this.courseapi + '/CourseCode?Coursecode=' + updatedData.courseCode, updatedData);
  }

 
  //Course

  //Student Section
  StudentBaseUrl: string = `${this.apiUrl}/api/Student`;

  getStudentData() {
    debugger
    return this.httpservice.get<Student[]>(this.StudentBaseUrl);
  }


  addStudentData(student: Student2): Observable<any> {
    debugger
    const httpheaders = { 'content-type': 'application/json' }
    debugger
    const body = JSON.stringify(student);
    let options = {
      headers: httpheaders
    };
    debugger
    return this.httpservice.post(`${this.apiUrl}/api/Register/Student`, body, options);
  }

  //Student Section
}
