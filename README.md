# Server for post.246801357.xyz

## Initialization

### Cloudflare Worker

Init by

```bash
npm create cloudflare@latest -- post-api
cd post-api
```

#### Database

##### D1(Cloudflare)

Create database by

```bash
npx wrangler d1 create api-post
```

Paste output like

```json
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "api-post",
    "database_id": "<unique-ID-for-your-database>"
  }
]
```

to wrangler.jsonc

Also enable nodes_compat in wrangle.jsonc

```json
"compatibility_flags": ["nodejs_compat"],
```

##### Prisma

Add prisma by

```
npm install prisma@latest @prisma/client@latest @prisma/adapter-d1
npx prisma init --datasource-provider sqlite
```

In schema.prisma, add previewFeatures = ["driverAdapters"]

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
  previewFeatures = ["driverAdapters"]
}
```

Also in schema.prisma define the model

```prisma
model user {
  id           Int     @id @default(autoincrement()) 
  country      String                         
  score        Float      
}
```

Migrate

```bash
 npx wrangler d1 migrations create api-post init
npx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0001_init.sql
 npx wrangler d1 migrations apply api-post --local
 npx wrangler d1 migrations apply api-post --remote
 npx prisma generate
```

### GitHub

Attach and push to remote 

```bash
git remote add origin https://github.com/MonsterXia/PostAPI.git
git commit -m "Initial commit"

```















