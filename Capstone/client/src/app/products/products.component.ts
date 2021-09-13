import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts: Array<Product> = [];
  cartItems:Array<Product> =[];
  categorySelected: string;

  constructor(private _HttpConnectionService: HttpConnectionService, private _CartService:CartService, private _Router:Router, private _ActivatedRoute: ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.categorySelected =this._ActivatedRoute.snapshot.paramMap.get('category');
    alert("category is"+ this.categorySelected);
    //getProductsByCategory(this.categorySelected)
    this._HttpConnectionService.getProductsByCategory(this.categorySelected).subscribe((result)=>{
      this.listProducts = result;
      console.log("list is"+ this.listProducts);
    },(error)=>
    {
      alert("Error encountered is "+ error.description);
    });
  }

  buyThisProduct(productItem:Product)
  {
    this.cartItems = this._CartService.retrieveCartItemsFromLocalStorage();
    this._CartService.addItemToCart(productItem);
    alert(productItem.name +" item added to the cart");
    this._Router.navigate(['/cart']);

  }

}
