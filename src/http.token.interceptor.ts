import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { LoadingService } from './loader/loader.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private loading: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url + req.method;

    this.loading.pushRequest(url)

    const headersConfig = {
      'Accept': 'application/json; v=1.0',
      'Content-Type': 'application/json; v=1.0'
    };

    const request = req.clone({ setHeaders: headersConfig });

    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          this.loading.popResponse(url)
        }

        return new Observable<HttpEvent<any>>();
      }),
      map(event => {
        if (event instanceof HttpResponse) {
          this.loading.popResponse(url)
        }
        return event;
      })
    );
  }
}
