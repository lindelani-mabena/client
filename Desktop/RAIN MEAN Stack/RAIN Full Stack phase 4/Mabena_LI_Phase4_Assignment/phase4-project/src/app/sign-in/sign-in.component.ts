import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ConnectionService } from '../services/connection.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  UsersList : Array<User> ;
  login: Login = new Login();


  constructor(private _ConnectionService:ConnectionService, private _router: Router) { }

  ngOnInit(): void {
    this._ConnectionService.getAllUsers().subscribe(result => {
      this.UsersList = result;
      console.log("result is" + result);
    }, (error) => {
      console.log("error is" + error)
    });

  }

  signIn()
  {
  this.UsersList.forEach(element => {

    if((element.email==this.login.email) && (element.password==this.login.password) )
    {
      console.log(element.email);
      localStorage.setItem('LoggedIn', 'true');
      localStorage.setItem('user', element.email.toString());
      this._router.navigate(['/home']);
    }
    else
    {
    } 
  });
  }
}
