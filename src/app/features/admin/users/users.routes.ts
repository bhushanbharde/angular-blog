import { Routes } from "@angular/router";
import { UserListComponent } from "./pages/user-list/user-list.component";
import { UserCreateComponent } from "./pages/user-create/user-create.component";
import { UserDetailComponent } from "./pages/user-detail/user-detail.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";

export const USERS_ROUTES: Routes = [

    {
        path: '',
        component: UserListComponent
    },

    {
        path: 'create',
        component: UserCreateComponent
    },

    {
        path: ':id',
        component: UserDetailComponent
    },

    {
        path: ':id/edit',
        component: UserEditComponent
    }
];