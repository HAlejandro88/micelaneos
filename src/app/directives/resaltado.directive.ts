import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) { 
    console.log("Directiva LLamada"); // cuando esta ne le constructor no es necesatio poner this
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
