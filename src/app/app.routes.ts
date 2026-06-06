// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./features/auth/pages/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
        // canActivate: [authGuard],
    },
    {
        path: '',
        loadChildren: () => import('./features/website/website.routes').then((m) => m.WEBSITE_ROUTES),
    },
    {
        path: '**',
        redirectTo: '',
    }
];