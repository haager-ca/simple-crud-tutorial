import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string = "";
  public password: string = "";
  public formInvalid: boolean = false;

  constructor() { }

  public login(): void {
    if (this.username && this.password) {
      this.formInvalid = false;
      //Der Benutzer hat was in die Felder geschrieben.
      // ToDo
    } else {
      this.formInvalid = true;
    }
  }
}
