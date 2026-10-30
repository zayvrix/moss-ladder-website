# Moss Ladder — Pre-Launch Verification Checklist

Before taking the Moss Ladder corporate website live on a custom production domain, the owner must complete and verify the following operational items:

---

## 1. Domain Ownership & DNS Setup
- [ ] **Verify Domain Registration:** Ensure candidate domain `mossladder.com` (or your chosen alternative domain) has been purchased and registered under your ownership.
- [ ] **DNS Records:** In your DNS provider (or Cloudflare DNS), add the required CNAME records pointing to your Cloudflare Pages project (`moss-ladder.pages.dev`).
- [ ] **SSL / TLS Certificate:** Confirm Cloudflare's edge certificate is active (`Full` or `Strict` encryption).
- [ ] **Update Environment Variable:** In Cloudflare Pages project settings, set `SITE_URL` = `https://your-domain.com`.

---

## 2. Inboxes & Communications Routing
- [ ] **Mailbox Activation:** Ensure incoming mail is configured for `contact@your-domain.com` or `hello@your-domain.com` (via Google Workspace, Fastmail, Proton, Cloudflare Email Routing, etc.).
- [ ] **Update Contact Config:** In [`src/config/company.ts`](src/config/company.ts), set `contact.primaryEmail` to your active mailbox.
- [ ] **Test Mailto & Client Dispatch:** Submit the contact form on `/contact/` to verify your mail client opens with pre-filled parameters.
- [ ] **Optional Serverless Form Backend:** If using Turnstile or a transactional email API (e.g. Resend, Formspree), ensure secrets are stored exclusively in Cloudflare Pages environment variables, never committed client-side.

---

## 3. Legal Entity & Disclaimers
- [ ] **Legal Operator Name:** In [`src/config/company.ts`](src/config/company.ts), review `legal.operatorName` and `legal.operatorType`. If an LLC or corporate entity is formed in the future, update these values.
- [ ] **Privacy Policy Review:** Read [`src/pages/privacy.astro`](src/pages/privacy.astro) and adjust based on your specific operational jurisdiction and any third-party services added.
- [ ] **Terms of Use Review:** Read [`src/pages/terms.astro`](src/pages/terms.astro) to ensure financial disclaimers and limitation of liability meet your standards.

---

## 4. Social Accounts & External Profiles
- [ ] **Verify Account Ownership:** Confirm you actually own the social handles before adding them.
- [ ] **Configure Social Links:** In [`src/config/company.ts`](src/config/company.ts), populate `social.github`, `social.x`, or `social.linkedin`.
- [ ] **Zero Guessing Rule:** If an account does not exist or is not owned, leave it `undefined`. The site automatically suppresses icons for unconfigured accounts.

---

## 5. Portfolio Status & Link Audit
- [ ] **RothProRata Link Verification:** Confirm `https://rothprorata.com` is live and reachable from the homepage and product detail page.
- [ ] **Planned Products Audit:** Verify that upcoming tools (`IRMAA Clarity`, `OptiAMT`, `Supplemental Wage Tax Calculator`, `S-Corp Reasonable Salary Calculator`) remain labeled as `Planned` without misleading "Launch" or purchase buttons.
- [ ] **Attribution Standard:** Ensure each individual product footer contains standard attribution: *"A Moss Ladder digital product"*.

---

## 6. Performance, Accessibility & Technical QA
- [ ] **Run Astro Diagnostic Check:**
  ```bash
  npm run check
  ```
- [ ] **Run Automated Test Suite:**
  ```bash
  npm run test
  ```
- [ ] **Run Static Production Build:**
  ```bash
  npm run build
  ```
- [ ] **Mobile & Responsive Inspection:** Test viewports at 320px, 375px, 768px, 1024px, and 1440px. Confirm mobile menu opens, focus traps properly, and closes on Escape.
- [ ] **Reduced Motion Check:** Verify CSS respects `prefers-reduced-motion` settings.
- [ ] **Sitemap & Robots Verification:** Confirm `dist/sitemap-index.xml` and `dist/robots.txt` contain valid canonical URLs.
