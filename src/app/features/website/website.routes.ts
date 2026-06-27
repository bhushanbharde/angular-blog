
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { TagComponent } from './tag/tag.component';

export const WEBSITE_ROUTES: Routes = [

    {
        path: '',
        component: WebsiteLayoutComponent,

        children: [

            // HOME
            {
                path: '',
                component: HomeComponent
            },

            //BLOG LIST
            {
                path: 'posts',
                component: HomeComponent
            },

            // POST DETAILS
            {
                path: 'post/:id',
                component: BlogDetailComponent,
                data: { hideSidebar: true }
            },

            // // CATEGORY POSTS
            // {
            //     path: 'categories/:slug',
            //     component: CategoryPostsPageComponent
            // },

            // TAG POSTS
            {
                path: 'tag/:slug',
                component: TagComponent,
                data: {hideSidebar: true}
            },

            // // SEARCH
            // {
            //     path: 'search',
            //     component: SearchPageComponent
            // },

            // USER PROFILE
            // {
            //     path: 'profile',
            //     // canActivate: [authGuard],
            //     component: ProfileComponent
            // },

        ]
    }
];

