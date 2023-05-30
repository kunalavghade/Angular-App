import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{
  
  name1: string =  'Clean Code';
  author1: string = 'Robert Cecil Martin';
  img1: string =  "https://m.media-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg";
  
  BooksComponent() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  inputStr: string = '';

  isShowing: boolean = true;

  // toggleBooks(){
  //   this.isShowing = !this.isShowing;
  // }

}
