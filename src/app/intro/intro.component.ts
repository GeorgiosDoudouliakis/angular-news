import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeOut } from '../animations/fade-out.animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: fadeOut,
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
      this.router.navigate(['/login']);
    }
  }
}
