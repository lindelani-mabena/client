import { Component, OnInit } from '@angular/core';
import { HttpConnectionService } from '../http-connection.service';
import { User } from '../models/user';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user: User = new User();
  id:any;

  constructor(private _HttpConnectionService:HttpConnectionService) { 

  }

  ngOnInit(): void {
    this._HttpConnectionService.updateProfile(this.id,this.user).subscribe((result)=>
    {

    },(error)=>
    {

    })
  }

  updateProfile()
  {

  }

}


