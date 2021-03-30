import { Component } from '@angular/core';
import { translateIn } from '../animations/translate-in.animation';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: translateIn,
})
export class MainPageComponent {}
