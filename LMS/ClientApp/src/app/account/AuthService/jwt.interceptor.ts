import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private baseService: AuthserviceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //debugger
    const account = this.baseService.accountValue;
    const isLoggedIn = account && account.jwtToken && account.refreshToken;
    const isApiUrl = request.url.startsWith(`${environment.API_URL}/api`);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${account.jwtToken}`
        }
      });
    }

    return next.handle(request);
  }

  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'bearer' + token) });
  }
}
