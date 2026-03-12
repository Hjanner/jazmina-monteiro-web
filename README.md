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
| `/` | Upcoming landing page (coming soon) |
| `/rebuildpro` | Rebuild Pro™ masterclass landing + form |
| `/recurso` | Resource capsule form (PDF, video, image, link) |
| `/gracias` | Thank you page with WhatsApp redirect |

## Forms & Leads

### RegisterForm.jsx — `/rebuildpro`
Collects: `nombre`, `email`, `teléfono` (with country code selector)

**URL Parameters** (with defaults):
- `origin` — traffic source (ig, fb, email, etc.) → default: `"direct"`
- `keyword` — service keyword → default: `"general"`
- `temp` — lead temperature (frio, tibio, caliente) → default: `"frio"`
- `funnel` — funnel type (curso, capsula, rebuildpro) → default: `"curso"`

**Example:** `/rebuildpro?origin=ig&keyword=service&temp=tibio&funnel=curso`

**On Submit:** Sends to GHL webhook → Redirects to `/gracias`

### Recurso.jsx — `/recurso`
Collects: `nombre`, `email`, `teléfono` (same form as RegisterForm)

**URL Parameters** (with defaults):
- `origin` — traffic source → default: `"direct"`
- `keyword` — service keyword → default: `"general"`
- `temp` — lead temperature → default: `"frio"`
- `recurso` — resource type (pdf, video, imagen, link) → default: `"pdf"`
- `funnel` — funnel type → default: `"capsula"`

**Dynamic Copy:** Message adapts to `recurso` param:
- `pdf` → "Te enviaremos un PDF a tu correo" 📄
- `video` → "Te enviaremos un video a tu correo" 🎬
- `imagen` → "Te enviaremos una imagen a tu correo" 🖼️
- `link` → "Te enviaremos un enlace a tu correo" 🔗

**Example:** `/recurso?origin=ig&keyword=branding&temp=frio&recurso=pdf&funnel=capsula`

**On Submit:** Sends to GHL webhook → Shows inline success message (no redirect)

### GHL Webhook Integration
Both forms submit to the same GoHighLevel webhook endpoint:
```
https://services.leadconnectorhq.com/hooks/ii90EqqPaxlfzhF7czC1/webhook-trigger/c60e6642-9206-452e-a60e-0eb12a33f4a3
```

**RegisterForm Payload:**
```json
{
  "name": "...",
  "email": "...",
  "phone": "+1234567890",
  "origin": "ig",
  "keyword": "service",
  "temp": "frio",
  "funnel": "curso"
}
```

**Recurso Payload:**
```json
{
  "name": "...",
  "email": "...",
  "phone": "+1234567890",
  "origin": "ig",
  "keyword": "branding",
  "temp": "frio",
  "recurso": "pdf",
  "funnel": "capsula"
}
```

### Form Validation
Both forms use `registroSchema` from `src/utils/validation.js`:
- **nombre:** Min 3 characters, letters/spaces/hyphens only, at least 2 words (name + surname)
- **email:** Valid email format
- **telefono:** Min 6 digits total

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
