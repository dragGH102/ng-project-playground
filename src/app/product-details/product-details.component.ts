import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { products } from '../products'
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-details',
  template: `
    <h2> Product details</h2>
    <div *ngIf="product; else productNotFound">
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price | currency }}</h4>
      <p>{{ product.description }}</p>
    </div>
    <ng-template #productNotFound>
      <h4>The product could not be found!</h4>
    </ng-template>
    <button
      *ngIf="product" 
      (click)="addToCart(product)"
    >Buy</button>
  `,
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // Why 'private'? => Tell AoT compiler should not be used in template
  constructor(
      private route: ActivatedRoute,
      private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // + casts to number
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert(`Your product ${product.name} has been added to the cart!`);
  }

}