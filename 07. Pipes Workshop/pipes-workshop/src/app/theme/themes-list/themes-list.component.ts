import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  constructor(private api: ApiService, private userService: UserService) { }

  themes: Theme[] = [];
  isLoading: boolean = true;

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error: ', err);
        this.isLoading = true;
      }
    });
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((s) => s === this.userId);
    return isSubscribedUser;
  }

  handleSubscribe(el: any): void {
    const themeId = el.attributes.key.value;
    
    this.api.themeSubscribe(themeId).subscribe({
      next: () => {
        this.themes.find(theme => {
          if (theme._id === themeId) {
            theme.subscribers.length++;
          }
        });
      }
    });
  }
}
