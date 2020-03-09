import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { products } from '../products'

@Component({
  selector: 'app-product-details',
  template: `<p>
    product-details works!
  </p>`,
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // Why 'private'? => Tell AoT compiler should not be used in template
  constructor(
      private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // + casts to number
      this.product = products[+params.get('productId')];
    })
  }

}