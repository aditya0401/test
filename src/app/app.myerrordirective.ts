import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[my-error]'
})

export class MyErrorDirective{
    constructor(el : ElementRef){
        el.nativeElement.style.background='red';
    }
}