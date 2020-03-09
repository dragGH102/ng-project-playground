import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  template: `
  <h2>Products</h2>
  <div *ngFor="let product of products; index as productId">

    <h3>
      <a [title]="product.name + ' details'" [routerLink]="['/products', productId]" >
      {{ product.name }}
      </a>
    </h3>
    <p *ngIf="product.description">
      Description: {{ product.description }}
    </p>

    <button (click)="share(product)">
      Share
    </button>

    <app-product-alerts [product]="product" (notify)="onNotifyEvent($event)">
    </app-product-alerts>
  </div>`,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(product) {
    window.alert(`The product ${product.name} has been shared!`);
  }

  onNotifyEvent(product) {
    window.alert(`You will be notified when the product ${product.name} goes on sale`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/