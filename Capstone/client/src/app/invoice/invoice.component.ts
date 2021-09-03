import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  productItems: Array<Product> =[];
  totalPrice:number = 0;
  valueAddedTax: number=0;
  totalAmount: number =0;
  receiverEmailAddress ="";
 
  constructor(private _CartService: CartService) { 
    
  }

  ngOnInit(): void {
    this.productItems= this._CartService.retrieveCartItemsFromLocalStorage();
    this.calculateTotal();
    this.valueAddedTax = 0.15 *  this.totalPrice;
    this.totalAmount = this.totalPrice + this.valueAddedTax;
    this.receiverEmailAddress = localStorage.getItem('email');
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
