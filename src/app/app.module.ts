import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Appcomponent } from "./app.component";
import { BooksComponent } from './books/books.component';

@NgModule({
    declarations : [Appcomponent, BooksComponent],
    imports : [BrowserModule],
    bootstrap : [Appcomponent]
})
export class AppModule {}