import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordControl: string, rePasswordControl: string): ValidatorFn {
    return (control) => {
        const passFirst = control.get(passwordControl);
        const passSecond = control.get(rePasswordControl);
        const areMatching = passFirst?.value === passSecond?.value;
        return areMatching ? null : { matchPasswordsValidator: true };
    }
}