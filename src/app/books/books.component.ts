import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Books';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  
  inputStr: string = '';
  isShowing: boolean = true;  
  books: Book[] = [];
  
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  } 
  
  ngOnInit(): void {}

  addToCart(book :any) {
    alert(book);
  }

}
