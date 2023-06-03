import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  
  constructor(private cart : CartService) {}

  isAdded : boolean = false;

  addToCart(){
    this.isAdded = true;
    this.cart.add(this.book);
  }

  removeFromCart() {
    this.isAdded = false;
    this.cart.remove(this.book);
  }

}
