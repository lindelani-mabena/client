import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { AuthenticationGuardService } from '../services/authentication-guard.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-check-out-cart',
  templateUrl: './check-out-cart.component.html',
  styleUrls: ['./check-out-cart.component.css']
})
export class CheckOutCartComponent implements OnInit {
  strikeCheckout: any = null;
  productItems: Array<Product> =[];
  totalPrice: number = 0;

  constructor(private _authenticationGuard:AuthenticationGuardService, 
    private _router: Router, private _CartService:CartService) { 
   
  }

  ngOnInit(): void {
    this.productItems= this._CartService.retrieveCartItemsFromLocalStorage();
  /*   if(!this._authenticationGuard.isLoggedIn())
    {
      this._router.navigate(['/login']);

    } */
  
    this.stripePaymentGateway();
    this.calculateTotal();
  }
  

  makePayment() {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JQ8PrSAnZsMJ5UED3cwwbXjocsWC1uE61CemwGUS5P0kqkSEiIRfHiNk2cJYdl3AfeWnADf2Aus8WHFhLzVyTSB00egnxrRmj',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'MakePayment',
      description: 'Payment widgets',
      amount: this.totalPrice
    });
    this._router.navigate(['/invoice']);
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
      window.document.body.appendChild(scr);
    }
  }
  calculateTotal()
  {
    for(let i=0; i<this.productItems.length;i++)
    {
      alert(this.productItems[i].price);
      this.totalPrice = this.totalPrice + this.productItems[i].price;
    }
  }
}
