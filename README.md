# Interactive webapp voor Game of Tones met Content Management System

## Inhoudsopgave

- [Beschrijving](#beschrijving)
- [Kenmerken](#kenmerken)
- [Installatie & Gebruik](#installatie)
- [Bronnen](#bronnen)
- [Licentie](#licentie)

## Beschrijving

Dit is de repository voor de Game of Tones Webapp voor sprint 6. Deze sprint itereren we verder op wat we in sprint 5 hebben gemaakt. Zo zijn er nu meerdere onderdelen aanwezig die ontbraken in de vorige sprint. Omdat er veel pagina's zijn hebben we gebruik gemaakt van een CMS (Content Management System) om de pagina's dynamisch in te laden. Game of Tones is een lesmethode Webapp waarmee je zelfstandig muzieklessen kunt volgen op een computer of tablet.

<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

 [Live Versie](https://the-startup-game-of-tones.vercel.app/onboarding)

### Functies van het project

Hieronder staan alle geintegreerde of bedachte functies onder categoriën van prioriteit. Voor deze prioriteiten systeem is de methode [MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method) gebruikt. Deze methode heeft 4 categoriën van prioriteit: Must have, Should have, Could have en Won't have.

#### Must have

- [x] Home navigatie waarmee je de verschillende chapters kan zien.
- [x] Home navigatie waarmee je de verschillende subchapters kan zien van de chapters.
- [x] Styleguide
- [x] Compleet werkende navigatie flow van de outlines van het project; Chapters, subchapter en de 4 lessen van de subchapters.
- [x] Een systeem waarbij de opdrachtgever makkelijk content, afbeeldingen en bestanden kan toevoegen en/of verwijderen.
- [ ] Recurring Chapters (in het hoofdmenu).
- [x] Video component met de optie meerdere videos, shuffle mode, opneem, afspeel en reset.
- [ ] Home navigatie links automatisch vanuit het cms aanmaken.
- [x] 6 verschillende kleur mogelijkheden voor de les content type.

#### Should have

- [x] Home circle animatie ui-laag binnen en buiten.
- [x] Pad van subchapter naar subchapter om progress te weergeven binnen home navigatie.
- [ ] Progress State om de progressie van een gebruiker te weergeven.
- [x] Achtergrond audio visualisatie op home.
- [ ] Inloggen met een account en progressie kunnen opslaan.
- [ ] Spotify API.
- [ ] Hoofdmenu transities (in en uitzoomen concept): https://www.youtube.com/watch?v=mBdTGeLP77A
- [ ] Transities binnen een sub-hoofdstuk moeten niet te afleidend zijn (het moet namelijk makkelijk zijn om te wisselen tussen de verschillende ui-lagen).
- [ ] Bij de onion: maak elk onderdeel als geheel klikbaar (niet alleen het icoontje dat erin staat).

#### Could have

- [x] Content management system.
- [x] Locked to unlocked states of subchapters.
- [x] Locked to unlocked states of chapters.
- [ ] Animaties voor alle unlocks.
- [ ] Per user stored progress en progressable chapters.
- [ ] animatie tussen paden van subchapters binnen home navigatie.
- [ ] Opneemfunctie en bibliotheek 
- [ ] Recurring chapter navigatie on hover, quick swap naar andere recurring chapters.
- [ ] Animaties

#### Won't have

- [ ] Volumes navigatie.
- [ ] Interactive components (jsx?) via cms in de content van een les.
- [ ] Register and Login systeem met het CMS. Met nextjs \_Middleware is dit best makkelijk te realiseren.
- [ ] Betaal mogelijkheid(recurring).

## Kenmerken

Voor dit project heb ik NextJS gebruikt, NextJS is een framework gebouwd op React; React is een open-source, front end, javascript library om makkelijk component based user interface en UI te maken. Met NextJS kan je snel en gemakkelijk hybrid static & server rendering en bijvoorbeeld dynamic routing systemen maken. Om mijn workflow te optimaliseren heb ik TailwindCSS gebruikt dit is een node package die er voor zorgt dat ik niet uit de html of in dit geval JSX-file hoef. Met TailwindCSS hoef je alleen maar classnames toe te voegen en dan compiled die automatisch het minimum css nodig voor de components die die classnames gebruiken. Ook heb ik voor animaties en interactieve element framer-motion gebruikt.

## Installatie & Gebruik

```
# clone de git

# install de node packages
$ npm install

# run development server
$ npm run dev
```

## Bronnen

[Tabler icons](https://tablericons.com/)

[Next docs](https://nextjs.org/)

[Tailwind docs](https://tailwindcss.com/)

[Strapi docs](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html#open-source-contribution)

## Licentie

MIT license
