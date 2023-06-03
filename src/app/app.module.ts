import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { Appcomponent } from "./app.component";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations : [Appcomponent, CartComponent],
    imports : [BrowserModule, FormsModule, BooksModule, AppRoutingModule],
    bootstrap : [Appcomponent]
})
export class AppModule {}