import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Books';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert Cecil Martin',
      src: "https://m.media-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      ammount: 700,
    },
    {
      name: 'Clean Code',
      author: 'Robert Cecil Martin',
      src: "https://m.media-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      ammount: 700,
    },
    {
      name: 'Clean Code',
      author: 'Robert Cecil Martin',
      src: "https://m.media-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      ammount: 700,
    }
  ];
  
  BooksComponent() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  inputStr: string = '';

  isShowing: boolean = true;

  addToCart(book :any) {
    alert(book);
  }

}
