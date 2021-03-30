import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeOut = [
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
];
