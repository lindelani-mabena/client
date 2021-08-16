import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();

  constructor(private _ConnectionService: ConnectionService) { }

  ngOnInit(): void {
  }

  addBook()
  {
    this._ConnectionService.addNewBook(this.book).subscribe(result =>
      {
        console.log("Book successfully added, it's name is "+ this.book.bookName);
      },(error)=>
      {
        console.log("error is " + error)
      })

  }

}
