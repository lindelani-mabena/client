import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'phase4-project';
  loggedIn: boolean = false;
  adminLoggedIn: boolean= false;
  constructor(private _authentication: AuthenticationService)
  {
  }
  ngOnInit(): void {
    if (this._authentication.isLoggedIn()) {
      this.loggedIn = true;
      if(this._authentication.isAdminLoggedIn())
      {
        this.adminLoggedIn = true;
      }
      else{
        this.adminLoggedIn = false;
      }
    } else {
      this.loggedIn = false;
    }  }

    logout() {
      this._authentication.logOut();
      this.loggedIn = false;
    }
  
}




