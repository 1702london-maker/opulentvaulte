# OPV - Opulent Vault

This project is a Vercel-ready static packaging of the supplied Stitch exports.

The visible HTML is copied from Stitch and intentionally left visually unchanged. Configuration files only add routing, deployment metadata, validation, and the Supabase project URL.

## Supabase

Project URL:

```txt
https://rjskyzgkxnwxtkijqwgq.supabase.co
```

No anon/service key was supplied, so this repo does not include live Supabase writes. Add keys in Vercel environment variables when available.

## Local

```bash
npm install
npm run build
npm start
```

## Vercel

Use project name:

```txt
opv
```

Do not attach it to another existing Vercel project.
