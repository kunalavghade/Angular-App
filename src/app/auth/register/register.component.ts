import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/Register';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form : RegisterForm = {
    email : '',
    password : '',
    password2 : ''
  }
  password_matched : boolean =  true;

  submit(){
    if(this.form.password !=this.form.password) {
      this.password_matched = false;
      return
    }
    console.log("userCredential");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  }
}
