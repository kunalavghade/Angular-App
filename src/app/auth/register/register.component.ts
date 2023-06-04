import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/Register';
import { AuthService } from '../auth.service';


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
  
  constructor(private authService: AuthService){}

  submit(){
    this.authService.signup(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
