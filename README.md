# MusTech Group Corporate Portal (`mustechgroup.com`)

The official public-facing corporate website for **MusTech Group**, communicating the master conglomerate vision, portfolio products (Saalihat, Jenazah.sg, TaraBase), and Amanah ethical technology standards.

---

## Technical Architecture

* **Framework**: Next.js (App Router, Static Export `output: 'export'`)
* **Styling**: Tailwind CSS + Custom Brand Tokens
* **Edge Hosting**: Cloudflare Pages
* **Edge Routing**: Native `public/_redirects` and `public/_headers`
* **CI/CD**: GitHub Actions via `cloudflare/wrangler-action`

---

## Local Development

Run the Next.js local development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Building and Previewing for Cloudflare Pages

1. **Build Static Export**:
   ```bash
   npm run build
   ```
   Compiles static HTML, CSS, JavaScript, and copies edge redirects and headers into `out/`.

2. **Preview Locally with Wrangler**:
   ```bash
   npm run pages:dev
   ```
   Simulates Cloudflare Pages locally, including routing rules and header enforcement.

3. **Deploy to Cloudflare Pages via CLI**:
   ```bash
   npm run pages:deploy
   ```

---

## Automated CI/CD Deployment

Deployments trigger automatically on pushes to `main` via `.github/workflows/deploy.yml`.

### Required GitHub Secrets:
* `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Pages edit permissions.
* `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account identifier.

---

## Custom Domains & DNS Cutover

* **Production Domain**: `mustechgroup.com`
* **Canonical Subdomain**: `www.mustechgroup.com`
* **Cloudflare Pages Project Name**: `mustech-website`
