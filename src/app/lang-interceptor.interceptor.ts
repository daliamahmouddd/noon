import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LangInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authRequest = req.clone({
      headers: req.headers.set('lang' , 'en'),
      body:{"googleId": "ChIJ88rv8bI_WBQRkvVBLDeZQUg"}
    });
    return next.handle(authRequest);
  }
}
