import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  template: `
    <h3>Cart</h3>

    <p>
      <a routerLink="/shipping">Shipping Prices</a>
    </p>

    <!-- Ngfor uses ngIf behind the good -->
    <div class="cart-item" *ngFor="let item of items">
      <span> {{ item.name }}</span>
      <span> {{ item.price | currency }} </span>
    </div>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
