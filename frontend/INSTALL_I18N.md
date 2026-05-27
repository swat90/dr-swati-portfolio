# Install i18n packages

Run this ONE command in your frontend project folder:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

That's the only new dependency needed. Everything else stays the same.

## File structure to add/update in your project:

```
src/
├── main.jsx                          ← UPDATE (add i18n import)
├── i18n/
│   ├── i18n.js                       ← NEW
│   └── locales/
│       ├── fi.json                   ← NEW (Finnish — default)
│       ├── sv.json                   ← NEW (Swedish)
│       └── en.json                   ← NEW (English)
├── components/
│   ├── Nav.jsx                       ← UPDATE (uses t())
│   ├── Nav.module.css                ← UPDATE (adds lang switcher space)
│   ├── Hero.jsx                      ← UPDATE (uses t())
│   ├── About.jsx                     ← UPDATE (uses t())
│   ├── Contact.jsx                   ← UPDATE (uses t())
│   ├── LanguageSwitcher.jsx          ← NEW
│   └── LanguageSwitcher.module.css   ← NEW
```

## How it works:

1. Browser detects user language automatically (Finnish browser → Finnish)
2. User can manually switch via FI | SV | EN buttons in the navbar
3. Choice is saved in localStorage — persists across visits
4. Switching language is instant, no page reload

## To add translations to more components (Experience, Skills etc.):

1. Add keys to fi.json, sv.json, en.json
2. In the component: import { useTranslation } from 'react-i18next'
3. const { t } = useTranslation()
4. Replace hardcoded text with t('section.key')
