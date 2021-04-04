import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  users: User[] = [];
  hidePassword = true;
  loginUserLoading = false;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit() {
    this.initializeLoginForm();

    this.usersService.getUsers().subscribe((usersData: User[]) => {
      for (let user of usersData) {
        this.users.push(user);
      }
    });
  }

  get username() {
    return this.loginForm.value.username;
  }

  get password() {
    return this.loginForm.value.password;
  }

  goToNews() {
    this.router.navigate(['/main-page']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  private initializeLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
