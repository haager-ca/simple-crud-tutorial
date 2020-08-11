import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListBooksComponent } from "./Components/list-books/list-books.component";
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { JojnAuthorsPipe } from './piepes/jojn-authors.pipe';
registerLocaleData(localeDe, "de-DE", localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListBooksComponent,
    HomeComponent,
    LoginComponent,
    JojnAuthorsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "de-DE"
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
