import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Input('isLoggedIn') isLoggedIn = false;
  
  constructor(private route: Router) { }

  redirectToLogin() {
    this.route.navigate(['/auth/login'])
  }
  redirectToRegister() {
    this.route.navigate(['/auth/register'])
  }
}
