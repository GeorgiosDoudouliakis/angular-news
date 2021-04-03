import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { fadeIn } from '../animations/fade-in.animations';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { PasswordValidator } from '../validators/password.validator';
import { forbiddenUsernameValidator } from '../validators/username.validator';

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
  users: User[] = [];
  private readonly destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initializeForm();

    this.usersService.getUsers().subscribe((usersData) => {
      for (let user of usersData) {
        this.users.push(user);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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

  onSubmit() {
    this.signupUserLoading = true;
    this.signupUserAndShowNews({
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
    });
  }

  private initializeForm() {
    this.signupForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        username: new FormControl(
          '',
          Validators.required,
          forbiddenUsernameValidator(this.users)
        ),
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

  private signupUserAndShowNews(user: User) {
    this.usersService
      .signupUser(user)
      .pipe(
        finalize(() => {
          this.signupUserLoading = false;
          this.openSnackbar();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => this.router.navigate(['/main-page']));
  }

  private openSnackbar() {
    this._snackBar.open('You have successfully signed in!', undefined, {
      duration: 3000,
      panelClass: 'success-msg',
      verticalPosition: 'top',
    });
  }
}
