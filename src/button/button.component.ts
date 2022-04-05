import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'loader-button',
    template: `<button mat-button appLoader><ng-content></ng-content></button>`
})

export class LoaderButtonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}