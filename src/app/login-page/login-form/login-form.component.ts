import { Component } from '@angular/core';
import { LoginButtonsService } from 'src/app/services/login-buttons.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private loginButtonsService: LoginButtonsService) {}

  goBack() {
    this.loginButtonsService.goToLoginPage();
  }
}
