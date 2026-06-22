import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  // BehaviorSubject for reactive auth state (null = not logged in)
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable(); // ✅ expose as Observable

  constructor(private http: HttpClient, private router: Router) { }

  // STEP 2 — Login API call
  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, payload)
      .pipe(
        tap((response: LoginResponse) => {
          this.storeToken(response.token);             // STEP 3
          this.currentUserSubject.next(response.user); // STEP 4
        })
      );
  }

  // STEP 3 — Store token
  private storeToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // STEP 4 — Auth state helpers
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getCurrentUser() {
    return this.http.get<{ user: User }>(`${this.apiUrl}/me`);
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  isAdmin(): boolean {
    // return this.currentUserSubject.value?.role_id === 1;
    return true;
  }

  // STEP 7 — Fetch current user from API (for app init)
  fetchCurrentUser(): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/user`)
      .pipe(tap((user) => this.currentUserSubject.next(user)));
  }

  // STEP 8 — Logout
  logout(): void {
    this.logoutApi();
    localStorage.removeItem('auth_token');
    this.currentUserSubject.next(null);
    this.router.navigate(['auth/login']);
  }

  // In auth.service.ts
  logoutApi(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {});
  }

  initializeAuth() {
    const token = this.getToken();
    if (!token) return;

    this.getCurrentUser().subscribe({
      next: res =>
        this.currentUserSubject.next(res.user)
    });
  }
}
