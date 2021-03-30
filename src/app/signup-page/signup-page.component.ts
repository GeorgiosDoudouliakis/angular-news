import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn } from '../animations/fade-in.animations';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  animations: fadeIn,
})
export class SignupPageComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login']);
  }
}
