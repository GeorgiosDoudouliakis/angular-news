import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeIn } from '../animations/fade-in.animations';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
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
  signupUserLoading = false;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private _snackBar: MatSnackBar
  ) {}

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

  signUp() {
    const user: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
    };

    this.signupUserLoading = true;
    this.usersService
      .signupUser(user)
      .toPromise()
      .then(() => (this.signupUserLoading = false))
      .then(() => this.router.navigate(['/main-page']))
      .then(() => {
        this._snackBar.open('You have successfully signed in!', '', {
          duration: 3000,
          panelClass: ['success-msg'],
          verticalPosition: 'top',
        });
      });
  }
}
