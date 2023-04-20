import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {

  constructor( private loaderservice: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    debugger
    this.loaderservice.show();

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            this.loaderservice.hide();
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.loaderservice.hide();
          }
        })
    );
  }
}
