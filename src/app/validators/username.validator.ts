import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';
import { User } from '../models/user.model';

export function forbiddenUsernameValidator(users: User[]): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return control.valueChanges.pipe(
      debounceTime(600),
      take(1),
      map((res) => {
        const takenUsername = [];
        for (let user of users) {
          if (user.username === control.value)
            takenUsername.push(user.username);
        }
        return takenUsername.length ? { usernameAvailable: false } : null;
      })
    );
  };
}
