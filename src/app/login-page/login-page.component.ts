import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginButtonsService } from '../services/login-buttons.service';

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
export class LoginPageComponent implements OnInit, OnDestroy {
  loginButtonsStatus?: boolean;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginButtonsService: LoginButtonsService
  ) {}

  ngOnInit() {
    this.loginButtonsService.loginButtonsStatus
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.loginButtonsStatus = status;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToLogin() {
    this.loginButtonsService.loginButtonStatusHandler(true);
    this.router.navigate(['login-form'], {
      relativeTo: this.activatedRoute,
    });
  }

  goToSignup() {
    this.loginButtonsService.loginButtonStatusHandler(true);
    this.router.navigate(['signup-form'], {
      relativeTo: this.activatedRoute,
    });
  }
}
