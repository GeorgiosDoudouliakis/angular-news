import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, take } from 'rxjs/operators';
import { User } from '../models/user.model';

// export function forbiddenUsernameValidator(
//   usersService: UsersService
// ): AsyncValidatorFn {
//   return (control: AbstractControl): Observable<any> => {
//     return usersService.getUsers().pipe(
//       debounceTime(600),
//       map((users: User[]) => {
//         for (let user of users) {
//           return user.username === control.value.username
//             ? { usernameIsForbidden: true }
//             : null;
//         }
//       })
//     );
//   };
// }

export function forbiddenUsernameValidator(users: User[]): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return control.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
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
