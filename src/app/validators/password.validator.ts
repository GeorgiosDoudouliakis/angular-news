import { AbstractControl } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmedPassword = control.get('confirmedPassword');
  if (password?.pristine || confirmedPassword?.pristine) {
    return null;
  }
  return password &&
    confirmedPassword &&
    password.value !== confirmedPassword.value
    ? { differentPasswords: true }
    : null;
}
