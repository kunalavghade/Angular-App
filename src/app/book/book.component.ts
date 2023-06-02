import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;

  @Output() bookEmiter = new EventEmitter<Book>();

  addToCart(){
    this.bookEmiter.emit(this.book);
  }

}
