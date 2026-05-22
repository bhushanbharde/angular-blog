import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {
    const tokenService = inject(TokenService);
    const token = tokenService.get();

    if (token) {
        // ✅ Clone the request — HttpRequests are immutable
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
        });
        return next(authReq);
    }

    return next(req);
};