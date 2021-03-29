import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('fadeOut', [
      state(
        'opened',
        style({
          height: '100%',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: 0,
          opacity: 0,
        })
      ),
      transition('opened => closed', animate(500)),
    ]),
  ],
})
export class IntroComponent {
  animationStatus = 'opened';

  constructor(private router: Router) {}

  fadeOutHandler() {
    this.animationStatus === 'opened'
      ? (this.animationStatus = 'closed')
      : (this.animationStatus = 'opened');
  }

  goToLogin() {
    if (this.animationStatus === 'closed') {
      this.router.navigate(['/login-page']);
    }
  }
}
