import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ShippingPrice } from "./models/shipping-price";
import { Observable } from "rxjs";

@Injectable({
  // root - or a specific module by referencing the module class instead
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.getItems();
  }

  getShippingPrices(): Observable<any[]> {
    return <any>this.http.get('/assets/shipping.json')
  }

}
