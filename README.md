# Accounting Made Simple

A modern and simple web app for managing organisations and tracking the core accounting equation: **Assets = Liabilities + Owner's Equity**.

Built with:
- Next.js 16 + React 19
- Tailwind CSS v4 and shadcn/ui-inspired components
- Prisma 7 + PostgreSQL
- Better Auth with magic link login and Resend email delivery
- EDINET and J-Quants financial data sources for Japanese companies
- Gemini-powered financial analysis and insights
- Zod / Prisma Zod generator for typed schema validation
- Recharts for simple financial charts

## Features

- Search organisations and equity data from EDINET/J-Quants
- Gemini-based analysis for selected financial data
- Store organisations, accounting equations, and user sessions in PostgreSQL
- Email-based magic link authentication via Resend
- Responsive, utility-first UI with custom components
- Prisma-generated types and database access layer

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-repo/accounting-made-simple.git
cd accounting-made-simple
```

### 2. Install dependencies

```bash
npm install
```

The repo runs `prisma generate` after install via `postinstall`.

### 3. Create `.env`

Create a `.env` file at the repo root and add the required variables:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
RESEND_API_KEY="your_resend_api_key"
J_QUANTS_API_KEY="your_j_quants_api_key"
EDINET_DB_API_KEY="your_edinet_db_api_key"
GEMINI_API_KEY="your_gemini_api_key"
```

### 4. Prepare the database

If you are using the existing Prisma migrations, run:

```bash
npx prisma migrate dev
```

If you only want to sync the schema without migrations, run:

```bash
npx prisma db push
```

### 5. Run the app

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — compile the Next.js production build
- `npm run start` — run the Next.js production server
- `npm run lint` — run ESLint checks

## Project Structure

- `app/` — Next.js App Router pages and API route for auth
- `components/` — shared UI components
- `lib/` — auth, Prisma client, utilities, data fetching helpers
- `prisma/` — schema, migrations, and generated Prisma helpers
- `public/` — static assets

## Auth

This app uses `better-auth` with the `magicLink` plugin. Emails are sent through `Resend` using the `RESEND_API_KEY` environment variable.

The auth API route is implemented at `app/api/auth/[...all]/route.ts`.

## Database Schema

Key models in `prisma/schema.prisma`:
- `User` — users and sessions
- `Organisation` — organisations owned by users
- `AccountingEquation` — asset/liability/equity records linked to organisations
- `Account` / `Verification` — auth/session support tables

## Notes

- The UI currently uses a search flow for organisations and equity lookup.
- Financial data is obtained from EDINET and J-Quants.
- The project currently targets Japanese companies only.
- If you change the Prisma schema, run `npx prisma generate` again.
- The homepage is implemented in `app/page.tsx` and renders search + equities list.

## License

This project is licensed under the MIT License.
