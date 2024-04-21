import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  showEditMode: boolean = false;

  username: string = '';
  email: string = '';
  phoneNumber: string = '';

  ngOnInit(): void {
    const getUserDetails: any = localStorage.getItem('[user]');
    const userDetails = JSON.parse(getUserDetails);
    this.username = userDetails.firstName;
    this.email = userDetails.email;
    this.phoneNumber = userDetails.phoneNumber;
  }

  onEdit() {
    this.showEditMode = true;
  }

  onCancel() {
    this.showEditMode = false;
  }
}
