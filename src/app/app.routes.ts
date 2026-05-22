import { Routes } from '@angular/router';

export const routes: Routes = [
    // WEBSITE
    {
        path: '',
        loadChildren: () =>
            import('./features/website/website.routes')
                .then(m => m.WEBSITE_ROUTES)
    },

    // AUTH
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.routes')
                .then(m => m.AUTH_ROUTES)
    },

    // ADMIN
    {
        path: 'admin',
        canActivate: [authGuard, adminGuard],
        loadChildren: () =>
            import('./features/admin/admin.routes')
                .then(m => m.ADMIN_ROUTES)
    },

    // NOT FOUND
    {
        path: '**',
        loadComponent: () =>
            import('./shared/components/not-found/not-found.component')
                .then(c => c.NotFoundComponent)
    }
];
