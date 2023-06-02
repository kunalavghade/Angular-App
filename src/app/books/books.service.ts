import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
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
  }

}
