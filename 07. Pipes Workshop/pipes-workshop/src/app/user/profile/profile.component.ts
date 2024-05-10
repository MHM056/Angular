import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) {}

  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: ''
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: ['', []],
  })

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    
    this.profileDetails = {
      username,
      email,
      tel
    }

    this.form.setValue({
      username,
      email,
      tel,
    });
  }

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  onCancel(): void {
    this.showEditMode = false;
  }

  saveProfile(): void {
    if(this.form.invalid){
      return;
    }
    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email, tel: tel } = this.profileDetails;
    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.onToggle();
    });
  }
}
