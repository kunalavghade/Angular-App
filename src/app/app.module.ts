import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Appcomponent } from "./app.component";

@NgModule({
    declarations : [Appcomponent],
    imports : [BrowserModule],
    bootstrap : [Appcomponent]
})
export class AppModule {}