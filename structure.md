src/app/

├── core/
│   ├── guards/
│   │     ├── auth.guard.ts
│   │     ├── admin.guard.ts
│   │     └── guest.guard.ts
│   │
│   ├── interceptors/
│   │
│   ├── services/
│   │
│   └── models/
│
├── shared/
│   ├── components/
│   ├── pipes/
│   ├── directives/
│   └── shared.module.ts
│
├── layouts/
│   ├── admin-layout/
│   │     ├── sidebar/
│   │     ├── header/
│   │     └── admin-layout.component.ts
│   │
│   └── website-layout/
│         ├── navbar/
│         ├── footer/
│         └── website-layout.component.ts
│
features/
└── admin/
    │
    ├── dashboard/
    │
    ├── users/
    │   ├── pages/
    │   │   ├── user-list/
    │   │   ├── user-detail/
    │   │   ├── user-create/
    │   │   └── user-edit/
    │   │
    │   ├── components/
    │   │   ├── user-form/
    │   │   └── user-table/
    │   │
    │   ├── services/
    │   │   └── user.service.ts
    │   │
    │   ├── models/
    │   │   └── user.model.ts
    │   │
    │   └── routes.ts
    │
    ├── posts/
    │   ├── pages/
    │   │   ├── post-list/
    │   │   ├── post-create/
    │   │   └── post-edit/
    │   │
    │   ├── components/
    │   │   ├── post-form/
    │   │   ├── post-table/
    │   │   └── post-filters/
    │   │
    │   ├── services/
    │   │   └── post.service.ts
    │   │
    │   ├── models/
    │   │   └── post.model.ts
    │   │
    │   └── routes.ts
    │
    ├── categories/
    │   ├── pages/
    │   │   ├── category-list/
    │   │   ├── category-create/
    │   │   └── category-edit/
    │   │
    │   ├── components/
    │   │   ├── category-form/
    │   │   └── category-table/
    │   │
    │   ├── services/
    │   │   └── category.service.ts
    │   │
    │   └── routes.ts
    │
    ├── tags/
    │   ├── pages/
    │   │   ├── tag-list/
    │   │   ├── tag-create/
    │   │   └── tag-edit/
    │   │
    │   ├── components/
    │   │   ├── tag-form/
    │   │   └── tag-table/
    │   │
    │   ├── services/
    │   │   └── tag.service.ts
    │   │
    │   └── routes.ts
    │
    |── settings/
    |   ├── pages/
    |   │   └── settings-page/
    │   │
    │   ├── services/
    │   │   └── settings.service.ts
    │   │
    │   └── routes.ts
│   │
│   └── website/
│       ├── home/
│       │
│       ├── blog/
│       │
│       │     ├── pages/
│       │     │     ├── blog-list/
│       │     │     └── blog-detail/
│       │     │
│       │     ├── components/
│       │     │     ├── blog-card/
│       │     │     ├── blog-search/
│       │     │     ├── comment-section/
│       │     │     ├── like-button/
│       │     │     └── share-button/
│       │     │
│       │     ├── services/
│       │     │     └── blog.service.ts
│       │     │
│       │     └── store/
│       │
│       ├── profile/
│       └── bookmarks/
│
├── app.routes.ts
└── app.config.ts



ng generate @angular/core:control-flow


src/
│
├── app/
│
├── core/
│   ├── services/
│   │   ├── api.service.ts
│   │   ├── auth.service.ts
│   │   ├── post.service.ts
│   │   ├── category.service.ts
│   │   └── tag.service.ts
│   │
│   ├── guards/
│   │   ├── auth.guard.ts
│   │   └── guest.guard.ts
│   │
│   ├── interceptors/
│   │   ├── auth.interceptor.ts
│   │   └── error.interceptor.ts
│   │
│   └── models/
│       ├── user.model.ts
│       ├── post.model.ts
│       └── category.model.ts
│
├── shared/
│   ├── components/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── pagination/
│   │   └── loader/
│   │
│   ├── pipes/
│   └── directives/
│
├── modules/
│
│   ├── website/
│   │
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── post-detail/
│   │   │   ├── category-posts/
│   │   │   └── tag-posts/
│   │
│   │   ├── website-routing.module.ts
│   │   └── website.module.ts
│
│   ├── auth/
│   │
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │
│   │   ├── auth-routing.module.ts
│   │   └── auth.module.ts
│
│   └── admin/
│       │
│       ├── pages/
│       │   ├── dashboard/
│       │   ├── posts/
│       │   ├── categories/
│       │   ├── tags/
│       │   └── users/
│       │
│       ├── admin-routing.module.ts
│       └── admin.module.ts
│
├── app-routing.module.ts
└── app.module.ts