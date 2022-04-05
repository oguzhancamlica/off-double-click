import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class FakeApiService {
    constructor(private api: ApiService) { }

    get() {
        return this.api.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
    }

    post() {
        return this.api.post('https://fakerestapi.azurewebsites.net/api/v1/Books', {
            "id": 0,
            "title": "string",
            "description": "string",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2022-04-04T23:51:10.836Z"
        });
    }

    getRealDataDelay(num: Number = 2000) {
        return this.api.get(`https://httpbin.org/delay/${num}`)
    }
}