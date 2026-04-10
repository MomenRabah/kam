# EventsCo - Bilingual Events Company Landing Page

A modern, high-converting bilingual (Arabic/English) landing page for an events and experience company.

## 🚀 Features

- **Bilingual Support** - Full Arabic (RTL) and English (LTR) support with i18next
- **Modern UI** - Built with React, Tailwind CSS, and custom components
- **Smooth Animations** - Framer Motion for engaging user experience
- **Responsive Design** - Mobile-first approach, works on all devices
- **Multiple Pages** - Home, Services, About Us, Contact Us
- **WhatsApp Integration** - Floating WhatsApp button for instant contact
- **SEO Ready** - Optimized structure for search engines

## 🎨 Brand Colors

- **Primary Orange**: `#E76424` - Energy, action, CTAs
- **Secondary Deep Blue**: `#242C66` - Trust, premium feel
- **Accent Yellow**: `#FBD900` - Highlights, attention
- **Background**: `#F4F6FB` - Clean base

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **i18next** - Internationalization
- **React Router** - Navigation
- **Lucide React** - Icons

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI components (Button, Card, Input, etc.)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   └── WhatsAppButton.tsx
├── sections/           # Page sections
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── ClientsSection.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   └── ContactSection.tsx
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── i18n/               # Internationalization
│   ├── config.ts
│   └── locales/
│       ├── en/common.json
│       └── ar/common.json
└── lib/                # Utilities
    └── utils.ts
```

## 🌍 Language Support

The application automatically:
- Detects and saves language preference in localStorage
- Switches text direction (LTR/RTL)
- Applies appropriate fonts (Inter for English, Cairo for Arabic)
- Updates all content dynamically

Toggle language using the button in the navbar.

## 📄 Pages

1. **Home** - Hero, Services, Clients, Stats, Testimonials, CTA, Contact
2. **Services** - Detailed services showcase
3. **About Us** - Company information and values
4. **Contact Us** - Contact form and information

## 🎯 Key Sections

- **Hero** - Eye-catching introduction with CTAs
- **Services** - 4 main service categories
- **Clients** - Trusted brand logos
- **Statistics** - Animated counters (500+ events, 1000+ clients, etc.)
- **Testimonials** - Client reviews
- **CTA** - Conversion-focused call-to-action
- **Contact** - Form with validation

## 🔧 Customization

### Update Translations
Edit files in `src/i18n/locales/en/` and `src/i18n/locales/ar/`

### Change Colors
Update `tailwind.config.js`:
```js
colors: {
  primary: "#E76424",
  secondary: "#242C66",
  accent: "#FBD900",
  background: "#F4F6FB",
}
```

### WhatsApp Number
Update in `src/components/WhatsAppButton.tsx`

## 📱 Contact

- **Phone**: +971 50 123 4567
- **Email**: info@eventscompany.com
- **Address**: 123 Event Street, Dubai, UAE

## 📝 License

All rights reserved © 2024 EventsCo
