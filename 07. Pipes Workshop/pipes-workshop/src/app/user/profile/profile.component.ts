import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    phoneNumber: ''
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    phoneNumber: ['', []],
  })

  ngOnInit(): void {
    const getUserDetails: any = localStorage.getItem('[user]');
    const userDetails = JSON.parse(getUserDetails);
    this.profileDetails.username = userDetails.firstName;
    this.profileDetails.email = userDetails.email;
    this.profileDetails.phoneNumber = userDetails.phoneNumber;
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
    this.onToggle();
  }
}
