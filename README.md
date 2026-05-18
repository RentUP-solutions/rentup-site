# Rent Up — Website

Studio de design interior specializat în optimizarea apartamentelor pentru închiriere.

## Structura fișierelor

```
rentup-site/
├── index.html              ← Homepage
├── audit.html              ← Pagina audit (200€)
├── portofoliu.html         ← Portofoliu proiecte
├── rental-kit.html         ← Descriere Rental Kit
├── metodologie.html        ← Metoda Vizuală Rent Up (MVR)
├── realitatea-chiriei.html ← Situații frecvente & soluții
├── faq.html                ← Întrebări frecvente
├── simulator.html          ← Calculator cost mobilare
├── images/                 ← Adaugă fotografiile aici
│   ├── logo.svg
│   ├── hero-before-after.jpg
│   └── ...
└── README.md
```

## Deployment pe Netlify

1. Creează un repository pe GitHub și uploadează toate fișierele
2. Mergi pe [netlify.com](https://netlify.com) → New site from Git
3. Conectează repository-ul GitHub
4. Netlify detectează automat că e un site static
5. Deploy → site live în 2 minute

**Domeniu personalizat:** Settings → Domain management → Add custom domain → rentup.ro

## Înainte de lansare

- [ ] Înlocuiește `hello@rentup.ro` cu emailul real
- [ ] Înlocuiește `+40 000 000 000` cu telefonul real
- [ ] Înlocuiește `@rentup.ro` pe Instagram cu handle-ul real
- [ ] Adaugă fotografiile reale în folderul `images/`
- [ ] Completează CIF-urile în contracte
- [ ] Adaugă Facebook Pixel în `<head>` pe toate paginile
- [ ] Integrează un sistem de plată real pe simulator (Stripe)
- [ ] Testează formularul de audit că trimite emailuri

## Tehnologie

Site static HTML/CSS/JS pur. Fără framework-uri, fără dependențe externe.
Funcționează pe orice hosting static: Netlify, GitHub Pages, Vercel.
