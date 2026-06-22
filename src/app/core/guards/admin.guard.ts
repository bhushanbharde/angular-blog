import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { AuthService } from "../../features/auth/services/auth.service";

export const adminGuard:
    CanActivateFn = () => {

        const authService =
            inject(AuthService);

        const user = authService.currentUser$;
        console.log(authService.currentUser$)

        return true;
    };