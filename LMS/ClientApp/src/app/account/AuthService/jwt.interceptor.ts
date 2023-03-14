import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private baseService: AuthserviceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const account = this.baseService.accountValue;
    const isLoggedIn = account && account.jwtToken;
    const isApiUrl = request.url.startsWith("https://localhost:7027/api");
    if (isLoggedIn && isApiUrl) {
      debugger
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${account.jwtToken}` && `Bearer ${account.refreshToken}`
        }
      });
    }

    return next.handle(request);
  }
}
