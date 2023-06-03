import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Appcomponent } from "./app.component";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations : [Appcomponent, CartComponent],
    imports : [BrowserModule, FormsModule, BooksModule],
    bootstrap : [Appcomponent]
})
export class AppModule {}