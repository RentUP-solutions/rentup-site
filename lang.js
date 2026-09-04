/* ─── RentUP Language Toggle ─────────────────────────────────────────────── */
(function () {
  'use strict';

  /* ─── Translation dictionary (RO → EN) ───────────────────────────────── */
  var T = {
    /* ── Navigation (shared across all pages) ── */
    'Cum funcționează': 'How it works',
    'Pachete': 'Packages',
    'Portofoliu': 'Portfolio',
    'Raport gratuit →': 'Free report →',
    'Raport de Rentabilitate →': 'Profitability Report →',
    'Sari la conținut': 'Skip to content',
    'Deschide meniul': 'Open menu',
    'Închide meniul': 'Close menu',

    /* ── Footer (shared) ── */
    'București · Rental Performance System': 'Bucharest · Rental Performance System',
    '© 2025–2026 Rent UP. Toate drepturile rezervate  ': '© 2025–2026 Rent UP. All rights reserved  ',
    'Termeni și condiții': 'Terms & Conditions',
    'Politică de confidențialitate': 'Privacy Policy',

    /* ── Cookie banner ── */
    'Folosim cookie-uri': 'We use cookies',
    'Folosim cookie-uri pentru analiză și îmbunătățirea experienței. Poți accepta sau refuza cookie-urile opționale. ': 'We use cookies for analytics and improving your experience. You can accept or decline optional cookies. ',
    'Politică de confidențialitate →': 'Privacy Policy →',
    'Refuz': 'Decline',
    'Accept': 'Accept',

    /* ── WA Modal ── */
    'Cum te putem ajuta?': 'How can we help you?',
    'Raport de Rentabilitate gratuit': 'Free Profitability Report',
    'Staging Virtual (randări + plan)': 'Virtual Staging (renders + plan)',
    'Pachet Quick Win': 'Quick Win Package',
    'Proiect Invest (Standard sau Premium)': 'Invest Project (Standard or Premium)',
    'sau scrie direct:': 'or write directly:',
    'Trimite pe WhatsApp': 'Send via WhatsApp',

    /* ── Exit popup ── */
    'Raport de Rentabilitate · Gratuit': 'Profitability Report · Free',
    'Nu ai nevoie de un chiriaș perfect. Ai nevoie de un sistem care să nu te mai păcălească.': "You don't need a perfect tenant. You need a system that won't let you down.",
    'Aflați exact cât profit poate genera apartamentul tău. Raport livrat în 72h: potențial chirie, estimare buget implementare, intervenții prioritizate, ROI estimat.': 'Find out exactly how much profit your apartment can generate. Report delivered in 72h: rent potential, implementation budget estimate, prioritised interventions, estimated ROI.',
    'Vreau raportul gratuit →': 'I want the free report →',
    'Nu acum, poate altă dată': 'Not now, maybe later',
    'Emailul este folosit doar pentru livrarea raportului. Nu transmitem datele terților.': 'Your email is used only for report delivery. We do not share data with third parties.',
    'Sugerăm un număr de telefon pentru o comunicare mai rapidă.': 'We recommend a phone number for faster communication.',
    '✓ Raportul e confirmat. Te contactăm în 24h.': '✓ Report confirmed. We will contact you within 24h.',

    /* ── INDEX: Hero ── */
    'Rental Performance System · Design Interior · Selecție Chiriaș · Protecție Contractuală': 'Rental Performance System · Interior Design · Tenant Selection · Legal Protection',
    'Chiriași stabili.': 'Stable tenants.',
    'Venituri predictibile.': 'Predictable income.',
    'Transformăm apartamente obișnuite în active care produc venituri stabile prin: design funcțional, sistem complet de închiriere și selecție profesională a chiriașilor.': 'We transform ordinary apartments into assets that generate stable income through functional design, a complete rental system, and professional tenant selection.',
    'Găsirea unui chiriaș de încredere nu ar trebui să fie o loterie.': "Finding a reliable tenant shouldn't be a lottery.",
    'Sunt proprietar →': "I'm a property owner →",
    'Sunt investitor/ dezvoltator →': "I'm an investor / developer →",
    'până la +200€': 'up to +200€',
    'chirie lunară în plus': 'extra monthly rent',

    /* ── INDEX: Stats ── */
    'de la 8 luni': 'from 8 months',
    'recuperare a investiției': 'investment payback',
    '5 zile': '5 days',
    'până la primul chiriaș potrivit': 'to first matching tenant',
    'Gratuit': 'Free',
    'consultația inițială': 'initial consultation',

    /* ── INDEX: Rental Kit Teaser ── */
    'Rental Kit': 'Rental Kit',
    'Liniștea proprietarului are o rețetă.': "The landlord's peace of mind has a recipe.",
    'Designul aduce chiriașul potrivit.': 'The design brings the right tenant.',
    'Rental Kit-ul îl ține.': 'The Rental Kit keeps them.',
    'Cum listezi. Pe cine primești. Cum predai cheile fără să-ți pară rău după. Rental Kit-ul': 'How to list it. Who to accept. How to hand over the keys without regret. The Rental Kit',
    'este sistemul complet de documente, protocoale și contracte, personalizat pentru proprietatea ta.': 'is the complete system of documents, protocols and contracts, customised for your property.',
    'Sistem de selecție chiriaș pe 4 piloni': '4-pillar tenant selection system',
    'Contract de închiriere și încetare personalizat pentru proprietatea ta': 'Custom rental and termination contract for your property',
    'Protocol pas cu pas pentru când lucrurile merg prost': 'Step-by-step protocol for when things go wrong',
    'Ghid de utilizare pentru chiriaș. Relația începe fără nicio surpriză.': 'Tenant usage guide. The relationship starts without any surprises.',
    'Comunicare structurată și mentenanță pe toată durata contractului': 'Structured communication and maintenance throughout the contract',
    'La predare, totul e documentat prin proces verbal foto și inventar detaliat': 'At handover, everything is documented with a photo inspection report and detailed inventory',
    'Descoperă Rental Kit →': 'Discover Rental Kit →',

    /* ── INDEX: Risk Calculator ── */
    'Calculator risc': 'Risk Calculator',
    'Cât te costă un chiriaș greșit?': 'How much does a bad tenant cost you?',
    'Problema nu e chiriașul. E că l-ai ales fără un sistem.': "The problem isn't the tenant. It's that you chose without a system.",
    'Varianta zero nu costă zero. Fiecare schimbare de chiriaș are un cost real. Calculează cât te costă, cumulat, pe termen lung.': "The zero option doesn't cost zero. Every tenant change has a real cost. Calculate your cumulative exposure over the long term.",
    'Chiria ta lunară': 'Your monthly rent',
    'De câte ori ai schimbat chiriașul în ultimii 5 ani': 'How many times did you change tenants in the last 5 years',
    'În medie, un proprietar fără sistem de selecție rulează 3–4 chiriași în 5 ani': 'On average, a landlord without a selection system goes through 3–4 tenants in 5 years',
    'Estimări medii la o experiență proastă cu un chiriaș': 'Average estimates for one bad tenant experience',
    'Luni goale după plecare': 'Empty months after departure',
    '~1,5 luni': '~1.5 months',
    'Daune și curățenie': 'Damages & cleaning',
    '~1.500€': '~€1,500',
    'Timp pierdut': 'Time lost',
    '~20 ore': '~20 hours',
    'Vezi pachetul Quick Win →': 'See Quick Win package →',
    'Expunerea ta cumulată, nu doar un incident izolat': 'Your cumulative exposure, not just an isolated incident',
    'Chirie pierdută': 'Lost rent',
    'Timpul tău': 'Your time',
    'Total pierdut estimat': 'Total estimated loss',
    '* Estimări orientative pentru proprietăți neoptimizate din București, calculate pe baza costurilor medii per schimbare de chiriaș.': '* Indicative estimates for non-optimised properties in Bucharest, calculated based on average costs per tenant change.',

    /* ── INDEX: ROI Calculator ── */
    'Calculator ROI': 'ROI Calculator',
    'Cât poți câștiga în plus': 'How much extra can you earn',
    'dintr-un': 'from an',
    'apartament optimizat?': 'optimised apartment?',
    'Completează datele, vezi imediat diferența.': 'Enter the data and see the difference immediately.',
    'Oraș': 'City',
    'București / Cluj': 'Bucharest / Cluj',
    'Brașov / Constanța': 'Brasov / Constanta',
    'Iași / Timișoara': 'Iasi / Timisoara',
    'Tip proprietate': 'Property type',
    'Garsonieră': 'Studio',
    '2 camere': '2 rooms',
    '3 camere': '3 rooms',
    'Suprafața': 'Area',
    'Chiria actuală': 'Current rent',
    'Orizont de timp': 'Time horizon',
    '5 ani': '5 years',
    '10 ani': '10 years',
    'Vorbim despre apartamentul tău →': "Let's talk about your apartment →",
    'Estimare comparativă': 'Comparative estimate',
    'Chirie actuală / lună': 'Current rent / month',
    'Chirie după optimizare': 'Rent after optimisation',
    'Venit net fără optimizare': 'Net income without optimisation',
    'Venit net cu optimizare': 'Net income with optimisation',
    'Câștig suplimentar estimat': 'Estimated additional gain',
    'Scenariu': 'Scenario',
    'Chiriași': 'Tenants',
    'Luni goale': 'Empty months',
    'Venit brut': 'Gross income',
    'Net final': 'Final net',
    '* Estimările sunt orientative, bazate pe date medii de piață per categorie de oraș. Valorile individuale variază în funcție de zonă, etaj și starea apartamentului.': '* Estimates are indicative, based on average market data per city category. Individual values vary depending on location, floor, and apartment condition.',

    /* ── INDEX: Client Fit ── */
    'Este pentru tine?': 'Is this for you?',
    'Lucrăm cu proprietarii care vor rezultate reale.': 'We work with landlords who want real results.',
    '✓ Potrivit pentru tine dacă...': '✓ Right for you if…',
    'Te muți și vrei să închiriezi: vrei apartamentul pregătit, nu improvizat': "You're moving and want to rent: you want the apartment ready, not improvised",
    'Ai avut un chiriaș problematic și vrei un sistem care să nu mai repete asta': "You've had a problematic tenant and want a system so it never happens again",
    'Ai un apartament de investiție și vrei chirie peste media zonei': 'You have an investment apartment and want above-average rent for the area',
    'Ai un buget realist și ești dispus să urmezi un proces cu etape clare': "You have a realistic budget and are willing to follow a process with clear steps",
    'Vrei mai mult decât un anunț pe OLX: vrei apartamentul pregătit profesional': 'You want more than a listing on OLX: you want the apartment professionally prepared',
    'Ești deschis la recomandări bazate pe piață, nu doar pe preferințe estetice': 'You are open to market-based recommendations, not just aesthetic preferences',
    '✗ Nu este pentru tine dacă...': '✗ Not for you if…',
    'Vrei „doar niște randări rapide" fără să implementezi nimic': 'You want "just some quick renders" without implementing anything',
    'Schimbi direcția săptămânal sau nu ai o decizie clară despre apartament': 'You change direction weekly or have no clear decision about the apartment',
    'Vrei validare pentru ce ai decis deja, nu o perspectivă profesională nouă': 'You want validation for what you have already decided, not a fresh professional perspective',
    'Nu ești dispus să urmezi etapele unui proces': "You're not willing to follow the steps of a process",
    'Ai nevoie de rezultate în câteva zile, nu săptămâni': 'You need results in a few days, not weeks',
    'Lucrăm cu proprietari cu obiective diferite: de la design simplu pentru o închiriere rapidă, la investiții complete cu ROI pe termen lung. Dacă vrei ca apartamentul tău să lucreze pentru tine, suntem în locul potrivit.': 'We work with landlords with different goals: from simple design for a quick rental, to complete investments with long-term ROI. If you want your apartment to work for you, we are in the right place.',

    /* ── INDEX: Process ── */
    'Un proces clar. Fără surprize.': 'A clear process. No surprises.',
    'După Raportul de Rentabilitate inițial (livrat în 72h), pornește acest proces clar în 4 pași: de la prima discuție până la apartamentul gata de listare.': 'After the initial Profitability Report (delivered in 72h), this clear 4-step process begins: from the first discussion to the apartment ready for listing.',
    'Discuție inițială & vizionarea imobilului': 'Initial discussion & property viewing',
    'Vizionăm imobilul, înțelegem spațiul, obiectivul de închiriere, bugetul și publicul țintă. Fără brief standard, deoarece fiecare proprietate e diferită.': 'We view the property, understand the space, rental goal, budget, and target audience. No standard brief, because every property is different.',
    '2–5 zile': '2–5 days',
    'Primești:': 'You receive:',
    'plan de etape confirmat și măsurători ale spațiului': 'confirmed step plan and space measurements',
    'Concept & direcție': 'Concept & direction',
    'Propunem direcția estetică și funcțională. Tu confirmi direcția înainte să mergem mai departe. Ce aprobăm azi nu se schimbă mâine.': 'We propose the aesthetic and functional direction. You confirm the direction before we proceed. What we approve today does not change tomorrow.',
    '1–2 săptămâni': '1–2 weeks',
    '2 direcții de design + moodboard': '2 design directions + moodboard',
    'Design & vizualizare': 'Design & visualisation',
    'Planuri detaliate, Listă de achiziții și documentație tehnică, randări fotorealiste. Vezi exact cum va arăta spațiul înainte să cumperi ceva.': 'Detailed plans, purchase list and technical documentation, photorealistic renders. See exactly what the space will look like before buying anything.',
    '3–5 săptămâni': '3–5 weeks',
    'planuri 2D, randări fotorealiste, listă de achiziții și documentație tehnică': '2D plans, photorealistic renders, purchase list and technical documentation',
    'Livrare & piață': 'Delivery & market',
    'Rental Kit complet, staging și fotografii profesionale, listare pe platforme. Apartamentul intră pe piață pregătit.': 'Complete Rental Kit, professional staging and photography, listing on platforms. The apartment enters the market ready.',
    'etapa finală': 'final stage',
    'Rental Kit, fotografii profesionale și anunț live': 'Rental Kit, professional photos and live listing',
    'Brief confirmat': 'Brief confirmed',
    'Direcție aprobată': 'Direction approved',
    'Randări finale': 'Final renders',
    'Apartament listat': 'Apartment listed',
    '1–2 săpt': '1–2 wks',
    '3–5 săpt': '3–5 wks',
    'Design Interior Simplu:': 'Simple Interior Design:',
    '2–6 săpt.': '2–6 wks.',
    'Quick Win:': 'Quick Win:',
    '1–2 săpt.': '1–2 wks.',
    'Invest Standard:': 'Invest Standard:',
    '4–6 săpt.': '4–6 wks.',
    'Invest Premium:': 'Invest Premium:',
    '8–12 săpt.': '8–12 wks.',
    'Durate medii orientative. Variabila principală e viteza de feedback și disponibilitatea furnizorilor.': 'Average indicative durations. The main variable is the speed of feedback and supplier availability.',

    /* ── INDEX: Why it works ── */
    'De ce funcționează': 'Why it works',
    'Creștem venitul, nu doar aspectul.': 'We increase income, not just appearance.',
    'Nu vindem randări. Vindem rezultate: chirie mai mare, chiriași mai stabili, mai puține perioade goale. Diferența poate ajunge la mii de euro în câțiva ani.': "We don't sell renders. We sell results: higher rent, more stable tenants, fewer empty periods. The difference can reach thousands of euros in just a few years.",
    'Un sistem complet, nu un proiect izolat.': 'A complete system, not an isolated project.',
    'Design + strategie de piață + listare + selecție chiriaș + protecție contractuală. Primești un proces clar, nu doar un concept.': 'Design + market strategy + listing + tenant selection + legal protection. You receive a clear process, not just a concept.',
    'Spații pentru viața reală, nu pentru poze.': 'Spaces for real life, not for photos.',
    'Optimizăm pentru depozitare eficientă, flux natural și materiale durabile. Spațiul arată bine și rezistă în timp.': 'We optimise for efficient storage, natural flow, and durable materials. The space looks good and holds up over time.',
    'Atragem tipul corect de chiriaș.': 'We attract the right type of tenant.',
    'Definim cui i se adresează apartamentul, cum îl prezentăm și cum îl selectăm. Chiriași mai stabili, contracte mai lungi.': 'We define who the apartment targets, how to present it, and how to select them. More stable tenants, longer contracts.',
    'Claritate și control în tot procesul.': 'Clarity and control throughout the process.',
    'Fără improvizații. Pași definiți, termene clare, suport în implementare. Știi exact ce se întâmplă, când și de ce.': 'No improvisation. Defined steps, clear deadlines, implementation support. You know exactly what happens, when, and why.',

    /* ── INDEX: Portfolio ── */
    'Portofoliu': 'Portfolio',
    'Rezultate reale.': 'Real results.',
    'Spații transformate.': 'Transformed spaces.',
    'Fiecare proiect a urmărit același obiectiv: un apartament care produce mai mult, cu mai puțin efort pentru proprietar.': 'Every project pursued the same goal: an apartment that produces more, with less effort for the owner.',
    'Garsonieră Vatra Luminoasă · 32 mp': 'Studio Vatra Luminoasă · 32 sqm',
    'Pachet Invest Standard · 2 săptămâni': 'Invest Standard Package · 2 weeks',
    '2 camere Drumul Taberei · 55 mp': '2-room apartment Drumul Taberei · 55 sqm',
    'Pachet Invest Premium · 12 săptămâni': 'Invest Premium Package · 12 weeks',
    'Vezi toate proiectele →': 'See all projects →',
    'Vezi toate proiectele': 'See all projects',
    '6 proiecte finalizate · Before & after complet · Statistici detaliate': '6 completed projects · Full before & after · Detailed statistics',

    /* ── INDEX: Community voices ── */
    'Voci din comunitate': 'Community voices',
    'Ce spun proprietarii înainte să găsească un sistem.': 'What landlords say before finding a system.',
    '„Prima dată am mers pe primul venit, primul servit. Asta a fost greșeala mare."': '"The first time I went with first come, first served. That was the big mistake."',
    '„Am investit totul în apartamentul ăla și au plecat lăsând mizerie și pereți găuriți."': '"I invested everything in that apartment and they left it a mess with holes in the walls."',
    '„Am stat luni de zile cu un chiriaș rău platnic pentru că nu știam cum să îl dau afară legal."': '"I spent months with a non-paying tenant because I didn\'t know how to legally remove them."',
    '„Stă gol de două luni. Prefer asta decât să îl dau oricui, dar banii tot nu vin."': '"It\'s been empty for two months. I prefer that to giving it to just anyone, but the money still doesn\'t come."',

    /* ── INDEX: Testimonials ── */
    'Testimoniale': 'Testimonials',
    'Proprietari reali. Rezultate documentate.': 'Real landlords. Documented results.',
    '2 camere Drumul Taberei: de la apartament distrus la chiriaș în 4 zile': '2-room apartment Drumul Taberei: from a ruined apartment to a tenant in 4 days',
    'București · Sector 6': 'Bucharest · Sector 6',
    '55 mp': '55 sqm',
    'Pachet Invest Premium': 'Invest Premium Package',
    '12 săptămâni': '12 weeks',
    'Situația inițială': 'Initial situation',
    'Domnul Ciobanu a preluat un apartament aflat într-o stare precară: baie cu mucegai și faianță desprinsă, tavane parțial degradate, coridoare cu pereți scorojiți și instalații vechi. Știa că totul trebuie luat de la zero, însă, nefiind în țară, se temea că procesul va fi foarte lung și anevoios. În plus, era nesigur pe rezultate și nu știa dacă apartamentul va putea ajunge să arate așa cum își dorea. Dl. Ciobanu știa că trebuie să facă totul de la zero și se temea că nu va vedea niciodată banii înapoi. Credea că un apartament atât de uzat nu mai poate arăta frumos.': 'Mr. Ciobanu took over an apartment in poor condition: bathroom with mould and loose tiles, partially deteriorated ceilings, corridors with peeling walls and old installations. He knew everything had to be started from scratch, but not being in the country, he feared the process would be very long and difficult. Additionally, he was unsure about the results and did not know if the apartment could ever look the way he wanted. Mr. Ciobanu knew he had to start from scratch and feared he would never get his money back. He believed such a worn apartment could no longer look beautiful.',
    'Ce am schimbat': 'What we changed',
    'Am prioritizat intervențiile cu cel mai mare impact vizual și de durabilitate: baie renovată complet cu materiale moderne, tavane refăcute și finisate uniform, coridoarele reproiectate pentru un flux logic. Dormitorul a primit un decor structural discret și iluminat indirect pentru o senzație de confort imediat. Livingul a fost mobilat funcțional, cu depozitare integrată și materiale care rezistă la uzură intensă. Rezultatul a depășit așteptările proprietarului.': 'We prioritised interventions with the greatest visual and durability impact: bathroom fully renovated with modern materials, ceilings redone and uniformly finished, corridors redesigned for a logical flow. The bedroom received a subtle structural décor and indirect lighting for an immediate feeling of comfort. The living room was functionally furnished, with integrated storage and materials that withstand heavy use. The result exceeded the owner\'s expectations.',
    'Buget implementare': 'Implementation budget',
    'Serviciu design (Invest Premium)': 'Design service (Invest Premium)',
    'Renovare + manoperă': 'Renovation + labour',
    'Mobilier + accesorii': 'Furniture + accessories',
    'Total investiție': 'Total investment',
    'Vezi pozele complete ale proiectului →': 'See complete project photos →',
    'chirie lunară': 'monthly rent',
    'până la primul chiriaș potrivit': 'to first matching tenant',
    'durata șederii': 'tenancy duration',
    '(contract semnat pe 2 ani de la început)': '(contract signed for 2 years from the start)',
    'recuperare completă a investiției (din chiria extra + rotația de chiriași eliminată)': 'full investment payback (from extra rent + eliminated tenant turnover)',
    '„Am fost foarte mulțumit de rezultat. Apartamentul a ieșit exact așa cum mi-a fost prezentat, iar găsirea noilor chiriași a fost mult mai ușoară decât mă așteptam."': '"I was very pleased with the result. The apartment turned out exactly as presented to me, and finding the new tenants was much easier than I expected."',
    'Dl. Ciobanu, proprietar apartament 2 camere · Pachet Invest Premium': 'Mr. Ciobanu, 2-room apartment owner · Invest Premium Package',
    '2 camere Floreasca: de la rotație constantă la chiriaș pe 2 ani': '2-room apartment Floreasca: from constant turnover to a 2-year tenant',
    'București · Sector 1': 'Bucharest · Sector 1',
    '52 mp': '52 sqm',
    'Pachet Invest Standard': 'Invest Standard Package',
    '4 săptămâni': '4 weeks',
    'Costin Mihai, 37 de ani, moștenise apartamentul de la părinți. Îl închiria cu 400€/lună, dar nu reușea să păstreze chiriașii mai mult de 6–8 luni. Perioade de ~2 luni goale între fiecare chiriaș. Reparații după fiecare plecare. Credea că problema sunt chiriașii. Nu era.': 'Costin Mihai, 37, inherited the apartment from his parents. He rented it for €400/month, but could not keep tenants for more than 6–8 months. Around 2 empty months between each tenant. Repairs after every departure. He thought the problem was the tenants. It was not.',
    'Living reorganizat într-un spațiu mai coerent, pentru un flux mai eficient. Canapeaua existentă a fost repoziționată pentru a elibera vizual și funcțional camera. Perdele albe semitransparente și jaluzele discrete pe balcon pentru mai multă lumină, intimitate și o senzație amplificată de spațiu. Spații de depozitare maximizate în dormitor prin dulapuri integrate. Covoarele repoziționate corect pentru a ancora zonele și a aduce mai mult echilibru vizual.': 'Living room reorganised into a more coherent space for a more efficient flow. The existing sofa was repositioned to visually and functionally free the room. Semi-transparent white curtains and discreet blinds on the balcony for more light, privacy, and an amplified sense of space. Storage spaces maximised in the bedroom through integrated wardrobes. Rugs correctly repositioned to anchor zones and bring more visual balance.',
    'Serviciu design (Invest Standard)': 'Design service (Invest Standard)',
    'Mobilier': 'Furniture',
    'Accesorii + decor': 'Accessories + décor',
    '„Sincer, mă așteptam la randări frumoase și atât. Nu mă așteptam să am și un sistem clar pentru ce fac cu apartamentul după. Chiriașul de acum e cel mai bun pe care l-am avut și cred că asta nu e o coincidență."': '"Honestly, I expected nice renders and nothing more. I did not expect to also get a clear system for what to do with the apartment afterwards. The current tenant is the best I have had and I believe that is not a coincidence."',
    'Costin, proprietar apartament 2 camere · Pachet Invest Standard': 'Costin, 2-room apartment owner · Invest Standard Package',
    'Rental Kit · Sistem de selecție': 'Rental Kit · Selection system',
    'Proprietar apartament 2 camere · București': '2-room apartment owner · Bucharest',
    'Raluca Mihăilă': 'Raluca Mihăilă',
    'Andrei T.': 'Andrei T.',
    'Primul apartament dat în chirie · Cluj-Napoca': 'First apartment rented out · Cluj-Napoca',
    'Primul chiriaș pe care l-am ales singură părea perfect la vizionare. Vorbea frumos, era angajat, mi-a inspirat încredere completă. Opt luni mai târziu am găsit apartamentul cu mobilă arsă cu țigara, parchet umflat, și o factură de curățenie de 2.200 de lei pe care garanția nu a acoperit-o. Nu mai voiam să aud de chirie.': 'The first tenant I chose on my own seemed perfect at the viewing. He spoke well, was employed, and inspired my complete trust. Eight months later I found the apartment with furniture burned by cigarettes, swollen flooring, and a cleaning bill of 2,200 lei that the deposit did not cover. I never wanted to hear about renting again.',
    'Am ajuns la Rent UP după ce am văzut un post pe un grup de proprietari. Am fost sceptică. Mi se părea că oricum e loterie și că nimeni nu poate controla asta. Ce am primit a fost altceva față de ce mă așteptam: nu s-au apucat să-mi facă apartamentul frumos pentru poze, ci mi-au arătat exact de ce chiriașul anterior a trecut de filtrele mele și cum să nu mai repet. Rental Kit-ul a schimbat complet cum pun întrebările, ce cer înainte să semnez, și ce clauze am în contract.': 'I found Rent UP after seeing a post in a landlord group. I was sceptical. It seemed like a lottery and that no one could control it. What I received was different from what I expected: they did not set out to make my apartment look good for photos — they showed me exactly why the previous tenant passed my filters and how not to repeat it. The Rental Kit completely changed how I ask questions, what I request before signing, and what clauses I have in the contract.',
    'Când am decis să dau apartamentul în chirie pentru prima dată, am petrecut două săptămâni citind pe Reddit și în grupuri de Facebook. Am găsit mai multă frică decât informație utilă. Toată lumea povestea dezastre, nimeni nu spunea concret ce să faci.': 'When I decided to rent out my apartment for the first time, I spent two weeks reading on Reddit and in Facebook groups. I found more fear than useful information. Everyone told disaster stories; no one said concretely what to do.',
    'Am contactat Rent UP înainte să pun primul anunț. Mi s-a părut ciudat să plătești pentru asta înainte să ai măcar un chiriaș, dar am calculat: dacă nimereai greșit de la primul, costul ar fi fost de 5–6 ori mai mare decât ce am dat pe Rental Kit.': 'I contacted Rent UP before posting the first listing. It seemed strange to pay for this before even having a tenant, but I calculated: if you got it wrong from the first, the cost would have been 5–6 times more than what I paid for the Rental Kit.',
    'Procesul a fost altfel față de ce mă așteptam. Nu m-au lăsat cu un contract generic. Am trecut prin fiecare clauză, am înțeles de ce există, și am plecat cu un sistem clar de verificare. La prima vizionare am refuzat un potențial chiriaș pe criterii concrete, nu pe feeling. Asta singură a schimbat dinamica. Pentru prima dată eu alegeam, nu eram ales.': 'The process was different from what I expected. They did not leave me with a generic contract. I went through every clause, understood why it exists, and left with a clear verification system. At the first viewing I turned down a prospective tenant on concrete criteria, not feeling. That alone changed the dynamic. For the first time I was the one choosing, not being chosen.',
    'Chiria e plătită pe 5 ale fiecărei luni. Nicio excepție în 6 luni.': 'Rent is paid on the 5th of every month. No exceptions in 6 months.',

    /* ── INDEX: About ── */
    'Despre noi': 'About us',
    'Nu facem design.': "We don't do design.",
    'Optimizăm active imobiliare.': 'We optimise real estate assets.',
    'Misiunea noastră este să transformăm apartamentele obișnuite în active stabile și profitabile. Nu ne concentrăm doar pe estetică, ci pe performanța reală a spațiului în timp.': 'Our mission is to transform ordinary apartments into stable, profitable assets. We focus not only on aesthetics, but on the real performance of the space over time.',
    'Co-fondator': 'Co-founder',
    'Czerwinski Cristiana': 'Czerwinski Cristiana',
    'Absolventă a Facultății de Arhitectură "Ion Mincu" din București, cu studii extinse la Facultatea Tehnică din Viena. Din 2019 colaborez cu studiouri internaționale de top din arhitectură și vizualizare.': 'Graduate of the "Ion Mincu" Faculty of Architecture in Bucharest, with extended studies at the Technical University of Vienna. Since 2019, I have collaborated with top international architecture and visualisation studios.',
    'Mă concentrez pe estetică și impact vizual: cum arată un spațiu, cum se simte și cum este perceput din prima clipă. Lucrez intuitiv și experimental, explorând direcții vizuale îndrăznețe și memorabile.': 'I focus on aesthetics and visual impact: how a space looks, how it feels, and how it is perceived from the first moment. I work intuitively and experimentally, exploring bold and memorable visual directions.',
    'Am văzut destule apartamente închiriate prost ca să știu exact ce face diferența dintre un chiriaș care rămâne 3 ani și unul care pleacă în 6 luni.': 'I have seen enough poorly rented apartments to know exactly what makes the difference between a tenant who stays 3 years and one who leaves in 6 months.',
    'Avram Cătălina': 'Avram Cătălina',
    'Absolventă a Facultății de Arhitectură "Ion Mincu" din București, cu experiență construită lucrând cu numeroși proprietari care au ales să investească în apartamentele lor pentru a le crește valoarea și funcționalitatea.': 'Graduate of the "Ion Mincu" Faculty of Architecture in Bucharest, with experience built working with numerous property owners who chose to invest in their apartments to increase their value and functionality.',
    'Abordarea mea este serioasă și orientată spre rezultate reale. Pun accent pe organizare, logică și soluții durabile, pe spații care nu doar arată bine, ci funcționează corect în timp.': 'My approach is serious and results-oriented. I emphasise organisation, logic, and durable solutions — spaces that not only look good but function correctly over time.',
    'Cunosc proprietari care au cheltuit 10.000€ pe renovare și după 2 ani totul arăta uzat. Nu materialele erau problema, erau alegerile.': 'I know property owners who spent €10,000 on renovation and after 2 years everything looked worn. The materials were not the problem — the choices were.',

    /* ── INDEX: Packages ── */
    'Alege pachetul potrivit.': 'Choose the right package.',
    'Primul pas e gratuit. Raportul clarifică exact ce are nevoie apartamentul tău, abia după alegi pachetul.': 'The first step is free. The report clarifies exactly what your apartment needs, then you choose the package.',
    'Pasul 0 · Gratuit': 'Step 0 · Free',
    'Nu știi ce pachet ți se potrivește?': "Don't know which package suits you?",
    'Primești un Raport de Rentabilitate gratuit: vizită pe teren, evaluare completă a apartamentului și o recomandare precisă cu cifre reale. Livrat în 72h, fără angajament.': 'You receive a free Profitability Report: on-site visit, complete apartment evaluation, and a precise recommendation with real figures. Delivered in 72h, no commitment.',
    'Începe cu raportul gratuit →': 'Start with the free report →',
    'Vizită pe teren + fotografii': 'On-site visit + photos',
    'Scor per cameră + evaluare totală': 'Score per room + overall evaluation',
    'Analiza chiriei corecte pentru zona ta': 'Correct rent analysis for your area',
    'Intervenții prioritizate + buget estimat': 'Prioritised interventions + estimated budget',
    'ROI estimat și recomandare pachet': 'Estimated ROI and package recommendation',
    'Gratuit și fără angajament · Raportul livrat în 72h de la vizită.': 'Free and without commitment · Report delivered within 72h of the visit.',
    'Intrare rapidă': 'Quick entry',
    'Design și randări · fără selecție chiriaș': 'Design and renders · without tenant selection',
    'Staging Virtual': 'Virtual Staging',
    '100% Remote': '100% Remote',
    'fix': 'fixed',
    'Vezi rapid potențialul apartamentului, fără vizită. Randări + listă de achiziții, pe baza pozelor trimise de tine.': 'See the apartment\'s potential quickly, without a visit. Renders + purchase list, based on the photos you send.',
    'Ce primești': 'What you receive',
    '1–2 randări foto (camerele principale)': '1–2 photo renders (main rooms)',
    'Listă de achiziții, buget și furnizori': 'Purchase list, budget, and suppliers',
    'Pe baza pozelor trimise de tine': 'Based on the photos you send',
    '1 rundă de revizii incluse': '1 revision round included',
    'Fără vizită, fără plan 2D, fără măsurători exacte': 'No site visit, no 2D plan, no exact measurements',
    'Cei 200€ se scad din orice pachet Quick Win sau mai mare, dacă treci la execuție.': 'The €200 is deducted from any Quick Win or larger package if you proceed to execution.',
    'Află mai multe →': 'Learn more →',
    'Livrare în câteva zile de la trimiterea pozelor.': 'Delivery within a few days of sending the photos.',
    'Design Interior Simplu': 'Simple Interior Design',
    '€ / mp': '€ / sqm',
    'Doar proiectul de design. Plan, randări, planșe tehnice, listă de achiziții: implementezi și gestionezi restul singur (sau ai deja sistemul tău de selecție).': 'Design project only. Plan, renders, technical drawings, purchase list: you implement and manage the rest yourself (or you already have your selection system).',
    'Plan 2D amenajare + moodboard': '2D layout plan + moodboard',
    '1–2 randări per cameră': '1–2 renders per room',
    'Planșe tehnice pentru mobilier la comandă': 'Technical drawings for custom furniture',
    'Schițe 3D': '3D sketches',
    '1 vizită pe șantier': '1 site visit',
    'Vizite pe șantier': 'Site visits',
    'Fără Rental Kit, fără selecție chiriaș, fără listare': 'No Rental Kit, no tenant selection, no listing',
    'Vrei și sistemul de selecție a chiriașului? Adaugi Rental Kit separat, oricând.': 'Also want the tenant selection system? Add the Rental Kit separately, any time.',
    'Solicită ofertă →': 'Request a quote →',
    'Primești un ghid de onboarding în 24h cu pașii următori.': 'You receive an onboarding guide within 24h with the next steps.',
    'Sisteme complete': 'Complete systems',
    'Rental Kit inclus · design + selecție chiriaș + contracte': 'Rental Kit included · design + tenant selection + contracts',
    'Quick Win': 'Quick Win',
    '8–12 luni ROI': '8–12 months ROI',
    'Apartament gata, chiriaș rapid. Fără șantier, fără schimbări structurale, doar mobilier și sistemul complet de închiriere. Pe piață în 7–14 zile.': 'Apartment ready, tenant fast. No construction, no structural changes, just furniture and the complete rental system. On the market in 7–14 days.',
    'Design': 'Design',
    'Execuție': 'Execution',
    'Selecție chiriaș + contract personalizat': 'Tenant selection + custom contract',
    'Documente legale personalizate': 'Custom legal documents',
    'Prezentare profesională a apartamentului': 'Professional apartment presentation',
    'Se potrivește dacă finisajele (faianță, gresie, pereți, parchet) sunt estetice și în stare bună. Dacă bucătăria sau baia au nevoie de refacere structurală sau intervenții majore, atunci discutăm de Invest Standard sau Invest Premium.': 'Suitable if the finishes (tiles, walls, flooring) are aesthetic and in good condition. If the kitchen or bathroom need structural rework or major interventions, then we discuss Invest Standard or Invest Premium.',
    'Recomandat': 'Recommended',
    'Pentru apartamentul pe care îl ții ca investiție pe termen lung, nu ca soluție de moment.': 'For the apartment you hold as a long-term investment, not a temporary solution.',
    '3 vizite pe șantier': '3 site visits',
    'Tu coordonezi execuția. Noi îți dăm planul, furnizorii, documentele și prezentarea.': 'You coordinate the execution. We give you the plan, suppliers, documents, and presentation.',
    'Invest Standard': 'Invest Standard',
    'Invest Premium': 'Invest Premium',
    'Pentru apartamentul care are nevoie de mai mult decât mobilier ca să ajungă la potențialul lui real.': 'For the apartment that needs more than furniture to reach its real potential.',
    'Randări complete per cameră': 'Full renders per room',
    'Documentație mobilier custom': 'Custom furniture documentation',
    'Vizite pe șantier până la finalizarea proiectului': 'Site visits until project completion',
    'Renovare, finisaje, mobilier custom. Tot procesul, de la concept la primul chiriaș semnat.': 'Renovation, finishes, custom furniture. The entire process, from concept to first signed tenant.',

    /* ── INDEX: Furniture estimator ── */
    'Estimator mobilare': 'Furniture estimator',
    'Știi cât costă să mobilezi pentru chiria optimă?': 'Do you know how much it costs to furnish for optimal rent?',
    'Ai ales pachetul de design. Următoarea întrebare e cât costă să mobilezi apartamentul cu piesele potrivite. IKEA sau la comandă, prefabricat sau mix: calculatorul îți arată investiția reală.': 'You have chosen the design package. The next question is how much it costs to furnish the apartment with the right pieces. IKEA or custom, prefab or a mix: the calculator shows you the real investment.',
    'Prefabricat buget / standard sau la comandă PAL+MDF': 'Budget / standard prefab or custom MDF/particleboard',
    'Estimare ±10-15% față de ofertele reale · prețuri 2025': '±10–15% estimate vs. real quotes · 2025 prices',
    'Raport PDF complet cu detalii per cameră': 'Full PDF report with details per room',
    'Calculează costul mobilării →': 'Calculate furnishing cost →',
    'Estimare nivel low-mid · fără TVA': 'Low-mid level estimate · ex. VAT',

    /* ── INDEX: FAQ ── */
    'Întrebări frecvente.': 'Frequently asked questions.',
    'Răspunsuri la ce ne întreabă proprietarii cel mai des.': 'Answers to what landlords ask us most often.',
    'Garantați că voi găsi un chiriaș bun?': 'Do you guarantee I will find a good tenant?',
    'Nu. Niciun sistem nu poate garanta comportamentul unui om. Ce garantăm este că procesul de selecție, documentație și design reduce semnificativ probabilitatea unui chiriaș problematic. Proprietarii care aplică sistematic un proces au cu 80–90% mai puține probleme decât cei care selectează după instinct.': 'No. No system can guarantee a person\'s behaviour. What we guarantee is that the selection, documentation, and design process significantly reduces the likelihood of a problematic tenant. Landlords who systematically apply a process have 80–90% fewer problems than those who select by instinct.',
    'De ce un apartament amenajat bine atrage un chiriaș mai bun?': 'Why does a well-furnished apartment attract a better tenant?',
    'Un anunț cu fotografii profesionale și un apartament coerent filtrează natural. Chiriașul care vede un apartament îngrijit înțelege că proprietarul e serios. Cei care nu se vor comporta corespunzător preferă spații cu standarde mai relaxate. Designul nu e estetică, ci un filtru de selecție.': 'A listing with professional photos and a coherent apartment filters naturally. A tenant who sees a well-kept apartment understands the owner is serious. Those who will not behave appropriately prefer spaces with more relaxed standards. Design is not aesthetics — it is a selection filter.',
    'Ce fac dacă chiriașul nu plătește sau pleacă cu datorii?': 'What do I do if the tenant does not pay or leaves with debts?',
    'Rental Kit-ul include un protocol pas cu pas pentru exact această situație, de la primul reminder la Ziua 1 până la executare silită. Contractul înregistrat la ANAF este titlu executoriu pentru chiria neachitată și pentru evacuare la expirarea termenului. Contractul autentificat notarial oferă același lucru; în plus, cererea de evacuare pentru neplată se judecă fără citarea pârâtului — procedura urgentă (art. 1034 NCPC) durează 2–6 luni față de 1–3 ani în dreptul comun.': 'The Rental Kit includes a step-by-step protocol for exactly this situation, from the first reminder on Day 1 to enforcement proceedings. The contract registered with ANAF is an enforceable title for unpaid rent and eviction at the expiry of the term. The notarised contract offers the same; additionally, the eviction request for non-payment is judged without summoning the defendant — the urgent procedure (art. 1034 NCPC) takes 2–6 months compared to 1–3 years under general law.',
    'Cât durează să găsesc chiriaș după finalizarea proiectului?': 'How long does it take to find a tenant after the project is completed?',
    'Un apartament fotografiat profesional și listat corect pe 3 platforme găsește chiriaș în 1–3 săptămâni în București. Comparativ, un anunț cu fotografii de telefon și text slab poate sta neînchiriat 1–3 luni la același preț și aceeași zonă.': 'An apartment professionally photographed and correctly listed on 3 platforms finds a tenant within 1–3 weeks in Bucharest. By comparison, a listing with phone photos and weak text can sit vacant for 1–3 months at the same price and in the same area.',
    'Merită să investesc în design pentru un apartament de închiriat?': 'Is it worth investing in design for a rental apartment?',
    'Depinde de cât costă să nu o faci. Un proprietar fără sistem rulează în medie 3–4 chiriași în 5 ani. Fiecare schimbare înseamnă luni goale, reparații și selecție nouă. Raportul de Rentabilitate calculează exact cât costă situația ta actuală față de situația optimizată. Gratuit, fără angajament.': "It depends on how much it costs not to. A landlord without a system goes through an average of 3–4 tenants in 5 years. Every change means empty months, repairs, and a new selection. The Profitability Report calculates exactly what your current situation costs compared to the optimised one. Free, no commitment.",
    'Lucrați doar în București?': 'Do you work only in Bucharest?',
    'Vizitele pe teren le facem în București și zona metropolitană. Proiectele de design le realizăm pentru orice locație din România, livrăm digital. Contactează-ne cu detalii.': 'We conduct on-site visits in Bucharest and the metropolitan area. We carry out design projects for any location in Romania and deliver digitally. Contact us with details.',
    'Toate întrebările frecvente →': 'All frequently asked questions →',

    /* ── INDEX: Contact ── */
    'Hai să vedem ce poate face': "Let's see what",
    'apartamentul tău.': 'your apartment can do.',
    'Spune-ne pe scurt cu ce te confrunți: chirie mică, chiriași care pleacă, apartament gol.': 'Tell us briefly what you are facing: low rent, tenants leaving, empty apartment.',
    'Îți răspundem în cel mai scurt timp cu o ofertă personalizată.': 'We will get back to you as soon as possible with a personalised offer.',
    'Acceptăm 5 proiecte pe lună pentru a menține calitatea.': 'We accept 5 projects per month to maintain quality.',
    'Mai sunt': 'There are still',
    '4 sloturi': '4 slots',
    'libere luna aceasta.': 'free this month.',
    'WhatsApp direct →': 'WhatsApp direct →',
    'Email': 'Email',
    'Telefon': 'Phone',
    'Social': 'Social',

    /* ── AUDIT PAGE ── */
    'Programează un Raport de Rentabilitate.': 'Schedule a Profitability Report.',
    'Vorbim despre apartamentul tău.': "Let's talk about your apartment.",
    'Trimite-ne adresa apartamentului și chiria actuală sau dorită.': 'Send us the apartment address and your current or desired rent.',
    'Îți răspundem în 24h cu disponibilitate.': 'We will get back to you within 24h with availability.',
    'Raportul e gratuit. Îl primești pe email.': 'The report is free. You will receive it by email.',
    'Lasă adresa și îți confirmăm disponibilitatea în 24h. Fără angajament.': 'Leave your address and we will confirm availability within 24h. No commitment.',
    '✓ Gata! Te contactăm în 24h.': '✓ Done! We will contact you within 24h.',
    'Raport de Rentabilitate': 'Profitability Report',
    'Evaluare completă. Cifre reale. Livrare în 72h.': 'Complete evaluation. Real figures. Delivered in 72h.',
    'Primul pas înainte de orice pachet.': 'The first step before any package.',
    'Ce primești în Raport': 'What you receive in the Report',
    'Programează Raportul gratuit': 'Schedule the free Report',
    'Programează Raportul →': 'Schedule the Report →',
    'Fără angajament. Raportul e al tău.': 'No commitment. The report is yours.',

    /* ── FAQ PAGE ── */
    'Întrebări Frecvente': 'Frequently Asked Questions',
    'Despre servicii': 'About services',
    'Despre design': 'About design',
    'Despre chiriași': 'About tenants',
    'Despre contracte': 'About contracts',
    'Despre costuri': 'About costs',

    /* ── RENTAL KIT PAGE ── */
    'Sistemul complet pentru proprietari.': 'The complete system for landlords.',
    'Nu doar un contract. Un sistem.': 'Not just a contract. A system.',
    'Selecție chiriaș pe 4 piloni': '4-pillar tenant selection',
    'Contract personalizat': 'Custom contract',
    'Protocol evacuare': 'Eviction protocol',
    'Ghid chiriaș': 'Tenant guide',
    'Proces verbal foto': 'Photo inspection report',
    'Mentenanță & comunicare': 'Maintenance & communication',

    /* ── RENTAL KIT PAGE: Hero ── */
    'Rental Performance System · Produs exclusiv': 'Rental Performance System · Exclusive product',
    'Sistemul din spatele chiriei stabile.': 'The system behind stable rental.',
    'Nu e un dosar cu hârtii. E un sistem complet care traduce designul în bani: cum găsești chiriașul potrivit, cum îl evaluezi, cum îl primești, cum îl ții și cum te desparți fără surprize.': "It's not a folder of papers. It's a complete system that turns design into money: how to find the right tenant, how to evaluate them, how to receive them, how to keep them, and how to part ways without surprises.",
    'Inclus în Quick Win, Invest Standard și Invest Premium': 'Included in Quick Win, Invest Standard and Invest Premium',
    'Ghid proprietar + Ghid chiriaș': 'Landlord guide + Tenant guide',
    'Documente complete': 'Complete documents',
    'Actualizat permanent': 'Continuously updated',

    /* ── RENTAL KIT PAGE: What Is ── */
    'Ce este un Rental Kit?': 'What is a Rental Kit?',
    'Cel mai frecvent auzim că designul e clar. Ce nu e clar e ce urmează după.': "Most often we hear that the design is clear. What isn't clear is what comes next.",
    'Designul rezolvă cum arată apartamentul. Rental Kit-ul rezolvă ce faci cu el după, cum listezi, pe cine primești, cum predai cheile fără să-ți pară rău.': 'The design solves how the apartment looks. The Rental Kit solves what you do with it after: how you list it, who you let in, how you hand over the keys without regrets.',
    'Rental Kit-ul este documentul care transformă un apartament frumos într-o închiriere fără bătăi de cap.': 'The Rental Kit is the document that turns a beautiful apartment into a hassle-free rental.',
    'Strategie de piață': 'Market strategy',
    'Cum stabilești chiria corectă, cum listezi, ce fotografii faci și ce scrie în anunț ca să atragă omul potrivit.': 'How to set the right rent, how to list, what photos to take and what to write in the listing to attract the right person.',
    'Sistem de selecție chiriaș': 'Tenant selection system',
    'Chestionar structurat, 4 piloni de evaluare, red flags cu explicații. Nu instinct, ci un sistem bine gândit.': 'Structured questionnaire, 4 evaluation pillars, red flags with explanations. Not instinct, but a well-thought-out system.',
    'Proces verbal foto extins, inventar detaliat, contract custom, politica de garanție cu proceduri clare.': 'Extended photo inspection report, detailed inventory, custom contract, guarantee policy with clear procedures.',
    'Primești un chiriaș informat și responsabilizat. El știe ce se așteaptă de la el și cum funcționează garanția.': 'You receive an informed and accountable tenant. They know what is expected of them and how the guarantee works.',

    /* ── RENTAL KIT PAGE: Ghid Proprietar — modules ── */
    'Ghid Proprietar': 'Landlord Guide',
    'Tot ce ai nevoie': 'Everything you need',
    'de la anunț până la predare.': 'from listing to handover.',
    'Șapte module care acoperă întregul ciclu de viață al chiriei. Nu e un template generic, e un document personalizat pentru proprietatea ta, zona ta și profilul de chiriaș urmărit.': 'Seven modules covering the entire rental lifecycle. Not a generic template — a document personalised for your property, your area and your target tenant profile.',
    'Poziționarea proprietății': 'Property positioning',
    'Public țintă, mesaj, prețul corect': 'Target audience, message, the right price',
    'strategie': 'strategy',
    'Listarea': 'Listing',
    'Platforme, fotografii, modelul de anunț': 'Platforms, photos, listing template',
    'Evaluarea chiriașului': 'Tenant evaluation',
    '4 piloni, sistem de decizie, red flags': '4 pillars, decision system, red flags',
    'selecție': 'selection',
    'Predarea proprietății': 'Property handover',
    'Proces verbal foto, inventar, set foto cu timestamp': 'Photo inspection report, inventory, timestamped photo set',
    'documente': 'documents',
    'Administrarea pe durata contractului': 'Management during the contract',
    'Comunicare, mentenanță': 'Communication, maintenance',
    'relație': 'relationship',
    'Reînnoirea și finalul contractului': 'Renewal and end of contract',
    'Strategie, garanție': 'Strategy, guarantee',
    'Protocoale pas cu pas': 'Step-by-step protocols',
    'exclusiv': 'exclusive',

    /* ── RENTAL KIT PAGE: Doc preview cards ── */
    'Ce primești': 'What you receive',
    '7 module · personalizat pentru proprietatea ta': '7 modules · personalised for your property',
    'Module incluse': 'Included modules',
    '01 — Poziționarea proprietății': '01 — Property positioning',
    '02 — Listarea': '02 — Listing',
    '03 — Evaluarea chiriașului': '03 — Tenant evaluation',
    '04 — Predarea proprietății': '04 — Property handover',
    '05 — Administrarea': '05 — Management',
    '06 — Reînnoirea și finalul': '06 — Renewal and end',
    'Documente incluse': 'Included documents',
    'Chestionar chiriaș': 'Tenant questionnaire',
    'Inventar': 'Inventory',
    'Politica garanție': 'Guarantee policy',
    'Conținutul complet se livrează personalizat pentru proprietatea ta (adresă, tip, profil chiriaș, clauze specifice).': 'The full content is delivered personalised for your property (address, type, tenant profile, specific clauses).',
    'Primește tot kitul → contactează-ne': 'Get the full kit → contact us',
    'Previzualizare': 'Preview',
    'Sistem complet · Modul 03 — Evaluarea chiriașului': 'Complete system · Module 03 — Tenant evaluation',
    'Sistem de decizie': 'Decision system',
    'Evaluare': 'Evaluation',
    'Decizie': 'Decision',
    '4 din 4 piloni îndepliniți': '4 out of 4 pillars met',
    '◑ Condiționat': '◑ Conditional',
    '3 din 4 — pilon slab': '3 out of 4 — weak pillar',
    '2 sau mai puțin / 2+ red flags': '2 or fewer / 2+ red flags',
    '✗ Respins': '✗ Rejected',
    'Red flags — cu explicație': 'Red flags — with explanation',
    '"Vedem cum e" sau evitarea unui angajament clar': '"Let\'s see how it goes" or avoiding a clear commitment',
    'Schimbări frecvente de locuință fără motiv clar': 'Frequent changes of residence without a clear reason',
    'Venit variabil sau neverificabil': 'Variable or unverifiable income',
    'Negociere agresivă înainte de vizionare': 'Aggressive negotiation before viewing',
    'Șabloane de comunicare': 'Communication templates',

    /* ── RENTAL KIT PAGE: Documente incluse (9 annexes) ── */
    'Chestionar standard chiriaș': 'Standard tenant questionnaire',
    'Chestionar structurat care acoperă toate dimensiunile relevante pentru o decizie corectă.': 'Structured questionnaire covering all relevant dimensions for a correct decision.',
    'Fișă internă de evaluare': 'Internal evaluation sheet',
    'Fișă de evaluare internă a posibililor chiriași. ': 'Internal evaluation sheet for prospective tenants.',
    'Inventar proprietate': 'Property inventory',
    'Fiecare element cu stare inițială, valoare estimată, scala FB/B/A/D + uzură acceptată explicată.': 'Each item with initial condition, estimated value, FB/B/A/D scale + accepted wear explained.',
    'Proces verbal foto extins': 'Extended photo inspection report',
    'PV clasic + registru fotografic cu timestamp, 12 câmpuri, semnat pe pagină de ambele părți.': 'Classic report + timestamped photo log, 12 fields, signed per page by both parties.',
    'Foto cu timestamp': 'Timestamped photo',
    'Politica de garanție': 'Guarantee policy',
    'Condiții clare + procedura de avertisment în 3 pași (5 zile notificare, 10 zile remediere, reținere justificată).': 'Clear conditions + 3-step warning procedure (5 days notice, 10 days remedy, justified retention).',
    'Protocol evacuare pas cu pas': 'Step-by-step eviction protocol',
    'Pași concreți de la Ziua 1 la Ziua 60+: notificări, executor, instanță. Modele de texte gata de trimis.': 'Concrete steps from Day 1 to Day 60+: notifications, bailiff, court. Message templates ready to send.',
    'Protocol sezon rece (1 dec – 1 mart)': 'Cold season protocol (1 Dec – 1 Mar)',
    'Ce poți face legal în perioada de protecție, excepțiile valabile și cum documentezi rea-credința chiriașului.': 'What you can legally do during the protection period, valid exceptions and how to document tenant bad faith.',
    'Notificări pentru neplată: texte gata de trimis': 'Non-payment notices: templates ready to send',
    'Mesaj WhatsApp ziua 5, email formal ziua 15, notificare recomandată ziua 30. Ton calibrat pentru fiecare etapă, fără să enervezi inutil.': 'WhatsApp message day 5, formal email day 15, registered notice day 30. Tone calibrated for each stage, without unnecessary aggravation.',
    'Cel mai solicitat': 'Most requested',
    'Clauza specifică animale de companie': 'Pet-specific clause',
    'Text complet de inserat în contract: tip animal, garanție extinsă 1+2, responsabilități clare, procedură daune.': 'Full text to insert in the contract: animal type, extended guarantee 1+2, clear responsibilities, damage procedure.',

    /* ── RENTAL KIT PAGE: Ghid Chiriaș ── */
    'Ghid Chiriaș': 'Tenant Guide',
    'Un chiriaș informat': 'An informed tenant',
    'e un chiriaș responsabil.': 'is a responsible tenant.',
    'Ghidul de chiriaș nu e o listă de reguli. E un document care construiește relația de la prima zi, cu ton cald, informații clare și zero ambiguitate despre garanție.': "The tenant guide is not a list of rules. It's a document that builds the relationship from day one, with a warm tone, clear information and zero ambiguity about the guarantee.",
    'Bun venit · Cum funcționează · Ce așteptăm unii de la alții': 'Welcome · How it works · What we expect from each other',
    'Bun venit!': 'Welcome!',
    '„Bine ai venit în noul tău spațiu. Ne bucurăm că ai ales să locuiești aici. Acest ghid nu e un regulament. E o conversație despre cum funcționează lucrurile și cum facem ca această colaborare să fie bună pentru toți."': '"Welcome to your new space. We\'re glad you chose to live here. This guide is not a rulebook. It\'s a conversation about how things work and how we make this work for everyone."',
    'Ce poți aștepta de la noi': 'What you can expect from us',
    'Răspuns în maxim 48h': 'Response within 48h',
    'Nicio vizită fără preaviz': 'No visits without notice',
    'Rezolvare rapidă a problemelor': 'Quick resolution of issues',
    'Comunicare corectă și clară': 'Correct and clear communication',
    'Uzură normală vs. daune': 'Normal wear vs. damage',
    '✓ Normal: urme minore pe pereți, uzura ușoară a mobilierului în timp': '✓ Normal: minor marks on walls, light furniture wear over time',
    '✗ Daună: lovituri, spargeri, mucegai din lipsă de aerisire': '✗ Damage: impacts, breakages, mould from lack of ventilation',
    'Anexa A4 · Procedura clară în 3 pași': 'Annex A4 · Clear 3-step procedure',
    'Se returnează integral dacă': 'Returned in full if',
    'Spațiu predat conform inventarului și setului foto': 'Space handed over per the inventory and photo set',
    'Nu există daune sau lipsuri din inventar': 'No damage or missing items from inventory',
    'Preavizul de eliberare respectat': 'Release notice respected',
    'Procedura de avertisment — 3 pași': 'Warning procedure — 3 steps',
    'Pasul 1': 'Step 1',
    'Notificare scrisă · 5 zile': 'Written notice · 5 days',
    'Pasul 2': 'Step 2',
    'Remediere sau contestație · 10 zile': 'Remedy or dispute · 10 days',
    'Pasul 3': 'Step 3',
    'Reținere justificată cu documente': 'Justified retention with documents',
    'Se reține parțial sau total pentru': 'Partially or fully retained for',
    'Daune materiale documentate': 'Documented material damage',
    'Curățenie excesiv neglijată': 'Excessively neglected cleanliness',
    'Restanțe la chirie sau utilități': 'Rent or utility arrears',
    'Documente pentru chiriaș': 'Documents for the tenant',
    'Reguli de utilizare': 'Usage rules',
    'Ce e interzis și ce e obligatoriu, clar și fără ambiguitate, semnat la predarea cheilor.': 'What is prohibited and what is required, clearly and without ambiguity, signed at key handover.',
    'Ghid de returnare garanție': 'Guarantee return guide',
    'Mecanismul complet în limbaj simplu. Procedura de avertisment în 3 pași, fără surprize la final.': 'The complete mechanism in plain language. 3-step warning procedure, no surprises at the end.',
    'Fișă de urgențe': 'Emergency sheet',
    'Instalator, electrician, administrator bloc, urgențe gaz, 112. Completată înainte de predare.': 'Plumber, electrician, building manager, gas emergencies, 112. Completed before handover.',

    /* ── RENTAL KIT PAGE: Trauma ── */
    'Știm ce piață avem': 'We know our market',
    'Poate că nu crezi în asta.': "Maybe you don't believe this.",
    'Pentru că ai fost păcălit înainte.': "Because you've been let down before.",
    'Am citit sute de comentarii de la proprietari români. Știm cum arată trauma unui apartament distrus, a unui chiriaș care nu pleacă, a garanției care nu acoperă daunele. Nu îți spunem că n-o să se mai întâmple niciodată. Îți spunem că se poate gestiona dacă ai sistemul potrivit.': "We have read hundreds of comments from Romanian landlords. We know what the trauma of a destroyed apartment looks like, of a tenant who won't leave, of a guarantee that doesn't cover the damage. We're not saying it will never happen again. We're saying it can be managed if you have the right system.",
    'Inspectezi când ai nevoie': 'Inspect when you need to',
    'Calendar flexibil: 30 zile (opțional), 6 luni, anual. Spui transparent chiriașului de la început. Fără surprize pentru nimeni.': 'Flexible schedule: 30 days (optional), 6 months, annual. You tell the tenant transparently from the start. No surprises for anyone.',
    'Garanție adaptată la nivelul tău de risc': 'Guarantee tailored to your risk level',
    'Standard (1+1) sau varianta cu protecție mai mare (1+2). Noi îți oferim opțiunile, tu alegi.': 'Standard (1+1) or the higher-protection option (1+2). We offer the options, you choose.',
    'Ghid pentru situații dificile': 'Guide for difficult situations',
    'Petreceri, neplată, refuz evacuare, cheie nepredată, ANAF. Pași concreți pentru fiecare, inclusiv clauze de adăugat în contract.': 'Parties, non-payment, refusal to vacate, key not returned, ANAF. Concrete steps for each, including clauses to add to the contract.',
    'Vorbim despre situația ta →': "Let's talk about your situation →",
    'Sau începe cu un Raport de Rentabilitate': 'Or start with a Profitability Report',

    /* ── PORTOFOLIU PAGE ── */
    'Proiecte finalizate': 'Completed projects',
    'Before & After': 'Before & After',
    'Toate proiectele': 'All projects',

    /* ── INVESTITORI PAGE ── */
    'Investitori & Dezvoltatori': 'Investors & Developers',
    'Randament maxim. Risc minim.': 'Maximum return. Minimum risk.',

    /* ── COMMON REPEATED ── */
    'Probleme & Soluții': 'Problems & Solutions',
    'Fără angajament': 'No commitment',
    'Contactează-ne': 'Contact us',
    'Află mai multe': 'Learn more',
    'Vezi detalii →': 'See details →',
    'Înapoi sus': 'Back to top',
    'Scrie-ne pe WhatsApp': 'Write to us on WhatsApp',
    'Mesajul tău...': 'Your message…',
    'Numele tău': 'Your name',
    'detalii →': 'details →',
    'Primești:': 'You receive:',
    'plan de etaje confirmat și măsurători ale spațiului': 'confirmed floor plan and space measurements',
    'Rezultat:': 'Result:',
    '← Înapoi la site': '← Back to site',
    '← Înapoi': '← Back',

    /* ── FOOTER (investitori + other pages) ── */
    'Servicii': 'Services',
    'Design de interior': 'Interior design',
    'Prima firmă de': 'The first',
    'din România.': 'company in Romania.',
    'București · 2025': 'Bucharest · 2025',

    /* ── INVESTITORI: Hero ── */
    'Investitori · Agenți · Dezvoltatori': 'Investors · Agents · Developers',
    'Un sistem aplicat': 'A system applied',
    'pe fiecare apartament': 'to each apartment',
    'din portofoliul tău.': 'in your portfolio.',
    'Design funcțional, selecție chiriaș și documente personalizate. Același standard, la fiecare unitate, indiferent de volum.': 'Functional design, tenant selection, and custom documents. The same standard for each unit, regardless of volume.',
    'chirie extra/ lună': 'extra rent / month',
    'medie găsire chiriaș': 'average to find a tenant',
    'Sistem replicabil la orice scară': 'Replicable system at any scale',
    'Calculează randamentul portofoliului →': 'Calculate portfolio return →',
    'Raport de Rentabilitate portofoliu': 'Portfolio Profitability Report',

    /* ── INVESTITORI: Calculator ── */
    'Calculator portofoliu': 'Portfolio calculator',
    'Cât produce portofoliul tău față de cât ar putea?': 'How much does your portfolio produce vs. how much it could?',
    'Introduce datele reale. Calculatorul arată venitul extra cumulat la nivelul întregului portofoliu: suma totală pe an, nu per apartament.': 'Enter your real data. The calculator shows cumulative extra income across the entire portfolio: total per year, not per apartment.',
    'Număr de apartamente': 'Number of apartments',
    'Toate unitățile pe care vrei să le optimizezi': 'All units you want to optimise',
    'Chirie medie actuală / lună': 'Average current rent / month',
    'Media pe întreg portofoliul, în euro': 'Average across the entire portfolio, in euros',
    'Săptămâni goale / apartament / an': 'Empty weeks / apartment / year',
    'Perioadele între chiriași + timp de pregătire': 'Periods between tenants + preparation time',
    'Venit extra estimat / an': 'Estimated extra income / year',
    'pe întreg portofoliul': 'across the entire portfolio',
    'Chirie extra': 'Extra rent',
    'Economie rotație eliminată': 'Savings from eliminated turnover',
    'Total cumulat / an': 'Total cumulative / year',
    'per apartament': 'per apartment',
    'Estimare orientativă bazată pe rezultate documentate. Cifrele reale depind de apartament și zonă.': 'Indicative estimate based on documented results. Actual figures depend on the apartment and area.',

    /* ── INVESTITORI: Process at scale ── */
    'Proces la scară': 'Process at scale',
    'pentru un portofoliu': 'for a portfolio',
    'Nu lucrăm altfel la apartamentul 5 față de primul. Același proces, documentat și replicabil. Asta e diferența față de un designer freelancer.': "We don't work differently on apartment 5 vs. the first. The same process, documented and replicable. That's the difference from a freelance designer.",
    'Audit de portofoliu': 'Portfolio audit',
    'Nu toate apartamentele au același potențial de îmbunătățire. Stabilim care unități au cel mai mare ROI posibil și în ce ordine are sens să mergi.': 'Not all apartments have the same improvement potential. We identify which units have the highest possible ROI and in what order it makes sense to proceed.',
    'plan de prioritizare cu date, nu cu instinct.': 'a data-driven prioritisation plan, not guesswork.',
    'Design și execuție': 'Design & execution',
    'Fiecare apartament primește același nivel de atenție: plan 2D, moodboard, listă furnizori, vizite pe șantier. Nu există proiect mai mic sau mai important.': 'Each apartment receives the same level of attention: 2D plan, moodboard, supplier list, site visits. There is no smaller or more important project.',
    'aceeași calitate la apartamentul 1 și la apartamentul 8.': 'the same quality at apartment 1 as at apartment 8.',
    'Sistem de închiriere': 'Rental system',
    'Design-ul atrage chiriașul. Sistemul îl filtrează și îl ține. Rental Kit-ul se aplică identic la fiecare unitate, fără să improvizezi la fiecare nou chiriaș.': 'Design attracts the tenant. The system filters and retains them. The Rental Kit is applied identically to each unit, without improvising for every new tenant.',
    'portofoliu care funcționează fără să supervizezi fiecare pas.': 'a portfolio that works without you supervising every step.',
    'De ce contează asta la portofoliu:': 'Why this matters for a portfolio:',
    'Un designer freelancer livrează diferit la fiecare proiect. Noi avem un proces scris și repetat. Asta înseamnă că poți scala fără să reinventezi roata la fiecare apartament și că știi la ce rezultat să te aștepți înainte să începi.': 'A freelance designer delivers differently on each project. We have a written, repeatable process. This means you can scale without reinventing the wheel for each apartment, and you know what result to expect before you start.',

    /* ── INVESTITORI: Rental Kit section ── */
    'Infrastructura de selecție': 'The selection infrastructure',
    'și documente a portofoliului tău': 'and documents for your portfolio',
    'Nu e un set de șabloane. E un sistem de operare pentru relația cu chiriașii, replicat identic la fiecare unitate, fără să pierzi timp re-inventând roata la fiecare semnătură.': "It's not a set of templates. It's an operating system for your tenant relationships, replicated identically at each unit, without wasting time reinventing the wheel at every signature.",
    'Selecție chiriaș': 'Tenant selection',
    'Sistem pe 4 piloni': '4-pillar system',
    'Venit verificabil și stabil': 'Verifiable and stable income',
    'Stabilitate profesională și personală': 'Professional and personal stability',
    'Referințe de la proprietar anterior': 'References from previous landlord',
    'Comportament la vizionare și negociere': 'Behaviour during viewing and negotiation',
    'Documente': 'Documents',
    'Contract personalizat cu clauze reale': 'Custom contract with real clauses',
    'Clauze de reziliere cu termen realist': 'Termination clauses with realistic notice',
    'Protocol neplată în 3 etape clare': '3-stage non-payment protocol',
    'Garanție corelată cu riscul real': 'Deposit correlated with real risk',
    'Nu șablon ANAF. Contract care funcționează.': 'Not an ANAF template. A contract that works.',
    'Documentare predare': 'Handover documentation',
    'Proces verbal foto cu timestamp': 'Timestamped photo inspection report',
    'Fotografii per cameră și element': 'Photos per room and item',
    'Inventar complet cu stare documentată': 'Complete inventory with documented condition',
    'Timestamp cu valoare juridică': 'Timestamp with legal value',
    'Checklist de predare semnat bilateral': 'Bilaterally signed handover checklist',
    'Situații dificile': 'Difficult situations',
    'Protocoale scrise, nu improvizate': 'Written protocols, not improvised',
    'Escaladare în 3 etape cu termene clare': '3-stage escalation with clear deadlines',
    'Template-uri de comunicare oficială': 'Official communication templates',
    'Protocol evacuare și recuperare daune': 'Eviction and damage recovery protocol',
    'Ce e legal și ce nu, scris explicit': 'What is and is not legal, explicitly written',
    'Vezi tot ce include Rental Kit →': 'See everything included in Rental Kit →',

    /* ── INVESTITORI: Case studies ── */
    'Rezultate documentate': 'Documented results',
    'Proprietari care au testat sistemul': 'Landlords who tested the system',
    'înainte să îl scaleze': 'before scaling it',
    'Ambele studii de caz de mai jos pornesc de la un singur apartament. Sistemul e același indiferent de numărul de unități.': 'Both case studies below start from a single apartment. The system is the same regardless of the number of units.',
    'Câștig estimat / 10 ani': 'Estimated gain / 10 years',
    'Apartament cu baie cu mucegai, tavane parțial degradate și instalații vechi. Proprietarul nu era în țară și se temea că procesul va fi lung și rezultatul incert.': 'Apartment with a mouldy bathroom, partially deteriorated ceilings, and old installations. The owner was not in the country and feared the process would be long and the result uncertain.',
    'Baie renovată complet, tavane refăcute, living mobilat funcțional cu depozitare integrată și materiale rezistente la uzură intensă.': 'Bathroom fully renovated, ceilings redone, living room functionally furnished with integrated storage and heavy-use-resistant materials.',
    'până la chiriaș potrivit': 'to the right tenant',
    'contract semnat de la început': 'contract signed from the start',
    'recuperare completă a investiției': 'full investment payback',
    'Dl. Ciobanu, proprietar · Pachet Invest Premium': 'Mr. Ciobanu, owner · Invest Premium Package',
    'Chiriaș nou la fiecare 6–8 luni, cu ~2 luni goale între fiecare plecare. Proprietarul credea că problema sunt chiriașii. Nu era.': 'New tenant every 6–8 months, with ~2 empty months between each departure. The owner thought the problem was the tenants. It was not.',
    'Living reorganizat, depozitare maximizată în dormitor, iluminat optimizat. Și sistemul de selecție, care a schimbat complet profilul de chiriaș atras.': 'Living room reorganised, storage maximised in the bedroom, lighting optimised. And the selection system, which completely changed the profile of tenants attracted.',
    'Costin, proprietar · Pachet Invest Standard': 'Costin, owner · Invest Standard Package',

    /* ── INVESTITORI: CTA ── */
    'Ofertă pentru portofoliu': 'Portfolio offer',
    'Prima unitate la preț de probă.': 'First unit at a trial price.',
    'Vezi consistența înainte să te angajezi.': 'See the consistency before you commit.',
    'Nu îți cerem să ne dai întreg portofoliul de la prima discuție. Începem cu un apartament, tu vezi procesul, calitatea și rezultatul. Abia apoi decidem dacă și cum scalăm.': "We don't ask you to hand us your entire portfolio from the first conversation. We start with one apartment, you see the process, quality, and result. Only then do we decide if and how we scale.",
    'Angajament': 'Commitment',
    '1 apartament': '1 apartment',
    'Test real, același proces ca la scară. Nu un demo.': 'A real test, the same process as at scale. Not a demo.',
    'Preț': 'Price',
    'Tarif standard': 'Standard rate',
    'Nicio reducere de marketing. Calitatea reală, transparent.': 'No marketing discount. Real quality, transparent.',
    'Continuare': 'Next steps',
    '0 obligații după': '0 obligations after',
    'Tu decizi dacă și când extinzi la restul portofoliului': 'You decide if and when to extend to the rest of the portfolio',
    'Solicită ofertă pentru prima unitate →': 'Request a quote for the first unit →',
    'Recalculează randamentul': 'Recalculate return',
    'Evaluare completă livrată în 72h · fără întâlnire obligatorie': 'Complete evaluation delivered in 72h · no mandatory meeting',

    /* ── PORTOFOLIU: Filters & stats ── */
    'Toate': 'All',
    'Garsoniere': 'Studios',
    'chirie lunară': 'monthly rent',
    'până la chiriaș': 'to tenant',
    'recuperare inv.': 'inv. payback',
    'reparații după plecare': 'repairs after departure',
    'contract chiriaș': 'tenant contract',
    'Fiecare proiect a urmărit același obiectiv: un apartament care produce mai mult, cu mai puțin efort pentru proprietar.': 'Each project pursued the same goal: an apartment that produces more, with less effort for the owner.',
    /* Project names */
    '2 camere Drumul Taberei': '2-room apt. Drumul Taberei',
    'Garsonieră Vatra Luminoasă': 'Studio Vatra Luminoasă',
    'Garsonieră Tineretului': 'Studio Tineretului',
    'Garsonieră Drumul Taberei': 'Studio Drumul Taberei',
    '2 camere Floreasca': '2-room apt. Floreasca',
    /* Project meta */
    'București · Sector 1 · 55 mp': 'Bucharest · Sector 1 · 55 sqm',
    'București · Sector 2 · 32 mp': 'Bucharest · Sector 2 · 32 sqm',
    'București · Sector 4 · 38 mp': 'Bucharest · Sector 4 · 38 sqm',
    'București · Sector 6 · 33 mp': 'Bucharest · Sector 6 · 33 sqm',
    'București · Sector 6 · 52 mp': 'Bucharest · Sector 6 · 52 sqm',
    /* Tags */
    '2 săptămâni': '2 weeks',
    '8 săptămâni': '8 weeks',
    /* Stat values */
    '4 zile': '4 days',
    '7 zile': '7 days',
    '2 ani': '2 years',
    '~48 luni': '~48 months',
    '~8 luni': '~8 months',
    '~30 luni': '~30 months',
    '~20 luni': '~20 months',
    '~14 luni': '~14 months',

    /* ── AUDIT PAGE ── */
    'Serviciu de diagnostic': 'Diagnostic service',
    'apartament.': 'apartment.',
    'Înainte să investești, află exact ce merită schimbat și ce impact real va avea asupra chiriei tale. Nu e design interior, e diagnosticul care îți arată dacă și cât merită să investești.': "Before you invest, find out exactly what's worth changing and what real impact it will have on your rent. It's not interior design — it's the diagnostic that shows you whether and how much it's worth investing.",
    'Livrat în 72h': 'Delivered in 72h',
    'București + zone limitrofe': 'Bucharest + surrounding areas',
    'De ce ai nevoie de un Raport de Rentabilitate': 'Why you need a Profitability Report',
    'Situații tipice și ce obții.': 'Typical situations and what you get.',
    'Situații tipice': 'Typical situations',
    'Ce obții': 'What you get',
    'Ai un apartament deja amenajat dar chiria stagnează': 'You have a furnished apartment but rent is stagnating',
    'Vrei să crești chiria dar nu știi ce să schimbi': "You want to raise rent but don't know what to change",
    'Ai un apartament gol și vrei să știi cât să investești': "You have an empty apartment and want to know how much to invest",
    'Chiriașii nu stau mult și nu înțelegi de ce': "Tenants don't stay long and you don't understand why",
    'Vrei o opinie profesională înainte de orice decizie': 'You want a professional opinion before any decision',
    'Claritate: știi exact ce schimbi și ce lași': 'Clarity: you know exactly what to change and what to keep',
    'Prioritizare: ce are impact maxim cu cost minim': 'Prioritisation: what has maximum impact at minimum cost',
    'Estimare de buget realistă pentru implementare': 'Realistic budget estimate for implementation',
    'Potențial de chirie după optimizare': 'Rent potential after optimisation',
    'Recomandare de pachet dacă vrei să continuăm': 'Package recommendation if you want to continue',
    'Cum funcționează — 3 pași': 'How it works — 3 steps',
    'De la programare la raport în 72h.': 'From booking to report in 72h.',
    'Vizita': 'The visit',
    '1–2 ore la fața locului. Evaluăm fiecare cameră, fiecare element de mobilier, fluxul spațiului, lumina, depozitarea și starea generală a fiecărui element.': '1–2 hours on-site. We evaluate each room, each piece of furniture, the spatial flow, lighting, storage, and general condition of each element.',
    'Analiza': 'The analysis',
    '72 de ore după vizită. Comparăm cu piața actuală din zona ta, evaluăm potențialul de chirie și construim lista de intervenții prioritizate cu impact și cost estimat.': '72 hours after the visit. We compare with the current market in your area, evaluate the rent potential, and build the prioritised intervention list with estimated impact and cost.',
    'Raportul': 'The report',
    'Document PDF livrat digital. Include toate concluziile, prioritizarea intervențiilor și estimarea impactului financiar, gata de implementat sau de discutat.': 'PDF document delivered digitally. Includes all findings, prioritised interventions, and financial impact estimates — ready to implement or discuss.',
    'Ce conține raportul': 'What the report contains',
    '7 secțiuni. Un document complet.': '7 sections. A complete document.',
    'Secțiune': 'Section',
    'Ce include': 'What it includes',
    'Evaluarea stării actuale': 'Current state evaluation',
    'Scor per cameră, puncte forte și puncte slabe, probleme identificate': 'Score per room, strengths and weaknesses, issues identified',
    'Analiza de piață': 'Market analysis',
    'Chiria medie în zona ta pentru apartamente similare, neoptimizate vs optimizate': 'Average rent in your area for similar apartments, non-optimised vs. optimised',
    'Lista de intervenții prioritizate': 'Prioritised intervention list',
    'Ce schimbi prima dată, ce poți amâna, ce nu merită investit, cu prioritate și impact': 'What to change first, what to postpone, what is not worth investing in — with priority and impact',
    'Estimare buget implementare': 'Implementation budget estimate',
    'Cost orientativ per intervenție, total minim și total recomandat': 'Indicative cost per intervention, minimum and recommended total',
    'Potențial de chirie': 'Rent potential',
    'Chiria estimată după implementarea recomandărilor, conservator și optimist': 'Estimated rent after implementing recommendations, conservative and optimistic scenarios',
    'ROI estimat': 'Estimated ROI',
    'Cât durează să recuperezi investiția din chiria extra generată': 'How long it takes to recover the investment from the extra rent generated',
    'Recomandare pachet': 'Package recommendation',
    'Dacă situația merită un proiect complet, ce pachet și de ce': 'Whether the situation warrants a full project, which package and why',
    'Accesul la raport': 'Access to the report',
    'Simplu și fără cost.': 'Simple and free.',
    'Raport de Rentabilitate standard': 'Standard Profitability Report',
    'garsoniere și apartamente 2–3 camere în București · livrat în 72h de la vizită': 'studios and 2–3 room apartments in Bucharest · delivered within 72h of the visit',
    'Ce NU include': 'What it does NOT include',
    'Proiect de design sau randări': 'Design project or renders',
    'Implementare sau coordonare lucrări': 'Implementation or works coordination',
    'Achiziție mobilier sau materiale': 'Furniture or materials purchase',
    'Listarea apartamentului': 'Apartment listing',
    'Zonă de acoperire': 'Coverage area',
    'București și zonele limitrofe. Pentru alte orașe, contactați-ne în prealabil pentru detalii de deplasare.': 'Bucharest and surrounding areas. For other cities, contact us in advance for travel details.',
    'Potrivit dacă': 'Suitable if',
    'Este Raportul de Rentabilitate pentru tine?': 'Is the Profitability Report for you?',
    '✓ Merită Raportul de Rentabilitate dacă...': '✓ The Profitability Report is worth it if…',
    'Ai un apartament deja mobilat pe care îl închiriezi sau vrei să îl închiriezi': 'You have a furnished apartment that you rent or want to rent out',
    'Nu ești sigur dacă merită un proiect complet de design': "You're not sure whether a full design project is worth it",
    'Vrei o opinie externă profesională înainte de orice investiție': 'You want a professional external opinion before any investment',
    'Chiria actuală e sub potențialul pieței și nu știi de ce': "Your current rent is below the market potential and you don't know why",
    '✗ Probabil nu ai nevoie dacă...': "✗ You probably don't need it if…",
    'Apartamentul e gol și neamenajat complet. Poți începe direct cu pachetul Invest Standard sau Invest Premium': 'The apartment is empty and completely unfurnished — you can start directly with Invest Standard or Invest Premium',
    'Știi deja exact ce vrei să schimbi și ai bugetul pregătit': 'You already know exactly what you want to change and have the budget ready',
    'Cauți confirmare emoțională, nu analiză obiectivă': "You're looking for emotional validation, not objective analysis",
    'Raportul de Rentabilitate e primul pas potrivit dacă ești nehotărât. Este gratuit, primești claritate și decizi în cunoștință de cauză dacă și cât merită să investești. Fără angajament pentru nimic ulterior.': "The Profitability Report is the right first step if you're undecided. It's free, you gain clarity, and decide with full information whether and how much it's worth investing. No commitment for anything afterwards.",

    /* ── FAQ PAGE ── */
    'Întrebări & Răspunsuri': 'Questions & Answers',
    'Întrebări': 'Frequently',
    'frecvente.': 'asked questions.',
    'Tot ce vrei să știi înainte să lucrezi cu noi: despre pachete, Rental Kit, selecție chiriași și ce se întâmplă dacă lucrurile merg prost.': 'Everything you want to know before working with us: about packages, the Rental Kit, tenant selection, and what happens when things go wrong.',
    'Despre Rent UP': 'About Rent UP',
    'Pachete & Prețuri': 'Packages & Prices',
    'Selecția chiriașului': 'Tenant selection',
    'Pregătirea apartamentului': 'Apartment preparation',
    'Categorii': 'Categories',
    '01 · Despre Rent UP': '01 · About Rent UP',
    'Ce este Rent UP și cum funcționează?': 'What is Rent UP and how does it work?',
    'Bazele. Ce facem, pentru cine și ce nu facem.': "The basics. What we do, for whom, and what we don't do.",
    'Ce face Rent UP, concret?': 'What does Rent UP do, concretely?',
    'Pentru cine e Rent UP?': 'Who is Rent UP for?',
    'RentUP se ocupă și de apartamente în regim hotelier sau Airbnb?': 'Does RentUP also handle short-term / Airbnb rentals?',
    '02 · Raport de Rentabilitate': '02 · Profitability Report',
    'Ce este Raportul de Rentabilitate și ce primesc?': 'What is the Profitability Report and what do I receive?',
    'Primul pas. O evaluare reală înainte de orice decizie.': 'The first step. A real evaluation before any decision.',
    'Ce este Raportul de Rentabilitate Gratuit și ce include?': 'What is the Free Profitability Report and what does it include?',
    'Dacă fac Raportul de Rentabilitate, sunt obligat să continui cu un pachet?': 'If I get the Profitability Report, am I obliged to continue with a package?',
    'Merită Raportul de Rentabilitate dacă apartamentul meu e deja în stare bună?': 'Is the Profitability Report worthwhile if my apartment is already in good condition?',
    '03 · Pachete & Prețuri': '03 · Packages & Prices',
    'Cât costă și ce primesc?': 'How much does it cost and what do I receive?',
    'Cele 5 trepte de pachet, prețuri și cum alegi ce ți se potrivește.': 'The 5 package tiers, prices, and how to choose what suits you.',
    'Care e diferența dintre cele 5 pachete?': 'What is the difference between the 5 packages?',
    'Prețul per mp include și mobilierul?': 'Does the price per sqm include furniture?',
    'În cât timp se recuperează investiția?': 'How long does it take to recover the investment?',
    'Recuperarea în 2-3 ani mi se pare mult. Nu e mai simplu să nu fac nimic?': "2–3 year payback seems like a lot. Isn't it simpler to do nothing?",
    'Cât durează un proiect?': 'How long does a project take?',
    'Câte runde de feedback sunt incluse?': 'How many rounds of feedback are included?',
    'Ce influențează costul implementării și cum îl pot reduce?': 'What affects the implementation cost and how can I reduce it?',
    '04 · Selecția chiriașului': '04 · Tenant selection',
    'Cum găsesc un chiriaș potrivit?': 'How do I find the right tenant?',
    'Sistemul de selecție pe 4 piloni și cum elimini „e noroc".': 'The 4-pillar selection system and how to eliminate "it\'s luck".',
    'De ce am nevoie de RentUP dacă am mai închiriat singur până acum?': "Why do I need RentUP if I've rented on my own before?",
    'De ce designul atrage un chiriaș mai bun?': 'Why does design attract a better tenant?',
    'Cum mă ajută Rental Kit-ul să găsesc și să păstrez un chiriaș bun?': 'How does the Rental Kit help me find and keep a good tenant?',
    'Ar trebui să accept chiriași cu animale de companie?': 'Should I accept tenants with pets?',
    '06 · Situații dificile': '06 · Difficult situations',
    'Ce fac când lucrurile merg prost?': 'What do I do when things go wrong?',
    'Răspunsuri directe pentru cele mai frecvente situații de criză.': 'Direct answers for the most common crisis situations.',
    'Chiriașul nu plătește, cum procedez?': "The tenant isn't paying — what do I do?",
    'Chiriașul refuză să plece la expirarea contractului, ce fac?': 'The tenant refuses to leave when the contract expires — what do I do?',
    'Chiriașul a lăsat daune la plecare, cum recuperez?': 'The tenant left damage on departure — how do I recover costs?',
    'Cât durează să găsesc chiriaș după ce termin proiectul?': 'How long does it take to find a tenant after the project is completed?',
    '07 · Rental Kit': '07 · Rental Kit',
    'Ce este Rental Kit-ul și cât timp îl folosesc?': 'What is the Rental Kit and how long do I use it?',
    'Sistemul complet de documente și protocoale pentru administrare.': 'The complete system of documents and protocols for management.',
    'Pot lua doar design, fără Rental Kit?': 'Can I take just the design, without the Rental Kit?',
    'Pot cumpăra doar Rental Kit, fără pachet de design?': 'Can I buy just the Rental Kit, without a design package?',
    'Pot folosi Rental Kit-ul pentru mai multe proprietăți?': 'Can I use the Rental Kit for multiple properties?',
    '08 · Pregătirea apartamentului': '08 · Apartment preparation',
    'Cum pregătesc apartamentul pentru chirie?': 'How do I prepare the apartment for rental?',
    'Pașii, bugetul și documentele necesare înainte de prima vizionare.': 'The steps, budget, and documents needed before the first viewing.',
    'Care sunt pașii esențiali pentru a pregăti apartamentul pentru chirie?': 'What are the essential steps to prepare the apartment for rental?',
    'Cât costă să pregătești un apartament pentru chirie?': 'How much does it cost to prepare an apartment for rental?',
    'Ce documente trebuie să am pregătite înainte de a primi un chiriaș?': 'What documents do I need to have prepared before receiving a tenant?',
    'Vrei să vezi exact ce conține?': 'Want to see exactly what it contains?',
    'Toate modulele, documentele și protocoalele sunt detaliate pe pagina dedicată.': 'All modules, documents, and protocols are detailed on the dedicated page.',
    'Protocolul complet este în Rental Kit.': 'The complete protocol is in the Rental Kit.',
    'Pași exacți, termene, modele de notificări și clauze contractuale care fac diferența.': 'Exact steps, deadlines, notification templates and contract clauses that make the difference.',

    /* ── REALITATEA-CHIRIEI PAGE ── */
    'Din grupurile de proprietari români · Date reale 2025–2026': 'From Romanian landlord groups · Real data 2025–2026',
    'Nu e ghinion.': "It's not bad luck.",
    'E lipsă de sistem.': "It's a lack of system.",
    'Sute de proprietari spun același lucru: „E chestie de noroc." Nu e. 80–90% din problemele cu chiriașii pot fi prevenite sau rezolvate rapid, dacă există un proces. Iată cum arată.': 'Hundreds of landlords say the same thing: "It\'s a matter of luck." It\'s not. 80–90% of tenant problems can be prevented or resolved quickly if there is a process. Here is what it looks like.',
    'chiriași în medie': 'average tenants',
    'pe 5 ani, fără sistem': 'in 5 years, without a system',
    'costul estimat al': 'estimated cost of',
    'unui chiriaș problematic': 'one problematic tenant',
    'din probleme pot fi': 'of problems can be',
    'filtrate prin selecție corectă': 'filtered through proper selection',
    'costul real al lui': 'the real cost of',
    '"nu fac nimic" pe 5 ani': '"doing nothing" over 5 years',
    'Ai o situație activă acum?': 'Do you have an active situation right now?',
    'Mergi direct la problema ta.': 'Go directly to your problem.',
    'Selectează situația în care te afli. Fiecare are pași concreți mai jos.': 'Select the situation you are in. Each has concrete steps below.',
    'Urgent': 'Urgent',
    'Chiriașul nu plătește chiria sau utilitățile': 'The tenant is not paying rent or utilities',
    'Mergi la soluție →': 'Go to solution →',
    'Chiriașul refuză să plece. Ce fac?': 'The tenant refuses to leave. What do I do?',
    'Frecvent': 'Common',
    'A plecat și a lăsat daune. Cum recuperez?': 'They left and caused damage. How do I recover costs?',
    'Prevenție': 'Prevention',
    'Nu știu pe cine să bag. E noroc sau există sistem?': "I don't know who to let in. Is it luck or is there a system?",

    /* ── REALITATEA-CHIRIEI — BODY CONTENT ── */
    'Când suna telefonul, tresăream. Nu mai închiriez niciodată.': '"When the phone rang, I flinched. I\'m never renting again."',
    'Proprietar, 8 ani experiență cu chirii · Grup Facebook proprietari, 2026': 'Landlord, 8 years of rental experience · Facebook landlord group, 2026',
    'Calculul pe care proprietarii îl ignoră': 'The calculation landlords ignore',
    'Varianta „nu fac nimic"': 'The "do nothing" option',
    'nu costă': "doesn't cost",
    'zero.': 'zero.',
    'Costă enorm — dar lent, și niciodată în numerar. Se plătește în timp pierdut, nervi, bani recuperați parțial sau deloc. Iată o estimare conservatoare a pierderilor pe 5 ani fără un sistem de gestionare:': "It costs enormously — but slowly, and never in cash. It's paid in lost time, stress, and money recovered partially or not at all. Here is a conservative estimate of losses over 5 years without a management system:",
    'luni chirie pierdute prin rotație frecventă': 'months of rent lost through frequent turnover',
    'din chirie pe lună în timp irosit': 'of monthly rent in wasted time',
    'avarie medie nerambursată per chiriaș dificil': 'average unrecovered damage per difficult tenant',
    'pierdere medie pe proprietar, pe 5 ani, fără sistem': 'average loss per landlord over 5 years, without a system',
    '* Estimare bazată pe date din grupuri de proprietari români și studii europene de property management. Cifrele variază în funcție de situație.': '* Estimate based on data from Romanian landlord groups and European property management studies. Figures vary by situation.',

    /* Realitatea-chiriei — 7 problem sections */
    'Problema #1': 'Problem #1',
    'Chiriașul nu plătește': 'Tenant doesn\'t pay',
    'A funcționat luni sau ani. Apoi — o lună, două, trei. Scuze, promisiuni, tăcere. Și tu, cu rata la bancă sau cu celelalte cheltuieli, aștepți.': "It worked for months or years. Then — one month, two, three. Excuses, promises, silence. And you, with a mortgage or other expenses, you wait.",
    '„Plătesc săptămâna viitoare." — și săptămâna viitoare vine și trece.': '"I\'ll pay next week." — and next week comes and goes.',
    'Cum se rezolvă cu un sistem': 'How it\'s solved with a system',
    'Contract cu clauze clare de întârziere și procedură de notificare': 'Contract with clear late payment clauses and notification procedure',
    'Notificare scrisă formală în ziua 3 de întârziere, nu după o lună': 'Formal written notice on day 3 of delay, not after a month',
    'Dosar pregătit: act adițional de recunoaștere a datoriei, somație': 'Prepared file: debt acknowledgment addendum, formal demand',

    'Problema #2': 'Problem #2',
    'Chiriașul refuză să elibereze': 'Tenant refuses to vacate',
    'Contractul a expirat. Ai nevoie de apartament sau ai un alt chiriaș. El nu pleacă. Zice că n-are unde. Sau pur și simplu tace.': "The contract has expired. You need the apartment or have another tenant. They won't leave. They say they have nowhere to go. Or simply say nothing.",
    '„Nu am unde să merg." — și tu nu poți intra în apartamentul tău.': '"I have nowhere to go." — and you can\'t enter your own apartment.',
    'Clauză de evacuare negociată în contract, înainte să înceapă relația': 'Negotiated evacuation clause in the contract, before the relationship begins',
    'Notificare de reziliere cu 30 de zile, formă legală, trimisă recomandat': 'Termination notice with 30 days, legal form, sent by registered mail',
    'Protocol de predare cu inventar și proces-verbal la final': 'Handover protocol with inventory and handover report at the end',

    'Problema #3': 'Problem #3',
    'Daune și apartament distrus': 'Damage and destroyed apartment',
    'Ai preluat cheia. Ce ai găsit nu seamănă cu ce ai lăsat. Pereți zgâriați, mobilă ruptă, miros greu de scăpat. Și garanția, dacă a existat, acoperă o treime.': "You got the key back. What you found doesn't resemble what you left. Scratched walls, broken furniture, a smell that's hard to get rid of. And the deposit, if there was one, covers a third.",
    '„A fost deja așa." — și nu ai nimic să dovedești contrariul.': '"It was already like that." — and you have nothing to prove otherwise.',
    'Proces-verbal de predare-primire cu fotografii la intrare, semnat de ambele părți': 'Entry handover report with photographs, signed by both parties',
    'Inventar detaliat al stării: pereți, podea, mobilă, electrocasnice': 'Detailed condition inventory: walls, floors, furniture, appliances',
    'Garanție corect dimensionată față de riscul real al proprietății': 'Deposit properly sized relative to the actual risk of the property',

    'Problema #4': 'Problem #4',
    'Chiriași care subînchiriază sau aduc persoane neautorizate': 'Tenants who sublet or bring unauthorized persons',
    'Ai închiriat unei singure persoane. Acum locuiesc trei. Sau apartamentul tău apare pe un site de închirieri pe termen scurt, fără să știi.': "You rented to one person. Now three live there. Or your apartment appears on a short-term rental site, without your knowledge.",
    '„Sunt prieteni, stau câteva zile." — dar chiria tot o plătește unul singur.': '"They\'re friends, staying a few days." — but only one person pays the rent.',
    'Clauze contractuale clare: interdicție subînchiriere, identificare ocupanți': 'Clear contractual clauses: subletting prohibition, occupant identification',
    'Vizite de verificare periodice, anunțate în prealabil (drept legal al proprietarului)': 'Periodic inspection visits, announced in advance (legal right of the landlord)',
    'Protocol de avertizare și reziliere imediată în caz de încălcare': 'Warning protocol and immediate termination in case of breach',

    'Problema #5': 'Problem #5',
    'Chiriași care dispar fără preaviz': 'Tenants who disappear without notice',
    'Luni și-a plătit chiria. Acum nu mai răspunde la telefon, ușa e încuiată, nu știi dacă s-a mutat sau nu. Pierzi timp, bani, nervi.': "They paid rent for months. Now they don't answer the phone, the door is locked, you don't know if they moved out or not. You lose time, money, patience.",
    '„Am lăsat tot în regulă." — și dispare cu cheia.': '"I left everything in order." — and disappears with the key.',
    'Clauză de notificare prealabilă de minimum 30 de zile pentru reziliere': 'Prior notice clause of minimum 30 days for termination',
    'Contact de urgență și persoană de referință înregistrată în contract': 'Emergency contact and registered reference person in the contract',
    'Procedură clară de predare: chei, utilități, proces-verbal': 'Clear handover procedure: keys, utilities, handover report',

    'Problema #6': 'Problem #6',
    'Rotație frecventă și perioade goale': 'Frequent turnover and empty periods',
    'Chiriașul pleacă după 6 luni. Sau după un an. Reclamezi, refaci, aștepți. O lună goală = o lună de chirie pierdută. Se adună.': "The tenant leaves after 6 months. Or after a year. You advertise, redo, wait. One empty month = one month of lost rent. It adds up.",
    '„Nu era ce mă așteptam." — după ce a semnat.': '"It wasn\'t what I expected." — after signing.',
    'Anunț corect scris: ce include, ce nu include, pentru cine e potrivit': 'Correctly written listing: what\'s included, what\'s not, who it\'s right for',
    'Selecție inițială mai riguroasă = mai puțin timp irosit pe vizionări': 'More rigorous initial selection = less time wasted on viewings',
    'Contract cu clauze de fidelizare: penalitate pentru ieșire înainte de termen': 'Contract with retention clauses: penalty for early exit',

    'Problema #7': 'Problem #7',
    'Comunicare haotică și stres permanent': 'Chaotic communication and permanent stress',
    'Mesaje la orice oră. Solicitări repetate. Urgențe care nu sunt urgențe. Sau tăcere totală când chiar ai nevoie de un răspuns.': 'Messages at any hour. Repeated requests. Emergencies that aren\'t emergencies. Or total silence when you really need a response.',
    '„Îmi scrii pe WhatsApp, pe email, pe SMS și tot nu răspunzi." — și tu ai un job și o viață.': '"You write to me on WhatsApp, email, SMS and you still don\'t reply." — and you have a job and a life.',
    'Canal unic de comunicare, definit în contract': 'Single communication channel, defined in the contract',
    'Timp de răspuns asumat: 24–48h pentru solicitări non-urgente': 'Assumed response time: 24–48h for non-urgent requests',
    'Listă de urgențe reale vs. solicitări obișnuite, explicată la predarea cheii': 'List of real emergencies vs. regular requests, explained at key handover',

    /* Realitatea-chiriei — quotes section */
    'Ce spun proprietarii care au trecut prin asta': 'What landlords who have been through this say',
    'Experiențe reale din comunitatea proprietarilor români': 'Real experiences from the Romanian landlord community',
    'Am pierdut 4 luni de chirie și am rămas cu apartamentul distrus. Dacă știam de la început ce clauze să pun în contract, evitam tot.': 'I lost 4 months of rent and was left with a destroyed apartment. If I had known from the start what clauses to put in the contract, I could have avoided all of it.',
    'Proprietar, Cluj · Grup Facebook, 2025': 'Landlord, Cluj · Facebook group, 2025',
    'Chiriașul a plecat fără să anunțe, cu cheia la el. Am schimbat yala, am refăcut apartamentul, am pierdut două luni. Acum am în contract o clauză de predare cu 30 de zile preaviz.': 'The tenant left without notice, keeping the key. I changed the lock, redid the apartment, lost two months. Now I have a 30-day notice clause in my contract.',
    'Proprietar, București · Reddit r/Romania, 2026': 'Landlord, Bucharest · Reddit r/Romania, 2026',
    'Subînchiria fără să știu. Am aflat când vecinii m-au sunat. Nu era nimic în contract despre asta.': 'They were subletting without my knowledge. I found out when the neighbors called me. There was nothing in the contract about it.',
    'Proprietar, Timișoara · Grup WhatsApp proprietari, 2025': 'Landlord, Timișoara · WhatsApp landlord group, 2025',
    'Trei chiriași în șase luni. Fiecare plecare = o lună goală + zugrăvit + curățenie. La al treilea am înțeles că problema era la selecție, nu la ghinion.': 'Three tenants in six months. Each departure = one empty month + painting + cleaning. By the third one I understood the problem was in selection, not bad luck.',
    'Proprietar, Iași · Grup Facebook, 2026': 'Landlord, Iași · Facebook group, 2026',
    'Îmi scria la 11 noaptea pentru un bec ars. Am pus în contract că răspund în 24h la solicitări non-urgente. Nu a mai sunat nimeni la ore necivilizate.': 'They texted me at 11 PM about a burnt light bulb. I put in the contract that I respond within 24h to non-urgent requests. No one calls at uncivilized hours anymore.',
    'Proprietar, București · Grup Facebook proprietari, 2025': 'Landlord, Bucharest · Facebook landlord group, 2025',
    'Garanția de o lună nu a acoperit nici jumătate din daune. Acum cer garanție de două luni și fac un inventar detaliat la intrare, cu poze semnate.': 'One month\'s deposit didn\'t cover even half the damage. Now I ask for two months\' deposit and do a detailed inventory at entry, with signed photos.',
    'Proprietar, Cluj · Grup WhatsApp, 2026': 'Landlord, Cluj · WhatsApp group, 2026',

    /* Realitatea-chiriei — system section */
    'Cum răspunde Rent UP': 'How Rent UP responds',
    'Nu vindem liniște. Vindem sistem.': "We don't sell peace of mind. We sell a system.",
    'Contract blindat': 'Bulletproof contract',
    'Clauze clare pentru fiecare situație: neplată, subînchiriere, daune, evacuare. Redactat de juriști, adaptat la proprietatea ta.': 'Clear clauses for every situation: non-payment, subletting, damage, eviction. Drafted by lawyers, adapted to your property.',
    'Selecție riguroasă': 'Rigorous selection',
    'Profil de chiriaș ideal definit înainte de vizionări. Criterii obiective, verificabile. Fără decizii pe bază de instinct.': 'Ideal tenant profile defined before viewings. Objective, verifiable criteria. No instinct-based decisions.',
    'Proces-verbal de predare': 'Handover report',
    'Inventar complet cu fotografii, semnat la intrare și la ieșire. Eliminăm disputele despre „cine a stricat ce".': 'Complete inventory with photographs, signed at entry and exit. We eliminate disputes about "who broke what".',
    'Comunicare structurată': 'Structured communication',
    'Canal unic, timp de răspuns definit, protocol pentru urgențe reale. Nu mai ești la dispoziție 24/7.': 'Single channel, defined response time, protocol for real emergencies. You\'re no longer on call 24/7.',
    'Monitorizare activă': 'Active monitoring',
    'Urmărim plata chiriei, starea proprietății, respectarea contractului. Intervenim înainte să devină problemă.': 'We track rent payment, property condition, contract compliance. We intervene before it becomes a problem.',
    'Rezolvare rapidă': 'Fast resolution',
    'Când apare o situație, avem protocol: pași clari, documente pregătite, acțiune imediată. Nu improvizație.': 'When a situation arises, we have a protocol: clear steps, prepared documents, immediate action. No improvisation.',

    /* Realitatea-chiriei — CTA */
    'Vrei să știi exact ce costă situația ta actuală?': 'Do you want to know exactly what your current situation costs?',
    'Analizăm proprietatea ta, identificăm riscurile reale și îți spunem ce are sens să faci diferit. Fără teorie generală.': 'We analyze your property, identify real risks, and tell you what makes sense to do differently. No generic theory.',
    'Gratuit': 'Free',
    'raport livrat în 72h · fără angajament': 'report delivered in 72h · no commitment',
    'Programează Raportul de Rentabilitate →': 'Schedule the Profitability Report →',
    'Întrebări frecvente': 'Frequently asked questions',

    /* ── STAGING-VIRTUAL PAGE ── */
    'AI-ul îți dă o poză.': 'AI gives you a photo.',
    'Noi îți dăm apartamentul din poză.': 'We give you the apartment from the photo.',
    'Randări + plan real de cumpărat, gândit de arhitecți care știu ce atrage repede un chiriaș bun, nu un algoritm generic. Preț fix 200€, livrare în câteva zile, fără vizită.': 'Renderings + a real shopping plan, designed by architects who know what quickly attracts a good tenant — not a generic algorithm. Fixed price €200, delivered in a few days, no site visit.',
    'Vreau planul meu →': 'I want my plan →',
    '✓ Livrare în câteva zile': '✓ Delivered in a few days',
    '✓ Fără angajament mare': '✓ No large commitment',
    '✓ 200€ se scad din orice pachet mai mare': '✓ €200 deducted from any larger package',
    'Proiect real livrat': 'Real delivered project',
    'Lista de achiziții': 'Shopping list',
    'exemplu': 'example',
    'Nr.': 'No.',
    'Produs': 'Product',
    'Furnizor': 'Supplier',
    'Buc.': 'Qty.',
    'Preț / buc.': 'Price / unit',
    'Total': 'Total',
    'Perne decorative': 'Decorative pillows',
    'Masă de cafea': 'Coffee table',
    'Covor oriental 200x300cm': 'Oriental rug 200x300cm',
    'Total estimat': 'Estimated total',
    'Vrei un plan ca acesta?': 'Want a plan like this?',
    'Trimite pozele pe WhatsApp →': 'Send photos on WhatsApp →',

    /* Staging-virtual — section 2 */
    'De ce AI-ul, singur, te lasă baltă': 'Why AI alone leaves you stranded',
    'Ai încercat deja. Știi exact ce lipsește.': 'You\'ve already tried it. You know exactly what\'s missing.',
    'Generezi o poză frumoasă.': 'You generate a beautiful photo.',
    ' Dar nu poți cumpăra ce e în ea. Furnizorii nu există, dimensiunile nu se potrivesc, bugetul nu e luat în calcul. Rămâi cu o imagine și nimic concret.': ' But you can\'t buy what\'s in it. The suppliers don\'t exist, the dimensions don\'t fit, the budget isn\'t factored in. You\'re left with an image and nothing concrete.',
    'Chiriaș bun vrea mai mult decât o poză frumoasă. Vrea un spațiu care funcționează, e confortabil și arată îngrijit. Asta necesită decizii reale, nu imagini generate.': 'A good tenant wants more than a pretty photo. They want a space that works, is comfortable, and looks well-maintained. That requires real decisions, not generated images.',
    '„Am generat 10 poze, toate arătau bine. Niciuna nu m-a ajutat să știu ce să cumpăr sau de unde."': '"I generated 10 photos, all looked good. None of them helped me know what to buy or from where."',
    'Problemele reale cu AI-ul de staging': 'The real problems with AI staging',
    'Produsele nu există în România': 'Products don\'t exist in Romania',
    'Algoritmul generează mobilă din cataloage internaționale sau inexistente. Tu trebuie să cauți echivalente, dacă există.': 'The algorithm generates furniture from international or non-existent catalogs. You have to search for equivalents, if they exist.',
    'Bugetul nu e calculat': 'Budget is not calculated',
    'O poză frumoasă poate ascunde un cost de 15.000€. Sau poate fi replicată cu 3.000€. AI-ul nu face diferența.': 'A beautiful photo can hide a cost of €15,000. Or it can be replicated for €3,000. AI doesn\'t make that distinction.',
    'Chiriaș-specific lipsă': 'Tenant-specific missing',
    'Un apartament pentru un student arată diferit față de unul pentru un cuplu cu copii. AI-ul generează frumos, fără să știe pentru cine.': 'An apartment for a student looks different from one for a couple with children. AI generates beautifully, without knowing for whom.',

    /* Staging-virtual — section 3 */
    'Ce primești, concret': 'What you receive, concretely',
    'Nu o poză. Un plan pe care chiar îl execuți.': 'Not a photo. A plan you can actually execute.',
    'Randare 3D realistă': '3D realistic rendering',
    'Cum va arăta apartamentul după implementare — lumini, culori, mobilă, textile.': 'How the apartment will look after implementation — lights, colors, furniture, textiles.',
    'Lista completă de achiziții': 'Complete shopping list',
    'Fiecare produs, cu link direct sau furnizor din România, preț și cantitate.': 'Each product, with a direct link or Romanian supplier, price and quantity.',
    'Buget estimat detaliat': 'Detailed estimated budget',
    'Total investiție, împărțit pe categorii. Știi înainte să cheltuiești.': 'Total investment, broken down by category. You know before you spend.',
    'Profil chiriaș recomandat': 'Recommended tenant profile',
    'Cine e cel mai potrivit pentru acest apartament și cum îl atragi.': 'Who is the best fit for this apartment and how to attract them.',
    'Plan de implementare': 'Implementation plan',
    'Ordinea în care faci achizițiile și amenajarea, ca să nu pierzi timp și bani.': 'The order in which you make purchases and arrangements, so you don\'t waste time and money.',

    /* Staging-virtual — section 4 comparison */
    'Comparație directă': 'Direct comparison',
    'Preț': 'Price',
    'Ce primești': 'What you receive',
    'Poți cumpăra exact ce vezi?': 'Can you buy exactly what you see?',
    'Ține cont de bugetul tău real?': 'Does it account for your real budget?',
    'Cine decide ce funcționează': 'Who decides what works',
    'Gândit pentru tipul de chiriaș pe care-l vrei': 'Designed for the type of tenant you want',
    'Algoritm': 'Algorithm',
    'Arhitect cu experiență în chirii': 'Architect with rental experience',
    '200€ fix tot pachetul': '€200 fixed, full package',
    'Da, cu link și furnizor': 'Yes, with link and supplier',
    'Da, calculat în plan': 'Yes, calculated in the plan',
    'Da, adaptat': 'Yes, adapted',

    /* Staging-virtual — section 5 steps */
    'Cum funcționează: 4 pași': 'How it works: 4 steps',
    'Trimiți pozele. Primești planul.': 'You send the photos. You receive the plan.',
    'Trimiți pozele apartamentului': 'You send photos of the apartment',
    'Fotografii din fiecare cameră, din mai multe unghiuri. Nu e nevoie de echipament profesional.': 'Photos from each room, from multiple angles. No professional equipment needed.',
    'Analizăm și configurăm': 'We analyze and configure',
    'Arhitecții noștri analizează spațiul, stilul potrivit și profilul chiriaș ideal pentru proprietatea ta.': 'Our architects analyze the space, the right style, and the ideal tenant profile for your property.',
    'Primești randarea și planul': 'You receive the rendering and the plan',
    'Randare 3D + listă completă de achiziții cu prețuri și furnizori din România.': '3D rendering + complete shopping list with prices and Romanian suppliers.',
    'Implementezi în ritmul tău': 'You implement at your own pace',
    'Cumperi ce vrei, când vrei. Planul e al tău. Noi suntem disponibili pentru întrebări.': 'You buy what you want, when you want. The plan is yours. We\'re available for questions.',

    /* Staging-virtual — section 6 trust */
    'Aceeași expertiză din spatele proiectelor reale': 'The same expertise behind real projects',
    'Staging Virtual, construit pe experiență concretă.': 'Virtual Staging, built on concrete experience.',
    'Nu vindem poze. Vindem rezultate: apartamente care se închiriază rapid, la prețul corect, cu chiriași potriviți. Staging Virtual e serviciul nostru de intrare — același raționament, același standard, la un preț accesibil pentru orice proprietar.': "We don't sell photos. We sell results: apartments that rent quickly, at the right price, with the right tenants. Virtual Staging is our entry-level service — the same reasoning, the same standard, at an accessible price for any landlord.",

    /* Staging-virtual — portfolio grid */
    '2 camere · Floreasca': '2 rooms · Floreasca',
    '+220€/lună chirie': '+€220/month rent',
    'Garsonieră · Vatra Luminoasă': 'Studio · Vatra Luminoasă',
    'Închiriat în 5 zile': 'Rented in 5 days',
    'Proiect RentUP': 'RentUP project',
    'După optimizare': 'After optimization',
    'Vezi cazurile complete în portofoliu →': 'See the full cases in the portfolio →',

    /* Staging-virtual — CTA */
    'Trimite pozele acum,': 'Send your photos now,',
    'primești planul în câteva zile.': 'receive the plan in a few days.',
    'Locuri limitate zilnic.': 'Limited spots daily.',
    'Trimite pe WhatsApp →': 'Send on WhatsApp →',
    'Sau trimite pe email →': 'Or send by email →',

    /* Staging-virtual — quiz modal */
    'Câte camere are apartamentul?': 'How many rooms does the apartment have?',
    '1 cameră': '1 room',
    '2 camere': '2 rooms',
    '3+ camere': '3+ rooms',
    '← Înapoi': '← Back',
    'Care e situația lui acum?': 'What is its current situation?',
    'Gol, nu e închiriat': 'Empty, not rented',
    'Ocupat, vreau să schimb ceva': 'Occupied, I want to change something',
    'Tocmai renovat / cumpărat': 'Just renovated / purchased',
    'Apartamentul tău se califică.': 'Your apartment qualifies.',
    'Lasă-ne un email și te contactăm în 24h cu detalii despre planul tău.': 'Leave us an email and we\'ll contact you within 24h with details about your plan.',
    'Primesc planul →': 'I\'ll receive my plan →',
    'A apărut o eroare. Încearcă din nou.': 'An error occurred. Please try again.',
    'Mulțumim!': 'Thank you!',
    'Te contactăm în 24h cu detalii despre planul tău de staging.': 'We\'ll contact you within 24h with details about your staging plan.',
    'Verifică și folderul Spam dacă nu primești nimic.': 'Also check your Spam folder if you don\'t receive anything.',

    /* ── FAQ PAGE — ANSWER BODIES ── */

    /* 01 — About Rent UP */
    'Rent UP este un studio de design interior specializat exclusiv în optimizarea apartamentelor pentru închiriere. Nu facem design rezidențial general, facem design gândit să atragă chiriaș potrivit, să genereze fotografii bune și să reziste în timp cu costuri minime de întreținere.': 'Rent UP is an interior design studio specialising exclusively in optimising apartments for rental. We don\'t do general residential design — we design with the goal of attracting the right tenant, generating great photos, and lasting over time with minimal maintenance costs.',
    'Pe lângă design, livrăm un sistem complet de administrare (': 'In addition to design, we deliver a complete management system (',
    ') care include documente, contracte, protocoale de selecție chiriaș și ghiduri de gestionare a situațiilor dificile. Toate documentele sunt customizate pentru proprietatea ta.': ') that includes documents, contracts, tenant selection protocols and guides for managing difficult situations. All documents are customised for your property.',
    'Pentru proprietarii care dau sau vor să dea un apartament în chirie și vor să facă asta cu un sistem, nu cu speranța că norocul va fi de partea lor.': 'For landlords who rent or want to rent an apartment and want to do it with a system, not hoping that luck will be on their side.',
    'În special pentru cei care:': 'Especially for those who:',
    'Au avut experiențe negative și nu vor să le repete': 'Have had negative experiences and don\'t want to repeat them',
    'Au apartamentul gol și se tem să înceapă': 'Have an empty apartment and are afraid to start',
    'Vor să înțeleagă dacă investiția în amenajare are sens': 'Want to understand whether investing in furnishing makes sense',
    'Caută un chiriaș bun, nu neapărat chiria cea mai mare': 'Are looking for a good tenant, not necessarily the highest rent',
    'Ne specializăm exclusiv în închirierea clasică, pe termen lung: un singur chiriaș potrivit, care semnează un contract, se mută și rămâne ani de zile. Tot ce livrăm, de la design până la Rental Kit, e construit pentru acest tip de relație stabilă, nu pentru rotația zilnică de oaspeți specifică regimului hotelier.': 'We specialise exclusively in classic long-term rental: one suitable tenant who signs a contract, moves in and stays for years. Everything we deliver — from design to the Rental Kit — is built for this type of stable relationship, not for the daily guest rotation typical of short-term rental.',
    'Nu. Niciun sistem nu poate garanta comportamentul unui om. Ce garantăm este că procesul de selecție, documentație și design': 'No. No system can guarantee a person\'s behaviour. What we guarantee is that the selection process, documentation and design',
    'reduce semnificativ probabilitatea': 'significantly reduces the probability',
    'unui chiriaș problematic, iar dacă ceva merge prost, ai instrumentele legale necesare să te protejezi eficient.': 'of a problematic tenant, and if something goes wrong, you have the legal tools needed to protect yourself effectively.',
    'Diferența față de haos: proprietarii care aplică sistematic un proces de selecție au cu 80-90% mai puține probleme decât cei care selectează după instinct.': 'The difference from chaos: landlords who systematically apply a selection process have 80–90% fewer problems than those who select by instinct.',
    'Nu eliminăm riscul. Îl reducem sistematic. Haosul e garantat, sistemul e opțional.': 'We don\'t eliminate risk. We reduce it systematically. Chaos is guaranteed, the system is optional.',
    'Un anunț cu fotografii profesionale și un apartament coerent filtrează natural. Chiriașul care vede un apartament îngrijit înțelege că proprietarul e serios. Cei care nu se vor comporta corespunzător preferă spații cu standarde mai relaxate.': 'A listing with professional photos and a coherent apartment filters naturally. The tenant who sees a well-kept apartment understands that the landlord is serious. Those who will not behave appropriately prefer spaces with more relaxed standards.',
    'Designul nu e estetică, ci un filtru de selecție.': 'Design is not aesthetics — it\'s a selection filter.',
    'Vizita pentru Raportul de Rentabilitate și fotografiile profesionale le facem în București și zona metropolitană. Proiectele de design (plan, moodboard, randări, centralizatoare) le putem realiza pentru orice locație din România, livrăm digital.': 'The Profitability Report visit and professional photos are done in Bucharest and the metropolitan area. Design projects (plan, moodboard, renders, spreadsheets) can be delivered for any location in Romania — we deliver digitally.',
    'Contactează-ne cu detalii și stabilim dacă și cum putem colabora pentru proprietatea ta.': 'Contact us with details and we\'ll determine whether and how we can collaborate for your property.',

    /* 02 — Raport de Rentabilitate */
    'O vizită la apartament de 1-2 ore în care evaluăm starea actuală, potențialul de chirie și ce ar trebui schimbat pentru a atrage profilul corect de chiriaș.': 'A 1–2 hour visit to the apartment in which we assess the current condition, rental potential, and what should be changed to attract the right tenant profile.',
    'Raportul livrat în 48h de la vizită include:': 'The report delivered within 48h of the visit includes:',
    'Analiza de piață: chiria medie pentru zona și tipul tău de proprietate': 'Market analysis: average rent for your area and property type',
    'Lista de intervenții prioritizate (urgent / recomandat / opțional)': 'Prioritised list of interventions (urgent / recommended / optional)',
    'Estimare buget de implementare (minim + recomandat)': 'Implementation budget estimate (minimum + recommended)',
    'Potențial de chirie: scenariu conservator și optimist': 'Rental potential: conservative and optimistic scenarios',
    'ROI estimat: în câte luni se recuperează investiția': 'Estimated ROI: in how many months the investment is recovered',
    'Recomandare pachet sau concluzia că momentan nu merită investiția': 'Package recommendation or the conclusion that the investment is currently not worth it',
    'Nu. Raportul de Rentabilitate este independent și fără angajament. Primești raportul complet indiferent dacă continui sau nu.': 'No. The Profitability Report is independent and without commitment. You receive the complete report regardless of whether you continue or not.',
    'Da, tocmai atunci e cel mai util. Un apartament în stare bună poate fi listat incorect, fotografiat prost sau prețuit greșit față de potențialul real. Raportul de Rentabilitate îți spune exact cât ești de la plafonul de chirie pe care îl poți obține și ce investiție minimă mai e necesară.': 'Yes, that\'s precisely when it\'s most useful. A good-condition apartment can be listed incorrectly, photographed poorly, or priced wrong relative to its real potential. The Profitability Report tells you exactly how far you are from the rental ceiling you can achieve and what minimum investment is still needed.',
    'E posibil ca Raportul de Rentabilitate să confirme că ești deja la nivel optim și că nu ai nevoie de nicio intervenție suplimentară. Asta e la fel de valoroasă ca o listă lungă de recomandări.': 'It\'s possible that the Profitability Report will confirm you\'re already at optimal level and don\'t need any further intervention. That\'s just as valuable as a long list of recommendations.',

    /* 03 — Pachete & Prețuri */
    'Raport de Rentabilitate (Gratuit)': 'Profitability Report (Free)',
    '— plan de amenajare, moodboard, 1–2 randări per cameră, planșe tehnice pentru mobilier la comandă, buget mobilier cu furnizori, vizite pe șantier. Fără Rental Kit, fără selecție chiriaș. Bun dacă vrei să te muți din apartament și vrei să îl închiriezi cu minimum de implicare în sistem.': '— layout plan, moodboard, 1–2 renders per room, technical drawings for custom furniture, furniture budget with suppliers, site visits. No Rental Kit, no tenant selection. Good if you want to move out of the apartment and rent it with minimum system involvement.',
    '— vizită pe teren, evaluare completă, ROI estimat și recomandare pachet. Primul pas potrivit dacă ești nehotărât.': '— on-site visit, full evaluation, estimated ROI and package recommendation. The right first step if you\'re undecided.',
    '— pentru apartamente cu finisaje bune (faianță, gresie, pereți ok). Nu atingem baia sau bucătăria structural, totul se face din mobilier, textile și iluminat. Include Rental Kit complet. Recuperare estimată: 8–12 luni.': '— for apartments with good finishes (tiles, flooring, walls ok). We don\'t touch the bathroom or kitchen structurally — everything is done through furniture, textiles and lighting. Includes full Rental Kit. Estimated recovery: 8–12 months.',
    '— design complet + 3 vizite pe șantier + Rental Kit Full. Tu coordonezi execuția. Pachetul principal pentru investitori care vor chirie peste media zonei și chiriaș stabil pe termen lung.': '— full design + 3 site visits + Full Rental Kit. You coordinate execution. The main package for investors who want rent above the area average and a stable long-term tenant.',
    '— tot ce include Invest Standard plus: randări complete per cameră, documentație mobilier custom, vizite până la finalizarea implementării, coordonare furnizori și agenți imobiliari. Noi coordonăm execuția.': '— everything in Invest Standard plus: full renders per room, custom furniture documentation, visits through to completion, supplier and estate agent coordination. We coordinate execution.',
    'Simplu: Quick Win = rezultat rapid fără renovare. Invest Standard = investiție completă, tu execuți. Invest Premium = investiție completă, noi executăm.': 'Simple: Quick Win = fast result without renovation. Invest Standard = full investment, you execute. Invest Premium = full investment, we execute.',
    'Nu. Prețul per mp este strict pentru serviciul de design și sistemul RentUP. Mobilierul, materialele și implementarea fizică sunt cumpărate de tine direct de la furnizorii recomandați în centralizatoarele pe care ți le livrăm.': 'No. The price per sqm is strictly for the design service and the RentUP system. Furniture, materials, and physical implementation are purchased by you directly from the suppliers recommended in the spreadsheets we deliver.',
    'Buget orientativ pentru mobilare și implementare:': 'Indicative budget for furnishing and implementation:',
    'Garsonieră: 1.000–4.000€ (în funcție de starea finisajelor existente)': 'Studio: 1,000–4,000€ (depending on the condition of existing finishes)',
    '2 camere: 3.000–8.000€': '2-room apartment: 3,000–8,000€',
    '3 camere: 6.000–12.000€': '3-room apartment: 6,000–12,000€',
    'Minimul se aplică când finisajele existente sunt acceptabile. Raportul de Rentabilitate stabilește exact în ce categorie te afli.': 'The minimum applies when existing finishes are acceptable. The Profitability Report establishes exactly which category you fall into.',
    'Depinde de situația specifică. Un calcul conservator pentru un apartament de 2 camere în București:': 'Depends on the specific situation. A conservative calculation for a 2-room apartment in Bucharest:',
    'Chirie curentă: 500€/lună → după optimizare: 700€/lună': 'Current rent: €500/month → after optimisation: €700/month',
    'Investiție totală estimată (serviciu + mobilare): ~5.650€': 'Total estimated investment (service + furnishing): ~€5,650',
    'ROI direct din chiria extra: ~28 luni': 'Direct ROI from extra rent: ~28 months',
    'Plus economii indirecte (mai puține reparații, luni goale, rotație): +3.000–8.000€ în 5 ani': 'Plus indirect savings (fewer repairs, empty months, turnover): +€3,000–8,000 over 5 years',
    'Raportul de Rentabilitate calculează ROI-ul pentru apartamentul tău specific, nu un număr generic.': 'The Profitability Report calculates the ROI for your specific apartment, not a generic number.',
    'E mai simplu. Dar mai simplu nu înseamnă mai ieftin.': 'It\'s simpler. But simpler doesn\'t mean cheaper.',
    '„A nu face nimic" are și el un cost: invizibil, dar real. Un proprietar fără sistem rulează în medie 3–4 chiriași în 5 ani. Fiecare schimbare înseamnă:': '"Doing nothing" also has a cost: invisible, but real. A landlord without a system goes through an average of 3–4 tenants in 5 years. Each change means:',
    '1–2 luni de chirie pierdută între chiriași': '1–2 months of lost rent between tenants',
    'Reparații și uzură după fiecare plecare: 500–2.000€': 'Repairs and wear after each departure: €500–2,000',
    'Timp și energie pentru vizionări, selecție, probleme': 'Time and energy for viewings, selection, problems',
    'Chirie sub piață pentru că nu știi cât poți cere': 'Below-market rent because you don\'t know how much you can charge',
    'Costul real al lui „nu fac nimic" pe 5 ani:': 'The real cost of "doing nothing" over 5 years:',
    'pentru un apartament obișnuit.': 'for an average apartment.',
    'Dacă investiția se recuperează în 2 ani, asta înseamnă că în anii 3, 4 și 5 câștigi pur, fără să mai faci nimic. Alternativa e să continui să pierzi bani pe care nu îi vezi.': 'If the investment recovers in 2 years, that means in years 3, 4 and 5 you profit purely, without doing anything further. The alternative is to keep losing money you don\'t see.',
    'Raportul de Rentabilitate calculează exact cât costă situația ta actuală față de cea optimizată.': 'The Profitability Report calculates exactly how much your current situation costs compared to the optimised one.',
    'Depinde de cât costă să nu o faci. Un proprietar fără sistem rulează în medie 3–4 chiriași în 5 ani. Fiecare schimbare înseamnă luni goale, reparații și selecție nouă.': 'Depends on how much it costs not to. A landlord without a system goes through an average of 3–4 tenants in 5 years. Each change means empty months, repairs and a new selection process.',
    'Raportul de Rentabilitate calculează exact cât costă situația ta actuală față de situația optimizată. Gratuit, fără angajament.': 'The Profitability Report calculates exactly how much your current situation costs versus the optimised situation. Free, no commitment.',
    'Depinde de pachet: Quick Win 1–2 săptămâni (fără lucrări, doar mobilier și sistem); Design Interior Simplu 2–3 săptămâni; Invest Standard 4–6 săptămâni; Invest Premium 8–12 săptămâni.': 'Depends on the package: Quick Win 1–2 weeks (no works, just furniture and system); Simple Interior Design 2–3 weeks; Invest Standard 4–6 weeks; Invest Premium 8–12 weeks.',
    'Cea mai mare variabilă e viteza de feedback din partea ta și disponibilitatea meșterilor dacă sunt lucrări.': 'The biggest variable is the speed of feedback from you and the availability of contractors if there are works.',
    'Două runde de feedback per etapă majoră, pentru ambele pachete. Rundele sunt incluse în preț.': 'Two feedback rounds per major stage, for both packages. Rounds are included in the price.',
    'O rundă = un set consolidat de observații transmise în scris pentru o etapă specifică. Observațiile transmise fragmentat sau succesiv se consideră runde separate. De la a treia rundă se aplică un cost suplimentar de 50–500€ în funcție de amploarea modificărilor.': 'One round = one consolidated set of written observations for a specific stage. Observations submitted piecemeal or successively count as separate rounds. From the third round onwards, an additional cost of €50–500 applies depending on the scope of changes.',
    'Ce influențează costul:': 'What affects the cost:',
    'Starea actuală a apartamentului: ce trebuie înlocuit vs. ce poate rămâne': 'The current condition of the apartment: what needs replacing vs. what can stay',
    'Calitatea finisajelor și mobilierului dorit': 'The quality of finishes and furniture desired',
    'Dacă există lucrări de zugrăvit sau mici reparații': 'Whether there is painting work or minor repairs',
    'Furnizorii aleși (IKEA vs. producători locali vs. import)': 'Chosen suppliers (IKEA vs. local manufacturers vs. import)',
    'Dacă implementezi singur sau cu meșteri': 'Whether you implement yourself or with contractors',
    'Cum poți reduce costul:': 'How you can reduce the cost:',
    'Implementare etapizată, nu trebuie totul dintr-o dată': 'Phased implementation — not everything at once',
    'Folosești mobilier existent în stare bună. Raportul de Rentabilitate îți spune exact ce merită păstrat': 'Use existing furniture in good condition. The Profitability Report tells you exactly what is worth keeping',
    'Montezi singur ce poți (IKEA-style)': 'Assemble what you can yourself (IKEA-style)',
    'Alegi finisaje din gama medie, nu premium': 'Choose mid-range finishes, not premium',
    'Prioritizezi camerele cele mai vizibile pentru chiriași': 'Prioritise the most visible rooms for tenants',

    /* 04 — Selecția chiriașului */
    'Poți închiria singur. Mulți proprietari o fac. Dar fără un sistem, selecția devine o loterie: nu pentru că ești nepriceput, ci pentru că lipsesc instrumentele: un chestionar structurat care separă candidații serioși de cei care „vedem cum e", criterii clare de decizie, un contract care acoperă situațiile dificile, un protocol pentru ce faci dacă lucrurile merg prost.': 'You can rent on your own. Many landlords do. But without a system, selection becomes a lottery — not because you lack skill, but because the tools are missing: a structured questionnaire that separates serious candidates from those who "let\'s see how it goes", clear decision criteria, a contract that covers difficult situations, a protocol for what to do if things go wrong.',
    'Proprietarii fără sistem schimbă în medie 3–4 chiriași în 5 ani, cu 1–2 luni goale și reparații la fiecare plecare. Nu din ghinion, ci pentru că nu există nicio structură care să prevină asta.': 'Landlords without a system change an average of 3–4 tenants in 5 years, with 1–2 empty months and repairs at each departure. Not from bad luck, but because there is no structure to prevent it.',
    'RentUP nu înlocuiește judecata ta. Îți dă sistemul care o completează, astfel încât decizia de a accepta sau refuza un chiriaș să fie bazată pe criterii, nu pe instinct.': 'RentUP doesn\'t replace your judgement. It gives you the system that completes it, so that the decision to accept or refuse a tenant is based on criteria, not instinct.',
    'Un anunț cu fotografii profesionale și un apartament care arată bine filtrează natural. Chiriașul care vede un apartament îngrijit și estetic înțelege că proprietarul este atent și serios. Cei care nu se vor comporta corespunzător preferă spații mai „relaxate" ca standard.': 'A listing with professional photos and a good-looking apartment filters naturally. The tenant who sees a well-kept and attractive apartment understands that the landlord is attentive and serious. Those who will not behave appropriately prefer spaces with more "relaxed" standards.',
    'Datele din comunitate confirmă: proprietarii cu apartamente renovate și prețuite corect raportează că profilul + prețul elimină 80-90% din chiriașii problematici.': 'Community data confirms: landlords with renovated and correctly priced apartments report that profile + price eliminates 80–90% of problematic tenants.',
    'Designul nu e doar estetică. E filtru de selecție.': 'Design is not just aesthetics. It\'s a selection filter.',
    'Rental Kit-ul este sistemul complet care acoperă tot ce se întâmplă după design, de la primul anunț până la predarea cheilor la final.': 'The Rental Kit is the complete system that covers everything that happens after design, from the first listing to handing over the keys at the end.',
    'Concret, în procesul de selecție și management, primești:': 'Concretely, in the selection and management process, you receive:',
    'Un chestionar structurat pentru evaluarea candidaților': 'A structured questionnaire for evaluating candidates',
    'Selecție pe criterii clare: stabilitate financiară, istoric, stil de viață, comunicare': 'Selection on clear criteria: financial stability, history, lifestyle, communication',
    'Modele de comunicare pentru fiecare etapă: de la primul mesaj până la semnarea contractului': 'Communication templates for every stage: from the first message to signing the contract',
    'Contract personalizat pentru proprietatea ta, cu clauze care te protejează': 'Personalised contract for your property, with clauses that protect you',
    'Protocol pas cu pas pentru situații dificile: neplată, daune, refuz evacuare': 'Step-by-step protocol for difficult situations: non-payment, damage, refusal to vacate',
    'Ghid chiriaș: documentul care construiește relația corect, de la prima zi': 'Tenant guide: the document that builds the relationship correctly, from day one',
    'Rental Kit-ul vine inclus în Quick Win, Invest Standard și Invest Premium. Poate fi achiziționat și separat dacă apartamentul tău e deja amenajat.': 'The Rental Kit is included in Quick Win, Invest Standard and Invest Premium. It can also be purchased separately if your apartment is already furnished.',
    'Nu recomandăm refuzul automat, recomandăm protecție adecvată. Proprietarii care refuză sistematic pierd adesea chiriași serioși și stabili, doar pentru că au animale.': 'We don\'t recommend automatic refusal — we recommend adequate protection. Landlords who systematically refuse often lose serious and stable tenants simply because they have pets.',
    'Cu instrumentele corecte, poți accepta animale în siguranță:': 'With the right tools, you can safely accept pets:',
    'Garanție extinsă: 1+2 în loc de 1+1': 'Extended deposit: 1+2 instead of 1+1',
    'Clauze contractuale specifice pentru animale': 'Contract clauses specific to pets',
    'proces verbal foto detaliat la intrare, pentru a documenta starea exactă': 'detailed photo inspection report at move-in, to document the exact condition',
    'Mențiunea că orice daună cauzată de animal este exclusiv responsabilitatea chiriașului': 'A clause stating that any damage caused by the pet is solely the tenant\'s responsibility',

    /* 06 — Situații dificile */
    'Există un protocol clar pe zile, de la primul reminder la executare silită. Fără să improvizezi.': 'There is a clear day-by-day protocol, from the first reminder to enforcement. No improvisation.',
    'Ziua 1-5 reminder WhatsApp, Ziua 5-15 notificare formală, Ziua 30 titlu executoriu. Modelele complete sunt în Rental Kit.': 'Day 1–5 WhatsApp reminder, Day 5–15 formal notice, Day 30 enforcement title. Complete templates are in the Rental Kit.',
    'Există un protocol clar pentru această situație. De la mediere amiabilă până la evacuare prin executor, fără luni de instanță judecătorească. Depinde de tipul contractului pe care îl ai.': 'There is a clear protocol for this situation. From amicable mediation to eviction by enforcement officer, without months in court. It depends on the type of contract you have.',
    'Ai dreptul să reții din garanție contravaloarea daunelor documentate. Procedura recomandată în contractul standard RentUP (termene contractuale, nu termene legale):': 'You have the right to retain from the deposit the value of documented damage. The recommended procedure in the standard RentUP contract (contractual deadlines, not legal deadlines):',
    'Trimiți notificare scrisă cu descrierea daunelor și suma estimată în 5 zile de la constatare': 'You send a written notice describing the damage and estimated amount within 5 days of discovery',
    'Chiriașul are 10 zile să remedieze sau să conteste': 'The tenant has 10 days to remedy or dispute',
    'Dacă nu remediază, reții suma justificată cu facturi sau devize': 'If they don\'t remedy, you retain the amount justified with invoices or estimates',
    'Fără inventarul semnat la intrare și setul foto cu timestamp, orice reținere poate fi contestată cu succes.': 'Without the signed inventory at move-in and the timestamped photo set, any retention can be successfully disputed.',
    'Documentele de la intrare sunt fundația.': 'The move-in documents are the foundation.',
    'Nu putem garanta un termen specific, depinde de zonă, preț și sezonul anului. Din experiența noastră, un apartament fotografiat profesional și listat corect pe 3 platforme (OLX, Storia, Imobiliare.ro) găsește chiriaș în 1-3 săptămâni în București.': 'We cannot guarantee a specific timeline — it depends on the area, price, and time of year. From our experience, an apartment professionally photographed and correctly listed on 3 platforms (OLX, Storia, Imobiliare.ro) finds a tenant within 1–3 weeks in Bucharest.',
    'Comparativ, un apartament cu fotografii de telefon și anunț slab poate sta neînchiriat 1-3 luni în aceeași zonă și la același preț.': 'In comparison, an apartment with phone photos and a weak listing can sit unrented for 1–3 months in the same area at the same price.',

    /* 07 — Rental Kit */
    'Da. Pachetul Design Interior Simplu include exact asta: plan de amenajare, moodboard per cameră, buget mobilier cu furnizori și vizite pe șantier. Fără selecție chiriaș, fără contract personalizat, fără listare.': 'Yes. The Simple Interior Design package includes exactly that: layout plan, moodboard per room, furniture budget with suppliers and site visits. No tenant selection, no personalised contract, no listing.',
    'Dacă după predare vrei și sistemul de selecție, poți adăuga Rental Kit separat oricând.': 'If after handover you also want the selection system, you can add the Rental Kit separately at any time.',
    'Da. Dacă apartamentul tău e deja amenajat și ai nevoie doar de sistemul de selecție chiriaș, contracte personalizate și protocoale de administrare, Rental Kit-ul poate fi achiziționat separat.': 'Yes. If your apartment is already furnished and you only need the tenant selection system, personalised contracts and management protocols, the Rental Kit can be purchased separately.',
    'Contactează-ne cu detalii despre proprietate și îți facem o ofertă.': 'Contact us with details about the property and we\'ll put together an offer.',
    'Rental Kit-ul este livrat cu drept de utilizare pentru proprietatea contractată. Utilizarea pentru alte proprietăți necesită achiziționarea unui pachet suplimentar.': 'The Rental Kit is delivered with usage rights for the contracted property. Use for other properties requires purchasing an additional package.',
    'Documentele (Ghid proprietar, protocoale, contract) pot fi adaptate pentru alte proprietăți, contactează-ne pentru o ofertă.': 'The documents (Landlord guide, protocols, contract) can be adapted for other properties — contact us for an offer.',

    /* 08 — Pregătirea apartamentului */
    '5 pași, în ordinea corectă:': '5 steps, in the correct order:',
    'Reparații și mentenanță de bază (instalații, electrocasnice, încuietori)': 'Basic repairs and maintenance (plumbing, appliances, locks)',
    'Curățenie profundă (mochete, hote, geamuri, rosturi)': 'Deep cleaning (carpets, extractor fans, windows, grout)',
    'Decluttering și amenajare minimă (staging)': 'Decluttering and minimal styling (staging)',
    'Fotografii bune, făcute ziua, cu lumină naturală': 'Good photos, taken during the day, with natural light',
    'Documentație completă: inventar, proces verbal foto, contract, chestionar de evaluare': 'Complete documentation: inventory, photo inspection report, contract, evaluation questionnaire',
    'Depinde de starea inițială: 0–500€ pentru curățenie profesională și reparații mici, 1.000–4.000€ pentru completări de mobilier, zugrăveală parțială și fotografii profesionale, sau 3.000–12.000€ pentru o amenajare completă cu staging.': 'Depends on the initial condition: €0–500 for professional cleaning and minor repairs; €1,000–4,000 for furniture additions, partial painting and professional photos; or €3,000–12,000 for a complete furnished staging.',
    'Minimum: inventarul proprietății, procesul verbal foto la predare, contractul de închiriere înregistrat și un chestionar de evaluare pentru candidați.': 'Minimum: the property inventory, photo inspection report at handover, the registered tenancy contract and an evaluation questionnaire for candidates.',

    /* FAQ — contact box */
    'Ai avut probleme cu chiriași?': 'Have you had problems with tenants?',
    'Fiecare situație dificilă are o soluție structurată.': 'Every difficult situation has a structured solution.',
    'Neplată, daune, evacuare, rotație frecventă. Vezi cum arată rezolvarea cu un sistem.': 'Non-payment, damage, eviction, frequent turnover. See what resolution looks like with a system.',
    'Probleme & soluții →': 'Problems & solutions →',

    /* FAQ — CTA */
    'Pornește cu un Raport de Rentabilitate.': 'Start with a Profitability Report.',
    'Evaluare completă, gratuită. Afli exact unde ești și ce are sens să faci diferit.': 'Complete, free evaluation. Find out exactly where you stand and what makes sense to do differently.',
    'Realitatea chiriei': 'The reality of renting',
    'Nu ai găsit răspunsul?': 'Didn\'t find the answer?',
    'Scrie-ne sau programează un apel de 15 minute, fără angajament.': 'Write to us or schedule a 15-minute call, no commitment.',
    'Contactează-ne →': 'Contact us →',

    /* ── COMMON / FOOTER ITEMS ── */
    'Servicii': 'Services',
    'Resurse': 'Resources',
    'Design de interior': 'Interior design',
    'Simulator mobilare': 'Furniture simulator',
    'Raport de Rentabilitate': 'Profitability Report',
    '© 2025–2026 Rent UP · Toate drepturile rezervate': '© 2025–2026 Rent UP · All rights reserved',
    '© 2025–2026 Rent UP. Toate drepturile rezervate.': '© 2025–2026 Rent UP. All rights reserved.',
  };

  /* ─── Engine ─────────────────────────────────────────────────────────── */
  var LANG_KEY = 'ru-lang';
  var lang = localStorage.getItem(LANG_KEY) || 'ro';
  var allTextNodes = [];
  var collected = false;

  /* Skip these tags entirely */
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, PRE: 1 };

  function collectNodes(root) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var p = node.parentNode;
          while (p && p !== root) {
            if (SKIP[p.tagName]) return NodeFilter.FILTER_REJECT;
            p = p.parentNode;
          }
          return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      }
    );
    var node;
    while ((node = walker.nextNode())) {
      node._ruOrig = node.textContent;
      allTextNodes.push(node);
    }
    collected = true;
  }

  function applyTranslation(toLang) {
    lang = toLang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'ro';

    allTextNodes.forEach(function (node) {
      if (!node.parentNode) return;
      var orig = node._ruOrig;
      var trimmed = orig.trim();
      if (!trimmed) return;

      if (lang === 'en') {
        var en = T[trimmed];
        if (en !== undefined) {
          var leading  = orig.slice(0, orig.indexOf(trimmed));
          var trailing = orig.slice(orig.indexOf(trimmed) + trimmed.length);
          node.textContent = leading + en + trailing;
        }
      } else {
        node.textContent = orig;
      }
    });

    /* ── Placeholder translations ── */
    var placeholders = {
      'Mesajul tău...': 'Your message…',
      'Numele tău':    'Your name',
      'Email':         'Email',
      'Emailul tău':   'Your email',
      'Număr de telefon (opțional)': 'Phone number (optional)',
      'adresa@ta.ro':  'your@email.com',
    };
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      if (!el._ruPlaceholderOrig) el._ruPlaceholderOrig = el.placeholder;
      el.placeholder = lang === 'en'
        ? (placeholders[el._ruPlaceholderOrig] || el._ruPlaceholderOrig)
        : el._ruPlaceholderOrig;
    });

    /* ── aria-label translations ── */
    var ariaLabels = {
      'Deschide meniul':    'Open menu',
      'Închide meniul':     'Close menu',
      'Înapoi sus':         'Back to top',
      'Scrie-ne pe WhatsApp': 'Write to us on WhatsApp',
      'Închide':            'Close',
    };
    document.querySelectorAll('[aria-label]').forEach(function (el) {
      if (!el._ruAriaOrig) el._ruAriaOrig = el.getAttribute('aria-label');
      el.setAttribute('aria-label', lang === 'en'
        ? (ariaLabels[el._ruAriaOrig] || el._ruAriaOrig)
        : el._ruAriaOrig);
    });

    /* ── data-pre / data-suf on count-anim elements ── */
    var preMap = { 'până la +': 'up to +', 'de la ': 'from ' };
    var sufMap = {};
    document.querySelectorAll('.count-anim[data-pre]').forEach(function (el) {
      if (!el._ruPreOrig) el._ruPreOrig = el.getAttribute('data-pre');
      if (!el._ruSufOrig) el._ruSufOrig = el.getAttribute('data-suf') || '';
      el.setAttribute('data-pre', lang === 'en' ? (preMap[el._ruPreOrig] || el._ruPreOrig) : el._ruPreOrig);
    });

    /* ── Update toggle button ── */
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      btn.textContent = lang === 'en' ? 'RO' : 'EN';
      btn.title = lang === 'en' ? 'Schimbă în română' : 'Switch to English';
    });

    /* ── Re-run calculators (index page) ── */
    patchAndRunCalc();
  }

  /* ─── Calculator output patches ─────────────────────────────────────── */
  function patchAndRunCalc() {
    if (typeof window._origCalc === 'undefined' && typeof window.calc === 'function') {
      window._origCalc = window.calc;
      window.calc = function () {
        window._origCalc.apply(this, arguments);
        if (lang === 'en') translateCalcOutput();
      };
    }
    if (typeof window._origCtCalc === 'undefined' && typeof window.ctCalc === 'function') {
      window._origCtCalc = window.ctCalc;
      window.ctCalc = function () {
        window._origCtCalc.apply(this, arguments);
        if (lang === 'en') translateCtCalcOutput();
      };
    }
    if (lang === 'en') {
      translateCalcOutput();
      translateCtCalcOutput();
    }
  }

  function translateCalcOutput() {
    var yrL = document.getElementById('yr-l');
    if (yrL) {
      var m = yrL.textContent.match(/pe (\d+) ani/);
      if (m) yrL.textContent = 'over ' + m[1] + ' years';
    }
    var rRoi = document.getElementById('r-roi');
    if (rRoi) {
      rRoi.textContent = rRoi.textContent
        .replace('Investiție recuperată în ~', 'Investment recovered in ~')
        .replace(' luni · total ~', ' months · total ~');
    }
    var rTb = document.getElementById('r-tb');
    if (rTb) {
      rTb.innerHTML = rTb.innerHTML
        .replace(/Fără optimizare/g, 'Without optimisation')
        .replace(/Cu optimizare/g, 'With optimisation')
        .replace(/ luni\b/g, ' months');
    }
    /* Re-translate static labels that calc() overwrites */
    var reD = document.getElementById('re-d');
    if (reD) reD.textContent = reD.textContent.replace('/lună', '/month');
    var mpD = document.getElementById('mp-d');
    if (mpD) mpD.textContent = mpD.textContent.replace(' mp', ' sqm');
  }

  function translateCtCalcOutput() {
    var freqLabel = document.getElementById('ct-freq-label');
    if (freqLabel) {
      freqLabel.textContent = freqLabel.textContent
        .replace(/^la /, 'for ')
        .replace(/ schimbare de chiriaș în 5 ani$/, ' tenant change in 5 years')
        .replace(/ schimbări de chiriaș în 5 ani$/, ' tenant changes in 5 years');
    }
    var ctTbl = document.getElementById('ct-tbl');
    if (ctTbl) {
      ctTbl.innerHTML = ctTbl.innerHTML
        .replace(/Chirie pierdută/g, 'Lost rent')
        .replace(/luni goale\)/g, 'empty months)')
        .replace(/Daune și curățenie/g, 'Damages &amp; cleaning')
        .replace(/Timpul tău/g, 'Your time')
        .replace(/ore\)/g, 'hours)');
    }
  }

  /* ─── Public toggle ──────────────────────────────────────────────────── */
  window.toggleLang = function () {
    if (!collected) collectNodes(document.body);
    applyTranslation(lang === 'ro' ? 'en' : 'ro');
  };

  /* ─── Inject button CSS ─────────────────────────────────────────────── */
  (function injectCSS() {
    var s = document.createElement('style');
    s.textContent = [
      '.lang-toggle-btn{font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;',
      'color:#C77936;border:.5px solid #E8D5BC;background:transparent;padding:5px 11px;',
      'border-radius:100px;cursor:pointer;letter-spacing:.04em;',
      'transition:background 150ms ease,border-color 150ms ease;flex-shrink:0}',
      '.lang-toggle-btn:hover{background:#FAF4EB;border-color:#C77936}',
      '.lang-toggle-btn:focus-visible{outline:2px solid #C77936;outline-offset:3px;border-radius:100px}',
      '.lang-mob{display:none!important}',
      '@media(max-width:768px){.lang-mob{display:inline-flex!important;margin-left:auto;margin-right:2px}}',
    ].join('');
    document.head.appendChild(s);
  })();

  /* ─── Initialise on DOM ready ────────────────────────────────────────── */
  function init() {
    collectNodes(document.body);
    patchAndRunCalc();
    if (lang === 'en') applyTranslation('en');
    /* Restore toggle button label if we are already in EN */
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      btn.textContent = lang === 'en' ? 'RO' : 'EN';
      btn.title = lang === 'en' ? 'Schimbă în română' : 'Switch to English';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
