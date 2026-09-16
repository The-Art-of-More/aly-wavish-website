# Deploy — Vercel setup runbook

This is a standalone static Next.js site (no API routes, no env vars) —
its own Vercel project, separate from The Art of More's deployment.
Nothing is wired yet. Steps below are one-time setup; after that, a push
to `main` deploys production automatically via `.github/workflows/deploy.yml`.

## One-time setup (needs a human with Vercel account access)

0. **Wire the contact form (Formspree).** The form in `components/Contact.tsx`
   posts to Formspree, which then emails the submission — no backend code,
   no Vercel secrets.
   - Create a free account at [formspree.io](https://formspree.io), make a
     new form, and set its notification/recipient email to
     `aly@theartofmore.com.au` (Formspree sends a one-time confirmation link
     to that inbox — it must be clicked before the form works).
   - Copy the form ID from the endpoint Formspree gives you
     (`https://formspree.io/f/<ID>`).
   - Set it as an env var:
     - **Locally**: copy `.env.example` to `.env.local`, fill in
       `NEXT_PUBLIC_FORMSPREE_FORM_ID`.
     - **On Vercel**: project → Settings → Environment Variables → add
       `NEXT_PUBLIC_FORMSPREE_FORM_ID` (Production + Preview).
   - Until this is set, the form shows a friendly error pointing visitors
     to `aly@theartofmore.com.au` directly instead of silently failing.

1. **Create the Vercel project.**
   - Vercel dashboard → **Add New → Project** → import
     `The-Art-of-More/aly-wavish-website` from GitHub (or, if the native
     Git integration is gated for this org's plan, create an empty project
     and skip the Git connection — the GitHub Action below deploys via
     CLI instead, so a live Git link isn't required).
   - Framework preset: Next.js (auto-detected). No env vars needed.

2. **Attach the domain** (if `alywavish.com` — inferred from the contact
   form's `hello@alywavish.com` — is the intended domain; confirm with Aly
   first): project → **Settings → Domains** → add it, then point its DNS
   at Vercel per the instructions Vercel shows.

3. **Get the CLI deploy working locally once**, which also produces the
   IDs GitHub Actions needs:
   ```bash
   npm install -g vercel
   vercel link        # choose the project you just created
   cat .vercel/project.json   # → { "orgId": "...", "projectId": "..." }
   ```

4. **Create a Vercel token**: dashboard → avatar → **Account Settings →
   Tokens** → create one scoped to the team/account the project lives in.

5. **Set the three GitHub repo secrets**:
   ```bash
   gh secret set VERCEL_TOKEN -R The-Art-of-More/aly-wavish-website
   gh secret set VERCEL_ORG_ID -R The-Art-of-More/aly-wavish-website
   gh secret set VERCEL_PROJECT_ID -R The-Art-of-More/aly-wavish-website
   ```
   (paste values from step 3 at the interactive prompts, or use `--body`)

6. **Push `main`** (or re-run the workflow via Actions → Deploy to Vercel
   → Run workflow) — first production deploy runs.

## After that

- Merge/push to `main` = production deploy, same as The Art of More's site.
- If the Vercel project *is* connected via native Git integration instead
  (Pro plan / personal scope), delete `.github/workflows/deploy.yml` first
  to avoid a double-deploy on every push.
- Contact form (`components/Contact.tsx`) is UI-only — it doesn't send
  anywhere yet. Wire it to an inbox/CRM before calling this fully live.
