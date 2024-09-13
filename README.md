# course-registration
Small script for course registration

# How to use
- initialize prisma and database

## Initialize Prisma and Database

### Step 1: Install Dependencies
- In the `.env` file, set the DATABASE_URL to your MySQL connection string:
```
DATABASE_HOST={ database host }
DATABASE_PORT={ database port }
DATABASE_USER={ database  }
DATABASE_PASSWORD=password
DATABASE_NAME=courses_registration
DATABASE_PROVIDER=mysql
DATABASE_URL=${DATABASE_PROVIDER}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}
```

```
npm i
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
ts-node prisma/seeds.ts
npm run start
```