import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  userConfirmedPassword = false;
  visible : boolean;
  constructor(private _ConnectionService: ConnectionService) { }
  ngOnInit(): void {
    this.visible = false;
    this._ConnectionService.getAllUsers().subscribe(result => {
      console.log("result is" + result);
    }, (error) => {
      console.log("error is" + error)
    });
  }
  signUp() {
    if (this.user.password == this.user.confirmPassword) {
      this.userConfirmedPassword = true;
      this._ConnectionService.addNewUser(this.user).subscribe(result => {

        console.log("User added " + result)
      }, (error) => {
        console.log("Error is" + error);
      });
    }
    else {
      this.visible = false;
    }
  }

}
