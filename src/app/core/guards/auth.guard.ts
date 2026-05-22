import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { TokenService } from '../token.service';

export const authGuard: CanActivateFn = () => {

    const tokenService = inject(TokenService);
    const router = inject(Router);

    if (tokenService.exists()) {
        return true;                              // ✅ Allow access
    }

    return router.createUrlTree(['/login']);   // ✅ Redirect to login
};