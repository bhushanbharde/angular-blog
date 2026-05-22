src/app/

├── core/
│
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
│
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
├── features/
│
│   ├── auth/
│   │
│   ├── admin/
│   │
│   │   ├── dashboard/
│   │   │
│   │   ├── posts/
│   │   │
│   │   │     ├── pages/
│   │   │     │     ├── post-list/
│   │   │     │     ├── post-create/
│   │   │     │     └── post-edit/
│   │   │     │
│   │   │     ├── components/
│   │   │     │     ├── post-table/
│   │   │     │     └── post-form/
│   │   │     │
│   │   │     ├── services/
│   │   │     │     └── admin-post.service.ts
│   │   │     │
│   │   │     └── store/
│   │   │
│   │   ├── users/
│   │   ├── categories/
│   │   ├── tags/
│   │   └── comments/
│   │
│   └── website/
│
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