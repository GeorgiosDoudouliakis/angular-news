import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const translateIn = [
  trigger('translateIn', [
    state('in', style({ transform: 'translateY(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateY(-500px)', opacity: 0 }),
      animate(700),
    ]),
  ]),
];
