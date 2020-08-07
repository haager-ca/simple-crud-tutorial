import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  public bookTitle: string = "Die unendliche Geschicht";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public newBookAuthor: string = "";
  public isEdeting: number = undefined;
  public readonly maxTitleLength: number = 20;
  public books: Book[] = [];

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
  }

  public transformBookTitle(title): string {
    return "Buch: " + title;
  }

  public addNewBook() {
    if (this.isEdeting) {
      //speichere die Änderungen
      const that = this;
      this.books = this.books.map(function (b) {
        if (b.id == that.isEdeting) {
          b.title = that.newBookTitle;
          b.authors = [that.newBookAuthor];
        }
        return b;
      });
    } else {
      // erstelle neuse Buch
      const book = new Book;
      book.title = this.newBookTitle;
      book.id = Math.round(Math.random() * 100000);
      book.authors = this.newBookAuthor ? [this.newBookAuthor] : undefined;
      this.books.push(book);
    }
    this.newBookTitle = "";
    this.newBookAuthor = "";
    this.isEdeting = undefined;
    this.storageService.setBooks(this.books);
  }

  public deleteBook(book) {
    console.log(book);
    this.books = this.books.filter(function (b) {
      if (b.title == book.title) {
        return false;
      } else {
        return true;
      }
    });
    this.storageService.setBooks(this.books);
  }

  public editBook(book: Book) {
    this.isEdeting = book.id;
    this.newBookTitle = book.title;
    this.newBookAuthor = book.authors.join(", ");
  }

}
