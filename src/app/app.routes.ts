// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
        import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
    },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
        canActivate: [authGuard],
    },
    {
        path: '',
        loadChildren: () => import('./features/website/website.routes').then((m) => m.WEBSITE_ROUTES),
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found-404/not-found-404.component')
            .then((m) => m.NotFound404Component),
    }
];