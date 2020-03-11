import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-shipping',
  template: `
    <h3>Shipping Prices</h3>

    <div class="shipping-item" *ngFor="let shipping of shippingPrices | async">
      <span>{{ shipping.type }}</span>
      <span>{{ shipping.price | currency }}</span>
    </div>
  `,
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingPrices;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.shippingPrices = this.cartService.getShippingPrices();
  }

}
