import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private router: Router) {}

  goToNews() {
    this.router.navigate(['/main-page']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
