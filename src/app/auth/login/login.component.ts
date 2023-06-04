import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/Login';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form : LoginForm = {
    email: '',
    password : ''
  }

  isLoading : boolean = false;

  submit(){
    if(this.isLoading ==  true) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('ok');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      }).finally(()=> (this.isLoading = false));
  }
}
