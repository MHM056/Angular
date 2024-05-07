import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  themeId: string = '';
  constructor(private api: ApiService, private route: ActivatedRoute, private userService: UserService) { }

  @ViewChild('form') form!: NgForm;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.themeId = params['themeId'];
    })

    this.api.getTheme(this.themeId).subscribe((theme) => {
      this.theme = theme;
    });

  }

  get currentUser(): string {
    return this.userService.user?.username || '';
  }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  get subscribers(): number {
    return this.theme.subscribers?.length;
  }

  hasUserLiked(postId: string): boolean {
    const currentPost = this.theme.posts.find(p => p._id === postId);
    return currentPost?.likes.includes(this.userId) ? true : false;
  }

  handlePost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { postText } = form.value;
    this.api.createPost(postText, this.themeId).subscribe(() => {
      this.api.getTheme(this.themeId).subscribe((theme) => this.theme = theme);
      this.form.resetForm();
    });
  }

  handleLike(postId: string): void {
    this.api.likePost(postId).subscribe(() => {
      const currentPost = this.theme.posts.find(p => p._id === postId);
      currentPost!.likes.push(this.userId);
    });
  }
}
