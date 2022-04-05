import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class LoadingService {
    inFlights = new Map();
    currentReq: any;

    constructor() { }

    awaitRequest(): Observable<any> {
        this.currentReq = new Subject();
        return this.currentReq;
    }

    pushRequest(url: any) {
        if (this.currentReq) {
            if (this.inFlights.has(url)) {
                this.currentReq.next();
                return;
            } else {
                this.inFlights.set(url, this.currentReq)
            }
        }
    }

    popResponse(url: any) {
        let pair = this.inFlights.get(url);
        if (pair) {
            pair.next();
            this.inFlights.delete(url);
        }
    }
}