import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Use inject() to pull in services if needed, for example:
  // const authService = inject(AuthService);
  // const token = authService.getToken();
  
  return next(req);
};
