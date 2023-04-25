import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Category } from '../../modal/category';
import { Student } from '../../modal/Student';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Course } from '../../modal/Course';
import { Batch, BatchDetail } from '../../modal/Batch';
import { Assessment } from '../../modal/Assessment';
import { Instructor } from '../../modal/Instructor';
import { Exam, QuizData } from '../../modal/Exam';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements HttpInterceptor {

  constructor(private httpservice: HttpClient, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }

  private apiUrl = environment.API_URL;

  
  AccountUrl: string = `${this.apiUrl}/api/Register`;

  AccountDetailByID(id: string) {
    return this.httpservice.get(this.AccountUrl + '/AccountId?AccountId=' + id);
  }

  UpdateAccount(updateData: any) {
    return this.httpservice.put(this.AccountUrl + '/' + updateData.accountId, updateData);
  }


  //Category Section

  baseURL: string = `${this.apiUrl}/api/Categories`;

  getData() {
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
  getstate(): Observable<any> {
    return this.httpservice.get<any>(`${this.apiUrl}/api/StateAndCities`);
  }

  getcity(id: string) {
    return this.httpservice.get(`${this.apiUrl}/api/StateAndCities/cities/${id}`);
  }
  //State & City

  //Document Upload
  documentapi: string = `${this.apiUrl}/api/DocumentUpload`;
  addDocument(file: File, AccountId: string, DocumentType: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('AccountId', AccountId);
    formData.append('DocumentType', DocumentType);
    debugger
    return this.httpservice.post(this.documentapi + '?AccountId=' + AccountId + '&DocumentType=' + DocumentType, formData);
  }

  //Document Upload

  //Course
  courseapi: string = `${this.apiUrl}/api/Course`;

  getCourseByCategoryId(id: string) {
    return this.httpservice.get(`${this.apiUrl}/api/Categories/Course/${id}`)
  }

  getCourseData() {
    return this.httpservice.get<Course[]>(this.courseapi);
  }
  
  gotoCourseData(id: string) {
    debugger
    return this.httpservice.get<Course>(this.courseapi + '/CourseCode?CourseCode=' + id);
  }

  deleteCourse(deleteData: any) {
    debugger
    return this.httpservice.delete(this.courseapi + '/' + deleteData);
  }

  addCourse(course: Course): Observable<any> {
    const httpheaders = { 'content-type': 'application/json' }
    const body = JSON.stringify(course);
    let options = {
      headers: httpheaders
    };
    return this.httpservice.post(this.courseapi, body, options)
  }

  
  editCourse(updatedData: any) {
    debugger
    return this.httpservice.put(this.courseapi + '/CourseCode?Coursecode=' + updatedData.courseCode, updatedData);
  }
  //Course


  //Batch
  batchapi: string = `${this.apiUrl}/api/Batch`;

  getBatch() {
    return this.httpservice.get<Batch[]>(this.batchapi);
  }

  getNewBatch() {
    return this.httpservice.get(this.batchapi + '/GetLastBatchID')
  }

  getCourseBatch(id:string) {
    return this.httpservice.get(this.batchapi + '/' + id);
  }

  addNewBatch(batch: Batch): Observable<any> {
    debugger
    const httpheaders = { 'content-type': 'application/json' }
    const body = JSON.stringify(batch);
    let options = {
      headers: httpheaders
    };
    return this.httpservice.post(this.batchapi, body, options);
  }

  gotoBatchData(id: string) {
    debugger
    return this.httpservice.get<Batch>(this.batchapi + '/' + id);
  }

  editBatch(updateData: any) {
    debugger
    return this.httpservice.put(this.batchapi + '/BatchCode?BatchCode=' + updateData.batchCode, updateData);
  }

  addBatchDetail(batch: BatchDetail): Observable<any>{
    debugger
    const formData = new FormData();
    formData.append('File', batch.File);
    formData.append('batchCode', batch.batchCode);
    formData.append('CourseCode', batch.CourseCode);
    debugger
    return this.httpservice.post(`${this.apiUrl}/api/BatchDetail`, formData);
  }

  //Batch





  //Student Section
  StudentBaseUrl: string = `${this.apiUrl}/api/`;

  getStudentData() {
    debugger
    return this.httpservice.get<Student[]>(this.StudentBaseUrl + 'Student');
  }


  addStudentData(student: Student): Observable<any> {
    debugger
    const httpheaders = { 'content-type': 'application/json' }
    debugger
    const body = JSON.stringify(student);
    let options = {
      headers: httpheaders
    };
    debugger
    return this.httpservice.post(this.StudentBaseUrl + 'Register/Student', body, options);
  }

  getStudentById(id: string) {
    debugger
    return this.httpservice.get<Student>(this.StudentBaseUrl + 'Register/StudentCode?StudentCode=' + id);
  }

  editStudent(updatedData: any) {
    return this.httpservice.put(this.StudentBaseUrl + 'Register/StudentCode?StudentCode=' + updatedData.studentCode, updatedData);
  }

  getStudentCourse(id: string) {
    return this.httpservice.get(this.StudentBaseUrl + 'Student/' + id);
  }

  //Student Section



  //Assessment

  addAssessment(assessment: Assessment): Observable<any>{
    const formData = new FormData();
    formData.append('File', assessment.File);
    formData.append('AssessmentName', assessment.AssessmentName);
    formData.append('CourseCode', assessment.CourseCode);
    debugger
    return this.httpservice.post(`${ this.apiUrl }/api/Assistment`, formData);
  }

  getAssessmentByCourseCode(id: string) {
    return this.httpservice.get<Assessment>(`${this.apiUrl}/api/Assistment/CourseCode?CourseCode=` + id);
  }

  getAssessmentExam(id: string): Observable<Exam> {
    return this.httpservice.get<Exam>(`${this.apiUrl}/api/Assistment/AssessmentCode?AssessmentCode=` + id);
  }

  getAssessmentResult(id: any): Observable<QuizData> {
    debugger
    return this.httpservice.post<QuizData>(`${ this.apiUrl }/api/Assistment/submit`, id);
  }
  
  //Assessment



  //Instructor Section
  InstructorApi: string = `${this.apiUrl}/api/`;

  getInstructor() {
    debugger
    return this.httpservice.get<Instructor[]>(this.InstructorApi + 'Instructor');
  }

  //getInstructorById(id: string): Observable<Instructor> {
  //  return this.httpservice.get<Instructor>(this.InstructorApi + '');
  //}

  getBatchByInstructor(id: string) {
    return this.httpservice.get(this.InstructorApi + 'Instructor/'+id);
  }

  //Instructor Section
}
