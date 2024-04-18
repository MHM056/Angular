import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    // /[A-Za-z0-9.]{6,}.@gmail.(com|bg)
    return (control) => {
        console.log(control.value);

        return null;
    }
}