import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { AuthService } from "./auth/auth.service";
import { firebaseConfig } from "./firebase.config";

@Component({
    selector : 'app-root',
    templateUrl: '/app.component.html',
    styleUrls : ['app.component.css'],
})
export class Appcomponent implements OnInit{

    constructor(private authService: AuthService){}

    ngOnInit(){
        initializeApp(firebaseConfig);
    }

    isAuthenticated() {
        return this.authService.isAuthenticated;
    }

    logout() {
        this.authService.logout();
    }
}