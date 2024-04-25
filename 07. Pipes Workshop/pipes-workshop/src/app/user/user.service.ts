import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
   }

  login(email: string, password: string) {
    return this.http.post<UserForAuth>('/api/login', { email, password });
  }

  register(username: string, tel: string, email: string, password: string, rePassword: string) {
    return this.http.post<UserForAuth>('/api/register', {
      username,
      tel,
      email,
      password,
      rePassword
    });
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
    
  }

}
