import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  template: `
  <p *ngIf="product.price > 700">
	  <button (click)="onNotifyClick(product)">Notify Me</button>
  </p>`,
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  onNotifyClick(product) {
    this.notify.emit(product)
  }

}