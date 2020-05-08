import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-clases></app-clases>
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p [appResaltado]="'blue'">
      hola mundo
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
