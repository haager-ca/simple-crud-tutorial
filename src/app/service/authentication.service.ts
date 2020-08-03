import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLoggedIn: boolean = false;

  public loggin(username: string, password: string): boolean {
    if (username == "test" && password == "cool") {
      this.isLoggedIn = true;
      return true;
    } else () => {
      this.isLoggedIn = false;
      return false;
    }
  }
}
