import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Contact } from '../models/contact';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  
  constructor(private _HttpClient: HttpClient) {  
  }

  getAllUsers():Observable<User[]>
  {
    return this._HttpClient.get<User[]>("http://localhost:3000/users");
  }
  addNewUser(user: User):Observable<User>
  {
    return this._HttpClient.post<User>("http://localhost:3000/users", user);
  }
  updateUser(user: User):Observable<User>
  {
    return this._HttpClient.put<User>("http://localhost:3000/users", user);
  }

  addNewContact(contact: Contact):Observable<Contact>
  {
    return this._HttpClient.post<Contact>("http://localhost:3000/contacts", contact);
  }

  addNewBook(book: Book):Observable<Book>
  {
   return this._HttpClient.post<Book>("http://localhost:3000/books", book) 
  }
  getAllBooks():Observable<Book[]>
  {
    return this._HttpClient.get<Book[]>("http://localhost:3000/books")
  }
  updateBook(book: Book):Observable<Book>
  {
   return this._HttpClient.put<Book>("http://localhost:3000/books", book);
  }
}
  


