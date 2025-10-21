Chas Advance – Web Dashboard

Syfte:
En webbaserad dashboard för att visualisera och övervaka klimatkontrollerade transporter.
Gränssnittet används för att se realtidsdata om paket, temperatur, luftfuktighet och leveransstatus.

Arkitektur i korthet
React + TypeScript + Redux Toolkit + React Query
→ förutsägbar global state-hantering, snabb datacaching och enkel anslutning mot backend-API.
UI (React Components)
   ↓
Redux Toolkit (auth, packages, dashboard data)
   ↓
React Query (API requests & cache)
   ↓
API Layer (mock → real endpoints)


Under utveckling används mockade JSON-data för att simulera API-svar.
Vid byte till riktiga endpoints ersätts endast funktionerna i /services/api.service.ts.

// services/api.service.ts
export async function getPackages() { return mockData.packages; }
export async function getPackageById(id: string) { /* ... */ }

UI behöver inte ändras när API:t byts ut.



Login-sidan

Enkel vy med autentisering via Redux.

Fokuserar på användarflödet in till dashboarden.

Mörk, minimalistisk design.


Dashboard-sidan

Dynamiska kort (t.ex. temperatur, luftfuktighet).

Responsivt grid (auto-fit, minmax).

Sidebar för navigering mellan vyer.

Fast sponsor-footer längst ner.



Utveckling

Kör igång lokalt

npm install
npm run dev


Bygg för produktion

npm run build