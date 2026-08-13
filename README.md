# Arredamento Due Torri — Sito web

Sito vetrina di Arredamenti Due Torri s.n.c., realizzato con [Astro](https://astro.build) e pubblicato su [Netlify](https://netlify.com). I contenuti (prodotti, pagine, recensioni, dati aziendali) si modificano dal **pannello di gestione contenuti (CMS)**, senza bisogno di toccare il codice.

- 🇮🇹 / 🇬🇧 sito disponibile in italiano (lingua predefinita) e inglese
- 📦 build statica: nessun database, nessun server da mantenere

---

## 1. Come modificare i contenuti (CMS)

Il sito usa **Decap CMS** con login tramite **Netlify Identity**. È un pannello grafico dove puoi aggiungere/modificare prodotti, pagine, recensioni e dati dell'attività senza scrivere codice.

### Accesso

1. Vai su `https://<il-tuo-dominio>/admin/`
2. Accedi con l'email e la password che ti sono state fornite (o clicca "Forgot password?" se è la prima volta / l'hai persa)
3. Dalla schermata principale trovi le sezioni a sinistra:
   - **Prodotti (Italiano)** / **Products (English)** — catalogo prodotti, una voce per lingua
   - **Pagine (Italiano/English)** — testi di "Chi siamo", "Contatti", "Privacy"
   - **Recensioni** — testimonianze clienti mostrate sul sito
   - **Impostazioni generali** — nome attività, indirizzo, telefono, email, orari, social

### Aggiungere/modificare un prodotto

1. Apri **Prodotti (Italiano)** → **New Prodotto** (o clicca su un prodotto esistente per modificarlo)
2. Compila nome, categoria (scrivi un nome nuovo o riusa uno esistente — usa **esattamente** lo stesso testo, maiuscole comprese, per raggruppare i prodotti nella stessa categoria), prezzo, immagini, caratteristiche tecniche e descrizione
3. Clicca **Publish** in alto a destra

Ricorda di aggiungere/aggiornare lo stesso prodotto anche nella sezione inglese (**Products (English)**) se vuoi che compaia anche nella versione EN del sito.

> Ogni modifica pubblicata dal CMS crea automaticamente un commit su GitHub e avvia un nuovo deploy su Netlify: il sito si aggiorna da solo in 1-2 minuti, senza bisogno di fare nulla di manuale.

### Note importanti

- Le immagini caricate dal CMS finiscono in `public/images/uploads` e vengono ottimizzate automaticamente da Astro.
- Il campo "Prezzo scontato" mostra il prezzo originale barrato con badge sconto: lascialo vuoto per non applicare sconti.
- Nella sezione "Impostazioni generali" trovi i dati di contatto mostrati in tutto il sito (footer, pagina contatti, ecc.): modificare qui aggiorna il sito ovunque.

---

## 2. Gestione utenti CMS (Netlify Identity)

Solo chi ha un account **Netlify Identity** può accedere al pannello `/admin/`. Per invitare una nuova persona (es. un dipendente):

1. Accedi a [app.netlify.com](https://app.netlify.com) con l'account amministratore del sito
2. Vai su **Site configuration → Identity → Invite users**
3. Inserisci l'email della persona: riceverà un invito per impostare la password

Per cambiare la propria password: dal pannello `/admin/`, in alto a destra sull'avatar/nome utente.

---

## 3. Sviluppo locale (per modifiche al codice/design)

Serve solo se vuoi modificare la struttura, il design o aggiungere nuove funzionalità (non per i contenuti, che si gestiscono dal CMS).

### Requisiti

- [Node.js](https://nodejs.org) versione 22.12 o superiore
- Git

### Comandi

```bash
# installa le dipendenze (solo la prima volta, o quando cambia package.json)
npm install

# avvia il server di sviluppo su http://localhost:4321
npm run dev

# genera la build di produzione in ./dist
npm run build

# anteprima locale della build di produzione
npm run preview
```

### Struttura del progetto

```
/
├── public/               # asset statici (immagini, pannello /admin)
│   └── admin/             # configurazione Decap CMS
├── src/
│   ├── content/           # contenuti gestiti dal CMS (prodotti, pagine, recensioni, impostazioni)
│   ├── components/        # componenti riutilizzabili
│   ├── layouts/           # layout di pagina
│   ├── pages/              # rotte del sito (IT in radice, EN sotto /en)
│   └── i18n/               # stringhe di traduzione
└── package.json
```

- Ogni file in `src/pages/` diventa una pagina del sito; le rotte inglesi stanno nella cartella `src/pages/en/`.
- I contenuti modificabili dal CMS non vanno editati a mano nei file: usa sempre il pannello `/admin/` per evitare di rompere il formato che il CMS si aspetta.

---

## 4. Deploy e hosting

Il sito è ospitato su **Netlify**, collegato al repository GitHub del progetto:

- **Ogni push sul branch `main`** (fatto da te via Git, oppure automaticamente da una pubblicazione dal CMS) avvia una nuova build e un nuovo deploy
- La build viene eseguita con `npm run build`, pubblicando la cartella `dist/`
- Puoi controllare lo stato dei deploy e i log da [app.netlify.com](https://app.netlify.com), sezione **Deploys** del sito

Non serve nessuna configurazione server: è un sito statico.

---

## 5. Bisogno di aiuto?

Per modifiche di codice, design o nuove funzionalità che vanno oltre la gestione contenuti, contatta lo sviluppatore del sito.
