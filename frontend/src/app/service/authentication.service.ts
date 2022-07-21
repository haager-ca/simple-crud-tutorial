import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private isLoggedIn: boolean = false;

  public login(username: string, password: string): boolean {
    if (username == "11" && password == "121") {
      this.isLoggedIn = true;
      return true;
    } else () => {
      this.isLoggedIn = false;
      return false;
    }
  }

  public get loggedIn() {
    return this.isLoggedIn;
  }
}
