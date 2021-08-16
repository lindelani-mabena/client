import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean
  { 
    if(this.isLoggedIn())
    {
      return true;
    }
    this._router.navigate(['/sign-in']);
    return false;
    
  }

  isLoggedIn():boolean
  {
    let status = false;
    if(localStorage.getItem('LoggedIn')=="true")
    {
      status = true;
    }
    else
    {
      status = false;
    }
    return status;
  }

  isAdminLoggedIn():boolean{
    let status = false;
    if(localStorage.getItem('user')=="admin")
    {
      status = true;
    }
    else 
    {
      status = false;
    }
    return status;
  }


  logOut()
  {
    localStorage.setItem('LoggedIn', 'false');
    localStorage.removeItem('user');
    this._router.navigate(['sign-in']);
  }
}
