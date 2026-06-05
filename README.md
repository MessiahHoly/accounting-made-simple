# Accounting Made Simple

A modern and simple web app for searching organisations, reviewing equity and filing data, and generating AI-powered financial insights. It combines J-Quants company search for Japanese companies, EDINET/Finnhub financial filings, and Gemini-powered analysis to help you explore financial health and accounting equation context.

Built with:
- Next.js 16 + React 19
- Tailwind CSS v4 and shadcn/ui-inspired components
- Prisma 7 + PostgreSQL
- Better Auth with magic link login and Resend email delivery
- EDINET, J-Quants, and Finnhub financial data sources
- Gemini / Google GenAI-powered financial analysis and insights
- Zod / Prisma Zod generator for typed schema validation
- Recharts for simple financial charts

## Features

- Search Japanese organisations and equity data from J-Quants
- Optional language selector for search and AI analysis results
- Company detail pages showing EDINET/Finnhub financial filings, charts, and accounting summaries
- AI-generated financial analysis from Gemini / Google GenAI
- Responsive, utility-first UI with custom components

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MessiahHoly/accounting-made-simple
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
FINNHUB_API_KEY="your_finnhub_api_ke"
```

### 4. Prepare the database

```bash
npx prisma migrate dev
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

## Database Schema

Key models in `prisma/schema.prisma`:
- `User` — users and sessions
- `Organisation` — organisations owned by users
- `AccountingEquation` — asset/liability/equity records linked to organisations
- `Account` / `Verification` — auth/session support tables

## Notes

- The UI currently uses a search flow for organisations and equity lookup with optional language selection.
- Company detail pages are implemented in `app/organisations/[equityCode]/page.tsx` and render Gemini-powered AI financial analysis, balance sheets, charts, and accounting summaries.
- Financial data is obtained from EDINET, J-Quants, and Finnhub.
- If you change the Prisma schema, run `npx prisma generate` again.
- The homepage is implemented in `app/page.tsx` and renders search + equities list.

## License

This project is licensed under the MIT License.
