import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ) { }

    get(path: string, params: HttpParams = new HttpParams(), prefix = 'api/'): Observable<any> {
        return this.http.get(`${path}`, { params })
            .pipe(
                catchError(err => {
                    return err;
                })
            );
    }


    post(path: string, body: Object = {}): Observable<any> {
        const api_url = path;

        return this.http.post(api_url,
            JSON.stringify(body)
        ).pipe(
            catchError(err => {
                return err;
            })
        );
    }
}
