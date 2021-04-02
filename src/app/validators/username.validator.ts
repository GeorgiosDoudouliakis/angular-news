import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

export function forbiddenUsernameValidator(
  usersService: UsersService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<any> => {
    return usersService.getUsers().pipe(
      debounceTime(600),
      map((users: User[]) => {
        for (let user of users) {
          return user.username === control.value
            ? { usernameIsForbidden: true }
            : null;
        }
      })
    );
  };
}
