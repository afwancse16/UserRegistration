import { ValidatorFn, AbstractControl } from '@angular/forms';

export const NAME_PATTERN = '^[a-zA-Z ]*$';

export const PHONE_PATTERN = '[0-9 ]{10}';

export const PASSWORD_PATTERN = '(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,})';

export const EXISTING_EMAILS = [
  'anc@abc.com',
  'xyz@123.com',
  'abc@abc.com',
  '123@abc.com',
  'abc@xyz.com',
];

export function MatchEmail(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.parent && control.parent.get('email').value
      && control.value && control.parent.get('email').value !== control.value) {
        return { emailMatch: true };
      }
      return null;
  };
}
