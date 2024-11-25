import { Injectable, NgZone } from '@angular/core';
import { environment } from '../../environments/environment';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly adminCredentials = environment.adminCredentials;
  private readonly LOGIN_STATUS_KEY = 'isLoggedIn';
  private readonly AUTO_LOGOUT_TIME = 3600000; // 1 hour in milliseconds
  private logoutTimer: any;

  constructor(private ngZone: NgZone) {
    this.startAutoLogoutTimer();
    this.setupActivityListeners();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.LOGIN_STATUS_KEY) === 'true';
  }

  login(username: string, password: string): boolean {
    const passwordMatches = bcrypt.compareSync(password, this.adminCredentials.passwordHash);

    if (username === this.adminCredentials.username && passwordMatches) {
      localStorage.setItem(this.LOGIN_STATUS_KEY, 'true');
      this.resetAutoLogoutTimer(); // Reset timer on login
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.LOGIN_STATUS_KEY);
    this.clearAutoLogoutTimer(); // Clear timer on logout
  }

  private startAutoLogoutTimer(): void {
    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, this.AUTO_LOGOUT_TIME);
  }

  private resetAutoLogoutTimer(): void {
    this.clearAutoLogoutTimer(); // Clear existing timer
    this.startAutoLogoutTimer(); // Start a new timer
  }

  private clearAutoLogoutTimer(): void {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }
  }

  private setupActivityListeners(): void {
    const resetTimer = () => this.resetAutoLogoutTimer();

    // Listen for user activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    window.addEventListener('click', resetTimer);

   
  }
}
