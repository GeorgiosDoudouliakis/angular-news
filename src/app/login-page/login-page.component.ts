import { Component } from '@angular/core';
import { fadeIn } from '../animations/fade-in.animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: fadeIn,
})
export class LoginPageComponent {}
