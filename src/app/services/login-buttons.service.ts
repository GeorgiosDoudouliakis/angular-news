import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginButtonsService {
  loginButtonsStatus = new BehaviorSubject(false);

  constructor(private router: Router) {}

  loginButtonStatusHandler(status: boolean) {
    this.loginButtonsStatus.next(status);
  }

  goToLoginPage() {
    this.loginButtonStatusHandler(false);
    this.router.navigate(['/login-page']);
  }
}
