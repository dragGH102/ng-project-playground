import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { ShippingPrice } from "../models/shipping-price";
import { Observable } from "rxjs";

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
  shippingPrices: Observable<ShippingPrice[]>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.shippingPrices = this.cartService.getShippingPrices();
  }

}
