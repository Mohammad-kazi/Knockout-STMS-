import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  submitted: boolean = false;

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    if (this.userName === 'admin' && this.password === '1234') {
      alert('Login Successful');
      this.router.navigate(['/home']);
    } else {
      console.log(this.userName, this.password);
      alert('Login Failed');
      this.router.navigate(['/']);
    }
  }
}
