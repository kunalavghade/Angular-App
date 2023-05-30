import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Appcomponent } from "./app.component";
import { BooksComponent } from './books/books.component';

@NgModule({
    declarations : [Appcomponent, BooksComponent],
    imports : [BrowserModule, FormsModule],
    bootstrap : [Appcomponent]
})
export class AppModule {}