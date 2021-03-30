import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = [
  trigger('fadeIn', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [style({ opacity: 0 }), animate(550)]),
  ]),
];
