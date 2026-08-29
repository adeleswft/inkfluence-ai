# Inkfluence AI

Plug-and-play AI workflow templates and curated tool directory for freelancers, creators, and small business operators.

## Live Site

**https://yourusername.github.io/inkfluence-ai/**

Replace `yourusername` and `inkfluence-ai` with your actual GitHub username and repo name.

---

## Quick Deploy to GitHub Pages

1. Create a new GitHub repository (or use an existing one)
2. Upload these files to the repo:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
3. Go to **Settings** → **Pages** on your repo
4. Under **Source**, select **Deploy from a branch**
5. Select branch `main` and folder `/ (root)`
6. Click **Save**
7. Wait 1-2 minutes, then visit your live URL

That is it. No build step, no hosting fees, no server required.

---

## Customization Guide

### Change the brand name

Search and replace `Inkfluence AI` with your brand name in these files:
- `index.html` — appears in the title, nav, footer, and body text
- `styles.css` — no brand name references (pure styling)

### Change colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
  --accent: #7c3aed;        /* Main accent color (violet) */
  --accent-hover: #6d28d9;  /* Accent on hover */
  --bg: #0a0a0f;            /* Page background (near-black) */
  --bg-card: #14141f;       /* Card background */
  --text: #e2e8f0;          /* Main text color */
  --text-muted: #94a3b8;    /* Secondary text color */
}
```

### Add or remove tool cards

Each tool card in `index.html` follows this pattern:

```html
<div class="tool-card" data-category="writing">
  <div class="tool-meta"><span class="tool-category">Writing</span><span class="tool-tier">Free Tier</span></div>
  <h3>Tool Name</h3>
  <p>Short description of what the tool does.</p>
  <div class="tool-rating"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><span class="rating-note">Best for something</span></div>
  <a href="https://tool-url.com" target="_blank" rel="noopener" class="btn btn-outline btn-sm tool-link">Try Tool Name &rarr;</a>
</div>
```

The `data-category` attribute must match one of: `writing`, `design`, `automation`, `productivity`.

Star ratings: each `&#9733;` is one filled star. Use `&#9734;` for empty stars.

### Add affiliate tracking links

Replace the tool URLs with your affiliate-tracked versions:

```html
<!-- Before -->
<a href="https://jasper.ai" ...>

<!-- After -->
<a href="https://jasper.ai/?ref=inkfluence" ...>
```

### Connect the email form

The form currently shows a success message on submit but does not send data anywhere. To connect it:

**Option A: MailerLite (recommended, free up to 1,000 subscribers)**

1. Create a account at mailerlite.com
2. Create a form and get the embed code
3. Replace the `<form>` element in `index.html` with the MailerLite embed code
4. Or use the MailerLite JavaScript API to submit programmatically

**Option B: Substack**

1. Create your Substack newsletter
2. Get your subscribe URL
3. Change the form action to redirect there

**Option C: Formspree (free tier)**

1. Create a form at formspree.io
2. Change the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Add your Gumroad product link

Search for `https://gumroad.com` in `index.html` and replace it with your actual product URL:

```html
<a href="https://yourname.gumroad.com/l/your-product" ...>
```

### Add a custom favicon

Create an SVG file at `assets/favicon.svg` and add this to the `<head>` of `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
```

### Add an Open Graph image

Create a 1200x630px image and save it as `assets/og-image.png`. Then add to `<head>`:

```html
<meta property="og:image" content="https://yourusername.github.io/repo-name/assets/og-image.png">
```

---

## File Structure

```
/
├── index.html      # Main landing page (all sections)
├── styles.css      # Dark theme responsive design
├── script.js       # Filters, form, scroll, nav behavior
├── .nojekyll       # Tells GitHub Pages to skip Jekyll
├── assets/         # Future: favicon, images
└── README.md       # This file
```

---

## What to do next

1. **Push to GitHub** and enable Pages (see Quick Deploy above)
2. **Create 3 Notion templates** for the free vault assets:
   - Client-Onboarding AI Prompt Kit
   - Content Repurposing Matrix
   - AI Tool Quick-Start Guide
3. **Set up MailerLite** and connect the email form
4. **Apply to 5+ affiliate programs** (Jasper, Copy.ai, Make, Zapier, Canva)
5. **Set up Gumroad** and add your Pro Bundle product link
6. **Start posting on Reddit** (r/freelance, r/Entrepreneur, r/NotionSo) to drive traffic
7. **Create a Twitter/X account** and post weekly AI workflow threads

---

## License

This project is for personal use. Do not redistribute the template.

---

## SEO Subpages

Niche-specific landing pages target long-tail keywords and funnel visitors to the main site.

### real-estate.html
Targets: "AI tools for real estate agents", "AI prompts for real estate", "listing description AI"

To create a new niche subpage:
1. Copy `real-estate.html`
2. Rename it (e.g., `copywriters.html`)
3. Replace all real estate content with niche-specific copy
4. Update meta tags with new keywords
5. Add a link in the footer of `index.html`
