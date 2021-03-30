import { AbstractControl } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmedPassword = control.get('confirmedPassword');
  return password &&
    confirmedPassword &&
    password.value !== confirmedPassword.value
    ? { differentPasswords: true }
    : null;
}
