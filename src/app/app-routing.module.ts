import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    {path: '', component: BooksComponent},
    {path: 'cart', component: CartComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: RegisterComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
}