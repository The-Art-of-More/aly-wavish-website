# Deploy — Cloudflare Pages

This is a fully static site (`output: "export"` in `next.config.ts` — no
API routes, no `next/image`), so it deploys as plain static files. No
Vercel, no GitHub Actions, no repo secrets needed — Cloudflare Pages
builds and deploys directly from this GitHub repo.

You can do this whole thing yourself from the Cloudflare dashboard —
no CLI required.

## 1. Contact form delivery (do this first)

The contact form and the footer's enquiry capture both post to Formspree.
- Create a free form at [formspree.io](https://formspree.io), set its
  recipient to **aly@theartofmore.com.au** (Formspree emails a one-time
  confirmation link there — click it before the form works).
- Copy the form ID from the endpoint Formspree gives you
  (`https://formspree.io/f/<ID>`).
- You'll set this as an env var in step 3 below.

## 2. Connect the repo

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages**
   tab → **Connect to Git**.
2. Authorize the Cloudflare GitHub App for **The-Art-of-More** org (if
   not already done) and select the `aly-wavish-website` repo.
3. Production branch: `main`.

## 3. Build settings

- Framework preset: **Next.js (Static HTML Export)** — Cloudflare fills
  in the build command and output directory for you. If you set it up
  manually instead:
  - Build command: `npm run build`
  - Build output directory: `out`
- Environment variables (Settings → Environment variables, for both
  Production and Preview):
  - `NEXT_PUBLIC_FORMSPREE_FORM_ID` = the ID from step 1

Click **Save and Deploy**. First build takes a couple of minutes; you'll
get a working `*.pages.dev` URL immediately — that's a real preview of
the live site before any domain is attached.

## 4. Attach the domain (alywavish.com)

Domain is currently registered at **GoDaddy**.

1. Pages project → **Custom domains** → **Add a custom domain** →
   `alywavish.com` (repeat for `www.alywavish.com` if you want both).
2. If `alywavish.com` isn't already an active zone in this Cloudflare
   account, Cloudflare will walk you through adding it, which means
   pointing the domain's nameservers at Cloudflare. It gives you two
   nameserver values (e.g. `xxx.ns.cloudflare.com`) —
   set those at **GoDaddy → DNS → Nameservers** (switch from GoDaddy's
   default to "custom" and enter Cloudflare's two values).
3. Nameserver changes can take anywhere from a few minutes to ~24h to
   propagate. Once Cloudflare shows the zone as active, it auto-issues
   SSL and the custom domain goes live on its own — no extra DNS record
   needed beyond what Cloudflare sets up automatically.

## After that

- Every push to `main` = production deploy, automatically.
- Every other branch/PR gets its own `*.pages.dev` preview URL
  automatically — useful for reviewing changes (like this one) before
  they're merged to `main`.
- No repo secrets, no GitHub Actions workflow to maintain.
