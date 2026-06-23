import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserListComponent } from "./users/pages/user-list/user-list.component";
import { AdminLayoutComponent } from "../../core/layout/admin-layout/admin-layout.component";
import { TagListComponent } from "./tags/pages/tag-list/tag-list.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { TagCreateComponent } from "./tags/pages/tag-create/tag-create.component";

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
            {
                path: 'posts', //admin/posts
                loadChildren: () => import('./posts/posts.routes').then(m => m.POSTS_ROUTES)
            },

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
            {
                path: 'tags',
                children: [

                    {
                        path: '',
                        component: TagListComponent
                    },

                    {
                        path: 'create',
                        component: TagCreateComponent
                    },

                    {
                        path: ':id/edit',
                        component: TagCreateComponent
                    }

                ]
            },

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
