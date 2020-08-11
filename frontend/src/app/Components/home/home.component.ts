import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';
import { Book } from 'src/app/classes/book';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService, private formBuilder: FormBuilder) { }

  public bookTitle: string = "Die unendliche Geschicht";
  public showAlert: boolean = true;
  public isEdeting: number = undefined;
  public newBookPrice: number;
  public readonly maxTitleLength: number = 20;
  public books: Book[] = [];
  public newBookForm: FormGroup;
  public submitted: boolean = false;

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
    this.newBookForm = this.formBuilder.group({
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      author: new FormControl("", [Validators.required, Validators.minLength(3)]),
      price: new FormControl("", [Validators.required]),
    });
  }

  public transformBookTitle(title): string {
    return "Buch: " + title;
  }

  public addNewBook() {
    this.submitted = true;
    if (this.newBookForm.invalid) {
      return;
    }

    if (this.isEdeting) {
      //speichere die Änderungen
      const that = this;
      this.books = this.books.map(function (b) {
        if (b.id == that.isEdeting) {
          b.title = that.newBookForm.controls.title.value;
          b.authors = that.newBookForm.controls.author.value.split(", ");
          b.price = 10; //parseInt(this.newBookPrice, 10)
        }
        return b;
      });
    } else {
      // erstelle neuse Buch
      const book = new Book;
      book.title = this.newBookForm.controls.title.value;
      book.id = Math.round(Math.random() * 100000);
      book.authors = this.newBookForm.controls.author.value.split(", ");
      book.price = 10;
      book.publishDate = new Date();
      this.books.push(book);
    }
    this.newBookForm.controls.title.setValue("");
    this.newBookForm.controls.author.setValue("");
    this.isEdeting = undefined;
    this.storageService.setBooks(this.books);
    this.submitted = false;
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
    this.newBookForm.controls.title.setValue(book.title);
    this.newBookForm.controls.author.setValue(book.authors.join(", "));
  }

}
