import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ContactComponent } from './contact/contact.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './services/authentication.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewBooksComponent } from './view-books/view-books.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'update-profile', component:UpdateProfileComponent,canActivate: [AuthenticationService]},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'books', component:ViewBooksComponent, canActivate: [AuthenticationService]},
  {path:'add-book', component:AddBookComponent, canActivate: [AuthenticationService]}, 
  {path:'update-book', component: EditBookComponent, canActivate:[AuthenticationService]}
  // {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
