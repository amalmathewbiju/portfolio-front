import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly adminCredentials = environment.adminCredentials;
  private readonly LOGIN_STATUS_KEY = 'isLoggedIn';

  isLoggedIn(): boolean {
    return localStorage.getItem(this.LOGIN_STATUS_KEY) === 'true';
  }

  login(username: string, password: string): boolean {
    const passwordMatches = bcrypt.compareSync(password, this.adminCredentials.passwordHash);

    if (username === this.adminCredentials.username && passwordMatches) {
      localStorage.setItem(this.LOGIN_STATUS_KEY, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.LOGIN_STATUS_KEY);
  }

}
