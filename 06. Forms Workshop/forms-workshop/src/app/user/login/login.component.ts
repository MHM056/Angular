import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private route: Router) {}

  domains: string[] = EMAIL_DOMAINS;

  login(form: NgForm) {
    // ev.preventDefault();'
    if(form.invalid) {
      return;
    }
    this.userService.login();
    this.route.navigate(['/themes']);
  }
}

