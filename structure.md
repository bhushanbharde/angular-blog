src/app/

core/
│
├── services/
│   ├── auth.service.ts
│   └── api.service.ts
│
├── guards/
│   └── auth.guard.ts
│
├── interceptors/
│   ├── auth.interceptor.ts
│   └── error.interceptor.ts
│
├── models/
│   ├── user.model.ts
│   └── auth-response.model.ts
│
└── core.config.ts

features/
│
└── auth/
    ├── pages/
    │   ├── login/
    │   └── register/
    │
    ├── components/
    │
    ├── services/
    │
    └── auth.routes.ts

layout/
│
├── navbar/
├── sidebar/
└── auth-layout/

shared/
│
├── components/
│
├── ui/
│   ├── button/
│   ├── input/
│   └── spinner/
│
└── pipes/

app.routes.ts