import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  showEditMode: boolean = false;
  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    phoneNumber: ''
  };

  ngOnInit(): void {
    const getUserDetails: any = localStorage.getItem('[user]');
    const userDetails = JSON.parse(getUserDetails);
    this.profileDetails.username = userDetails.firstName;
    this.profileDetails.email = userDetails.email;
    this.profileDetails.phoneNumber = userDetails.phoneNumber;
  }

  onEdit(): void {
    this.showEditMode = true;
  }

  onCancel(): void {
    this.showEditMode = false;
  }
}
