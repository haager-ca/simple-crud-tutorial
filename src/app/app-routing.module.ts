import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './Components/list-books/list-books.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';


const routes: Routes = [
  {
    path: "listBooks",
    component: ListBooksComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
