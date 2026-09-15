# Prashanthi Super Speciality Hospital

Official Next.js site for Prashanthi Super Speciality Hospital, Khammam.

## Setup

1. Copy `.env.example` to `.env.local` and fill in Supabase + Resend keys.
2. Ensure Supabase has table `patient_inquiries` as documented in the project brief.
3. `npm install && npm run dev`

## Scripts

- `npm run dev` — local development
- `npm run build` — production build (Vercel)
- `npx tsx lib/validate-appointment.ts` — appointment validation self-check
