# jazminamonteiro.com

Personal website for Jazmina Monteiro — Strategy, AI & Automation consulting.

## Stack

- React 19 + Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- react-router-dom 7
- react-hook-form + zod (form validation)
- lucide-react (icons)
- Google Fonts: Syne + DM Sans

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

| Path | Description |
|------|-------------|
| `/` | Main landing page |
| `/registro` | Free masterclass registration |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_N8N_WEBHOOK_URL` | n8n webhook URL for form submissions (optional) |

## Build

```bash
npm run build
# Output: dist/
```

## Deploy to Hostinger

1. Run `npm run build`
2. Upload contents of `dist/` to your public_html directory via FTP or File Manager
3. Configure `.htaccess` for SPA routing:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Deploy to Vercel / Netlify

Connect your GitHub repo. Both platforms detect Vite automatically.

For Netlify, add a `_redirects` file in `public/`:
```
/*  /index.html  200
```
