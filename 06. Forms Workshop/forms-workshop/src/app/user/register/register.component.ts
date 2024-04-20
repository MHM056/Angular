import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
    passGroup: this.fb.group({ 
      password: ['', [Validators.required]], 
      rePass: ['', [Validators.required]] }),
  });

  constructor(private fb: FormBuilder) { }

  register(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}
