import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { LoginForm } from '../types/Login';
import { RegisterForm } from '../types/Register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  isLoading : boolean = false;
  isAuthenticated : boolean = false;

  login(form: LoginForm){
    if(this.isLoading ==  true) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        this.isAuthenticated = false;
      }).finally(()=> (this.isLoading = false));
  }


  signup(form: RegisterForm) {
    if(this.isLoading ==  true) return;
    this.isLoading = true;
    if(form.password != form.password2) {
      return
    }
    console.log("userCredential");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(()=> (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      }).catch((error) => {});
    this.isAuthenticated=false;
    this.router.navigate(['login']);
  }

}
