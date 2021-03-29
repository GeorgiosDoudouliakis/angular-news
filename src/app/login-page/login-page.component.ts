import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [style({ opacity: 0 }), animate(550)]),
    ]),
  ],
})
export class LoginPageComponent {
  loginButtonsStatus = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToLogin() {
    this.loginButtonsStatus = true;
    this.router.navigate(['login-form'], { relativeTo: this.activatedRoute });
  }
}
