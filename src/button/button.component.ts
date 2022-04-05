import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'loader-button',
    template: `<button mat-button appLoader (click)="onClick.emit()"><ng-content></ng-content></button>`
})

export class LoaderButtonComponent implements OnInit {
    @Output() onClick = new EventEmitter();

    constructor() { }

    ngOnInit() { }
}