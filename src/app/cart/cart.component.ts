import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { FormBuilder, Validators } from "@angular/forms";

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

    <form
      [formGroup]="checkoutForm"
      (ngSubmit)="onSubmit(checkoutForm.value)"
    >

      <label for="name">Name</label>
      <input id="name" type="text" formControlName="name">

      <label for="address">Address</label>
      <input id="address" type="text" formControlName="address">

      <button class="button" type="submit">Purchase</button>
    </form>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    // we initialize UI-related properties in constructor
    this.checkoutForm = this.formBuilder.group({
      name: [ 'sample name', Validators.required ],
      address: [ 'sample address', Validators.required ],
    })

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    alert(`Shipped to ${customerData.name} @ ${customerData.address}`);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
