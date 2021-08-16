import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  constructor(private _connectionService:ConnectionService) { }

  ngOnInit(): void {
  }

  contactUs()
  {
    this._connectionService.addNewContact(this.contact).subscribe(result=>
      {
        console.log("A new contact has been successfully added");
      }, 
      (error)=>
      {
        console.log("The error is "+ error)
      }) 
  }

}
