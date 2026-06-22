import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./pages/auth-layout/auth-layout.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

export const AUTH_ROUTES: Routes = [

    {
        path: '',
        component: AuthLayoutComponent,

        children: [

            {
                path: 'login',
                // canActivate: [guestGuard],
                component: LoginComponent
            },

            {
                path: 'register',
                // canActivate: [guestGuard],
                component: RegisterComponent
            },

            // {
            //     path: 'forgot-password',
            //     component: ForgotPasswordPageComponent
            // },

            // {
            //     path: 'reset-password/:token',
            //     component: ResetPasswordPageComponent
            // }

        ]
    }

];

// /auth/login
// / auth / register
// / auth / forgot - password
// / auth / reset - password / token