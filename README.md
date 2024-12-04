# Kantine Nettside

Lenke til prosjektet: [GitHub Repository Link](https://github.com/ditt-brukernavn/kantine-nettside)

## Table of Contents

- [Overview](#overview)
- [Task Description](#task-description)
- [Built With / Teknologier Brukt](#built-with)
- [API / Getting the API Key](#api)
- [Features](#features)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Contact](#contact)
- [Resultat](#resultat)
- [Linker](#linker)
- [License](#license)
- [Documentation](#documentation)
- [UU / Design](#uu-design)
- [Dette er fargene jeg brukte](#farger)
- [Ressurser](#ressurser)
- [Future Plans](#future-plans)
- [Hva jeg hadde gjort annerledes](#hva-jeg-hadde-gjort-annerledes)

## Overview

Dette prosjektet er en webapplikasjon for administrasjon og visning av kantinens meny, småretter og varer. Nettsiden lar både brukere se menyen og administratorer legge til varer og menyer via skjemaer som kobles til Firebase.

## Task Description

Lag en nettside for kantinen som inkluderer funksjonalitet for å vise ukens meny, småretter og snacks, samt en administrasjonsseksjon for å legge til varer og menyer. Nettsiden skal være responsiv og inkluderer funksjonalitet som mørk modus.

## Built With / Teknologier Brukt

- **HTML5** for struktur og innhold.
- **CSS3** for stil og layout, med media queries for responsiv design.
- **JavaScript** for interaktivitet og Firebase-integrasjon.
- **Firebase** for datalagring og autentisering.
- **Boxicons** for ikoner.
- **Google Fonts** (Poppins) for typografi.

## API / Getting the API Key

For å bruke Firebase API-en, må du opprette et Firebase-prosjekt på [Firebase Console](https://console.firebase.google.com/). Deretter kan du hente API-nøkkelen og konfigurere Firebase i prosjektet ditt.

1. Gå til Firebase Console.
2. Opprett et nytt prosjekt.
3. Aktivér Firestore-databasen og hent API-nøkkelen.
4. Legg inn nøkkelen i `index.js`-filen.

## Features

- **Dynamisk meny:** Henter ukens meny fra Firebase.
- **Småretter & Snacks:** Vist småretter og snacks.
- **Legg til varer:** Administratorskjema for å legge til varer til kantinemenyen.
- **Innlogging:** Enkel innloggingsside for fremtidig administrasjon.
- **Responsiv design:** Nettsiden fungerer på både desktop og mobile enheter.
- **Dark mode:** Brukeren kan bytte til mørk modus.

## How to Use

1. Klon prosjektet til din lokale maskin:

   ```bash
   git clone https://github.com/ditt-brukernavn/kantine-nettside.git

   ```

2. Åpne prosjektmappen i en nettleser eller bruk en lokal server for å teste nettsiden.

3. Sett opp Firebase-konfigurasjonen i index.js-filen med API-nøkkelen du fikk fra Firebase Console.

## Mappestruktur

projektNettside/
├── css/
│ ├── info.css
│ ├── leggtilvarer.css
│ └── style.css
├── html/
│ ├── leggtilvarer.html
│ ├── smaretter.html
│ └── ukensmeny.html
├── images/
│ └── kantine.jpg
├── js/
│ └── index.js
└── index.html

## Kontakt

For å kontakte meg, eller du har noen spørsmål eller tilbakemeldinger, så er e-posten min [andreasolstad2007@gmail.com]

## Resultat

Nettsiden fungerer som en dynamisk plattform for både administrasjon og visning av kantinens tilbud, med en enkel, responsiv design og integrasjon med Firebase for datalagring.

## Linker

[https://github.com/AndreasOlstad/KantineNettside.git]

## License

Dette prosjektet er lisensiert under MIT-lisensen - se [LICENSE] for mer informasjon.

## Documentation

Dokumentasjonen for dette prosjektet finner du i koden, samt i denne README-filen.

## UU/Design

Designet er laget med tanke på brukervennlighet (UU). Alle elementer skal være tilgjengelige for både mus og tastaturbrukere, og nettsiden er responsiv og tilpasser seg både mobil og desktop.

## Dette er fargene jeg brukte

Primær farge: #5326f8
Bakgrunnsfarge: #fdfdfd (lys) og #333 (mørk modus)
Tekstfarge: #333 (lys) og #fdfdfd (mørk modus)

## Ressurser

Firebase Documentation [https://firebase.google.com/docs]
Boxicons [https://boxicons.com/]

## Future Plans

Legge til mer avansert administrasjon med mulighet for å endre eksisterende varer og menyer.
Integrere autentisering med Firebase for sikre innlogginger.
Implementere brukeranmeldelser for varer og menyer.
Optimalisere ytelsen for store datamengder ved hjelp av Firebase Functions.

## Hva jeg hadde gjort annerledes

Jeg ville implementert mer avansert feilhåndtering, spesielt for innlogging og datahenting.
Jeg kunne ha brukt et mer robust rammeverk som React eller Vue for bedre organisering av JavaScript-koden.
Jeg ville lagt til flere interaktive funksjoner, som f.eks. muligheten til å redigere varer og menyer direkte fra admin-grensesnittet.
