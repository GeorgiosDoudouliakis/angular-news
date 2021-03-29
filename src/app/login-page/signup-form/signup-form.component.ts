import { Component } from '@angular/core';
import { LoginButtonsService } from 'src/app/services/login-buttons.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  constructor(private loginButtonsService: LoginButtonsService) {}

  goBack() {
    this.loginButtonsService.goToLoginPage();
  }
}
