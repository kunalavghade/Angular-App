import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;

  @Output() emiter = new EventEmitter<Book>();

  addToCart(){
    this.emiter.emit(this.book);
  }

}
