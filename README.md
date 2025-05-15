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
npx wrangler d1 create post-api
```

Paste output like

```json
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "post-api",
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

Init

```bash
npx wrangler d1 migrations create post-api init
npx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0001_init.sql
npx wrangler d1 migrations apply post-api --local
npx wrangler d1 migrations apply post-api --remote
npx prisma generate
```

Adjust

```bash
npx prisma migrate diff --from-schema-datamodel ./prisma/schema.prisma --to-schema-datamodel ./prisma/schema1.prisma --script --output migrations/000x_adjust.sql
npx wrangler d1 migrations apply post-api --local
npx wrangler d1 migrations apply post-api --remote
npx prisma generate
```



##### KV

Create database by

```bash
npx wrangler kv namespace create post-api
```

Paste output like

```json
"kv_namespaces": [
    {
      "binding": "<BINDING_NAME>",
      "id": "<BINDING_ID>"
    }
]
```

to wrangler.jsonc

In index.ts, add the env

```typescript
interface Env {
  BINDING_NAME: KVNamespace;
  // ... other binding types
}
```

### GitHub

Attach and push to remote 

```bash
git remote add origin https://github.com/MonsterXia/PostAPI.git
git branch -M main
git checkout main
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Run



### Dev

```bash
npm run dev
```

Deploy

```bash
npm run deploy
```













