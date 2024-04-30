import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  themeId: string = '';
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.themeId = params['themeId'];
    })
    
    this.api.getTheme(this.themeId).subscribe((theme) => {
      console.log(theme);
      
      this.theme = theme;
    });
  }

  getSubscribers(): number {
    return this.theme.subscribers?.length;
  }
}
