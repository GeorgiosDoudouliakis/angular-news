import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeIn } from '../animations/fade-in.animations';
import { PasswordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  animations: fadeIn,
})
export class SignupPageComponent implements OnInit {
  signupForm!: FormGroup;
  hidePass = true;
  hideConfirmedPass = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),

        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmedPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      PasswordValidator
    );
  }

  get firstName() {
    return this.signupForm.value.firstName;
  }

  get lastName() {
    return this.signupForm.value.lastName;
  }

  get username() {
    return this.signupForm.value.username;
  }

  get password() {
    return this.signupForm.value.password;
  }

  get confirmedPassword() {
    return this.signupForm.value.confirmedPassword;
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  submitSignUp() {
    console.log(this.signupForm.getError('differentPasswords'));
  }
}
