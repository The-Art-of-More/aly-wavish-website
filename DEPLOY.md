# Deploy — Cloudflare Workers (static assets)

This is a fully static site (`output: "export"` in `next.config.ts` — no
API routes, no `next/image`), so it deploys as plain static files via
Cloudflare's Git-connected **Workers Builds** (the unified "Workers &
Pages" product — this account's dashboard doesn't show a separate
classic "Pages" product or a Framework preset / Build output directory
field, so ignore any instructions that mention those).

You can do this whole thing yourself from the Cloudflare dashboard —
no CLI required, beyond what's already in this repo (`wrangler.jsonc`).

## 1. Contact form delivery (do this first)

The contact form and the footer's enquiry capture both post to Formspree.
- Create a free form at [formspree.io](https://formspree.io), set its
  recipient to **aly@theartofmore.com.au** (Formspree emails a one-time
  confirmation link there — click it before the form works).
- Copy the form ID from the endpoint Formspree gives you
  (`https://formspree.io/f/<ID>`).
- You'll set this as an env var in step 3 below.

## 2. Connect the repo

1. Cloudflare dashboard → **Workers & Pages** → **Create** → connect to
   Git.
2. Authorize the Cloudflare GitHub App for **The-Art-of-More** org (if
   not already done) and select **`The-Art-of-More/aly-wavish-website`**
   specifically — double-check the org/repo name carefully; it's easy to
   end up connected to the wrong repo (a stray duplicate, or one under a
   similarly-named org) with no obvious warning, and every build will
   silently run against the wrong source with no indication why.
3. Production branch: `main`.

## 3. Build settings

There's no Framework preset or Build output directory field in this
product — just two commands:

- Build command: `npm run build` (this repo's `package.json` script
  already clears `.next`/`.open-next`/`out` before building, so a stale
  build cache can't silently skip the static export step)
- Deploy command: `npx wrangler deploy --assets=out --name=aly-wavish-website`
  — the explicit `--assets` flag matters: a bare `npx wrangler deploy`
  makes wrangler auto-detect this as a Next.js project needing the
  OpenNext/SSR adapter (installs `@opennextjs/cloudflare`, tries to
  deploy as a full Worker with service bindings) and fails on a
  self-reference binding that can't resolve on a first deploy. This repo
  has no SSR/API routes, so none of that applies — `wrangler.jsonc` in
  the repo root already declares the static-assets config too, but the
  explicit CLI flag is what actually stops wrangler from going down the
  OpenNext path in the first place.
- Environment variables (Settings → Variables, for both Production and
  Preview):
  - `NEXT_PUBLIC_FORMSPREE_FORM_ID` = the ID from step 1

Click **Save and Deploy**. First build takes a couple of minutes; you'll
get a working `*.workers.dev` URL immediately — that's a real preview of
the live site before any domain is attached.

## 4. Attach the domain (alywavish.com)

Domain is currently registered at **GoDaddy**.

1. Worker project → **Domains & Routes** → **Add** → `alywavish.com`
   (repeat for `www.alywavish.com` if you want both).
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
