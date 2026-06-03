import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [

    {
        // path: '',
        // component: AdminLayoutComponent,

        children: [

            // DASHBOARD
            // {
            //     path: '',
            //     component: DashboardPageComponent
            // },

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

            // USERS
            // {
            //     path: 'users',
            //     children: [

            //         {
            //             path: '',
            //             component: UserListPageComponent
            //         },

            //         {
            //             path: ':id/edit',
            //             component: UserEditPageComponent
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
