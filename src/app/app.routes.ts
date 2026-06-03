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
        path: 'dashboard',
        loadComponent: () =>
            import('./features/admin/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        // canActivate: [authGuard],                // ✅ Protected!
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./features/website/home/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];