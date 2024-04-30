import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get<Theme[]>(`${this.apiUrl}/themes`);
  }

  getTheme(id: string) {
    return this.http.get<Theme>(`${this.apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const payload = { themeName, postText }
    return this.http.post(`/api/themes`, payload);
  }

  getPosts(limit?: number) {
    let url = `${this.apiUrl}/posts`;

    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }

  themeSubscribe(id: string) {
    return this.http.put(`/api/themes/${id}`, {});
  }

}
