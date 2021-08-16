import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  listBooks: Array<Book> = [];
  constructor(private _ConnectionService: ConnectionService) { }

  ngOnInit(): void {
    this._ConnectionService.getAllBooks().subscribe(result => {
      this.listBooks = result;
      console.log("The size of this array is " + this.listBooks.length)
    },
      (error) => {
        console.log(error);
      })
  }/*  */

}
