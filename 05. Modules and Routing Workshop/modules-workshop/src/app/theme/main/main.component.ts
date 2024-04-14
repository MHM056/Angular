import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(private userService: UserService, private route: Router) {}
  ngOnInit(): void {
    const isLogged: boolean = this.userService.isLogged;
    
    if(!isLogged) {
      alert('You need to be logged in to review this page');
      this.route.navigate(['/home']);
    }
  }
}
