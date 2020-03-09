import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <a [routerLink]="['/']">
      <h1>My Store</h1>
    </a>

    <a [routerLink]="['/cart']" class="button fancy-button">Checkout</a>
  `,
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
