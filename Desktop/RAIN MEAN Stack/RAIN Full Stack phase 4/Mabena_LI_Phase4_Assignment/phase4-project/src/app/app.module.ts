import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { OnlineLibraryComponent } from './online-library/online-library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AuthenticationService } from './services/authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    UpdateProfileComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OnlineLibraryComponent,
    AddBookComponent,
    EditBookComponent,
    ViewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ], 
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
