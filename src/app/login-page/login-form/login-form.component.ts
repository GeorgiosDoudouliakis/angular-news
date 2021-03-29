import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginButtonsService } from 'src/app/services/login-buttons.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(
    private loginButtonsService: LoginButtonsService,
    private router: Router
  ) {}

  goToNews() {
    this.router.navigate(['/main-page']);
  }

  goBack() {
    this.loginButtonsService.goToLoginPage();
  }
}
