import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';
import { LoadingService } from './loader.service';

@Directive({
    selector: '[appLoader]'
})
export class LoaderDirective {
    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
        private loadingService: LoadingService
    ) { }

    @HostListener('click', ['$event'])
    onClick(event: any) {
        event.preventDefault();
        let loader$ = this.loadingService.awaitRequest();
        this.showLoading();
        loader$.subscribe(
            () => {
                this.hideLoading();
            }
        )
    }

    showLoading() {
        this.renderer.addClass(this.elRef.nativeElement, 'loading');
        this.renderer.setAttribute(this.elRef.nativeElement, 'disabled', 'true');
    }

    hideLoading() {
        this.renderer.removeClass(this.elRef.nativeElement, 'loading');
        this.renderer.removeAttribute(this.elRef.nativeElement, 'disabled');
    }
}