import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './models/contact';
import { LoginModelReturn } from './models/login-model-return';
import { Product } from './models/product';
import { User } from './models/user';
import { UserLogin } from './models/user-login';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectionService {

  private Users: Array<User> = [];

  cartItems:Array<Product>=[];



  constructor(private _HttpClient: HttpClient) {
  }
  RegisterUser(user: User): Observable<User> {
    return this._HttpClient.post<User>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/users', user);
  }
  getAllUsers(): Observable<Array<User>> {
    return this._HttpClient.get<Array<User>>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/users');
  }

   Login(userLogin:UserLogin):Observable<LoginModelReturn>
  { 
    return this._HttpClient.post<LoginModelReturn>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/users/login',userLogin);
  }      

  updateProfile(id:any,user: User):Observable<User>
  {
    return this._HttpClient.put<User>(`http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/users/${id}`,user);
  }

  addNewContactInfo(contact: Contact): Observable<Contact> {
    return this._HttpClient.post<Contact>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/contacts', contact)
  }
  getProducts(): Observable<Product[]> {
    return this._HttpClient.get<Product[]>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/products');
  }
  getProductsByCategory(strCategory: string): Observable<Product[]> {
    return this._HttpClient.get<Product[]>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/products/' + { strCategory });
  }
  addProduct(productObj: Product): Observable<Product> {
    return this._HttpClient.post<Product>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/products', productObj);
  }

  getProductById(id:string):Observable<Product>
  {
    return this._HttpClient.get<Product>(`http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/products/${id}`);
  }
  addToDatabase(productItem:Product):Observable<Product[]>
  {
    return this._HttpClient.get<Product[]>('http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/products');
  }
  addToCart(productItem)
  {
    this.cartItems.push(productItem);
    console.log("added new item to cart")
  }

  DeleteProduct(id:any):Observable<Product>
  {
    return this._HttpClient.delete<Product>(`http://ec2-18-218-173-161.us-east-2.compute.amazonaws.com/api/products/${id}`);
  }
}
