
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
// import { LoginComponent } from './features/auth/pages/login/login.component';
// import { authGuard } from '../../core/guards/auth.guard';
// import { WebsiteLayoutComponent } from './layout/website-layout.component';
// import { HomePageComponent } from './pages/home-page/home-page.component';
// import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
// import { BlogDetailPageComponent } from './pages/blog-detail-page/blog-detail-page.component';
// import { CategoryPostsPageComponent } from './pages/category-posts-page/category-posts-page.component';
// import { TagPostsPageComponent } from './pages/tag-posts-page/tag-posts-page.component';
// import { SearchPageComponent } from './pages/search-page/search-page.component';
// import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
// import { BookmarkPageComponent } from './pages/bookmark-page/bookmark-page.component';
// import { RegisterComponent } from './features/auth/pages/register/register.component';

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

            // BLOG LIST
            // {
            //     path: 'posts',
            //     component: BlogListPageComponent
            // },

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

            // // TAG POSTS
            // {
            //     path: 'tags/:slug',
            //     component: TagPostsPageComponent
            // },

            // // SEARCH
            // {
            //     path: 'search',
            //     component: SearchPageComponent
            // },

            // // USER PROFILE
            // {
            //     path: 'profile',
            //     canActivate: [authGuard],
            //     component: ProfilePageComponent
            // },

        ]
    }
];

