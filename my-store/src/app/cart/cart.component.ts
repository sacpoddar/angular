import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {

    var data = { "items" : null, "customerData": null} ;
    data.items = this.items;
    data.customerData = customerData;

    window.alert('Your order has been submitted- '+  JSON.stringify(data));
    console.warn('Your order has been submitted', customerData);

    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
