import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('passwordConfirm')?.value;

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }
  return null;
};