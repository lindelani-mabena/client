import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css']
})
export class AdminUpdateProductComponent implements OnInit {

  product : Product = new Product();
  id:any;
  constructor(private _Router:Router, private _route:ActivatedRoute, private _HttpConnection:HttpConnectionService) { }

  ngOnInit(): void {
    this.id= this._route.snapshot.paramMap.get('id');
    alert(this.id);

  }

  updateProduct()
  {
    this._HttpConnection.updateProduct(this.id, this.product).subscribe((result)=>
    {
        alert("Product Updated Successfully");
    }, 
    (error)=>
    {
        alert("Error is " + error);
        console.log("Error is " + error.description);
    });
  }
}
