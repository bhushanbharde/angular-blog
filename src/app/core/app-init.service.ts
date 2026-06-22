// src/app/core/app-init.service.ts
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { catchError, EMPTY } from 'rxjs';
import { AuthService } from '../features/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AppInitService {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  // Called once on app startup
  init() {
    if (!this.tokenService.exists()) {
      return EMPTY;                          // No token → skip API call
    }

    // Token exists → verify it's still valid + hydrate user state
    return this.authService.fetchCurrentUser().pipe(
      catchError(() => {
        // Token expired or invalid → clean up silently
        this.authService.logout();
        return EMPTY;
      })
    );
  }
}