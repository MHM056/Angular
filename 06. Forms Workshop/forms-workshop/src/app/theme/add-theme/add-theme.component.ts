import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {
  constructor(private api: ApiService) { }

  addTheme(ev: Event, themeName: string, postText: string) {
    ev.preventDefault();
    this.api.createTheme(themeName, postText);
  }
}
