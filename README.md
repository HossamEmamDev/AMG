# AMG Main Contracting — Website File Structure

## 📁 Root Directory
```
amg/
├── index.html                    ← Main Landing Page
├── careers.html                  ← All Careers Page (opens in new tab)
│
├── assets/
│   └── images/
│       ├── amg-logo.jpeg         ← AMG Group Logo
│       ├── amjaad.avif           ← Amjaad KSA Company Photo
│       └── electrocivic.avif     ← Electrocivic Egypt Company Photo
│
├── css/
│   ├── variables.css             ← All CSS Custom Properties (colors, fonts, sizes)
│   ├── base.css                  ← Reset, buttons, utilities, form elements
│   ├── navbar.css                ← Fixed navbar, dropdown, hamburger, RTL
│   ├── hero.css                  ← Video hero section, stats bar
│   ├── sections.css              ← Our Group cards, Services bento grid
│   ├── projects.css              ← Slider, modals, progress bars
│   ├── careers.css               ← Job board, apply form
│   ├── partners.css              ← Infinite scroll, testimonials, contact form
│   ├── contact.css               ← (Contact styles in partners.css)
│   ├── footer.css                ← Premium footer
│   ├── animations.css            ← Scroll reveal, counters, hero animations
│   └── modal.css                 ← All modal overlays
│
├── js/
│   ├── data.js                   ← Default data + localStorage API (getData/setData)
│   ├── lang.js                   ← AR/EN bilingual system, RTL/LTR toggle
│   ├── main.js                   ← Navbar, scroll, modals, counters
│   ├── projects.js               ← Slider, project detail modal, services render
│   ├── careers.js                ← Job board, apply modal, share buttons
│   ├── partners.js               ← Infinite scroll logos, testimonials
│   ├── contact.js                ← Contact form submission
│   └── animations.js             ← Intersection observer scroll reveal
│
├── php/
│   ├── send_contact.php          ← Contact form mailer (HTML email, spam headers)
│   └── send_apply.php            ← Career application mailer (with CV attachment)
│
└── dashboard/
    ├── index.html                ← CMS Dashboard (Admin Login + Full CMS)
    ├── css/
    │   └── dashboard.css         ← Dashboard styles (dark theme)
    └── js/
        └── dashboard.js          ← Full CMS logic (all CRUD operations)
```

## 🔐 Admin Access
- **URL:** `/dashboard/index.html`
- **Username:** `admin`
- **Password:** `987654321*`
- No login link on the public landing page

## 🌐 Language
- Auto-detects device language (AR/EN)
- Toggle button in navbar
- Full RTL support for Arabic

## ⚙️ Dashboard Features
- Site Settings: Colors, fonts, logo, favicon, hero content
- Sections: Show/hide + add/remove from navbar
- Services: Add/Edit/Delete with icon picker
- Projects: Add/Edit/Delete with image upload + progress bar
- Careers: Add/Edit/Delete job postings, toggle active/hidden
- Partners & Testimonials: Full CRUD
- Messages: View contact form submissions
- Applications: View job applications
- Team: Add/remove sub-admins with custom passwords
- Email Settings: Change HR email and contact email anytime

## 📧 PHP Mail Setup
Upload to any PHP-enabled hosting (Apache/Nginx + PHP 7.4+).
The PHP mailers use `mail()` with proper headers to avoid spam.
For production, consider using PHPMailer + SMTP (Gmail/SendGrid).

## 🎨 Color Palette (from AMG Logo)
- Primary: #B8860B (Copper/Bronze)
- Secondary: #2B2B2B (Charcoal)
- Background: #FAFAF8 (Off-white)

## 📝 Credits
Designed by **Hossam Emam** | WhatsApp: 011124711154
