import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserListComponent } from "./users/pages/user-list/user-list.component";
import { AdminLayoutComponent } from "../../core/layout/admin-layout/admin-layout.component";

export const ADMIN_ROUTES: Routes = [

    {
        path: '', //admin
        component: AdminLayoutComponent,

        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },

            // USERS
            {
                path: 'users', //admin/users
                loadChildren: () => import('./users/users.routes').then(m => m.USERS_ROUTES)
            },

            // POSTS
            // {
            //     path: 'posts',
            //     children: [

            //         {
            //             path: '',
            //             component: AdminPostListPageComponent
            //         },

            //         {
            //             path: 'create',
            //             component: AdminPostCreatePageComponent
            //         },

            //         {
            //             path: ':id/edit',
            //             component: AdminPostEditPageComponent
            //         }

            //     ]
            // },

            // CATEGORIES
            // {
            //     path: 'categories',
            //     children: [

            //         {
            //             path: '',
            //             component: CategoryListPageComponent
            //         },

            //         {
            //             path: 'create',
            //             component: CategoryCreatePageComponent
            //         },

            //         {
            //             path: ':id/edit',
            //             component: CategoryEditPageComponent
            //         }

            //     ]
            // },

            // TAGS
            // {
            //     path: 'tags',
            //     children: [

            //         {
            //             path: '',
            //             component: TagListPageComponent
            //         },

            //         {
            //             path: 'create',
            //             component: TagCreatePageComponent
            //         },

            //         {
            //             path: ':id/edit',
            //             component: TagEditPageComponent
            //         }

            //     ]
            // },

            // COMMENTS
            // {
            //     path: 'comments',
            //     component: CommentModerationPageComponent
            // },

            // SETTINGS
            // {
            //     path: 'settings',
            //     component: SettingsPageComponent
            // }

        ]
    }

];

// /admin
// /admin /posts
// /admin /posts /create
// /admin /posts /1 /edit

// /admin /categories
// /admin /categories /create
// /admin /categories /1 /edit

// /admin /tags
// /admin /tags /create
// /admin /tags /1 /edit

// /admin /users
// /admin /users /1 /edit

// /admin /comments

// /admin /settings
