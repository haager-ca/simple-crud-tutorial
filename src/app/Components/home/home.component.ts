import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bookTitle: string = "Die unendliche Geschicht";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public books: string[] = [
    "Die unendliche Geschicht",
    "Die drei ??? Teil 1",
    "Die drei ??? Teil 2",
    "Die drei ??? Teil 3",
    "Die drei ??? Teil 4",
    "Die drei ??? Teil 5",
    "Die drei ??? Teil 6",
    "Top Secred Teil 1 'Der Clan'"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public transformBooTitle(title): string {
    return "Buch: " + title;
  }

  public onButtonClicked() {
    //this.showAlert = !this.showAlert;
    this.books.push("Buch Nr." + Math.round(Math.random() * 100))
  }

}
