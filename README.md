# DRIVEON Ökukennsla

Vefur fyrir ökukennsluna DRIVEON í Reykjavík og nágrenni. Verkefnið er Next.js með App Router, TypeScript og Tailwind CSS.

## Keyrsla

```bash
npm install
npm run dev
```

Vefurinn opnast á [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Síður

- `/` Forsíða
- `/okuskirteini` Yfirlit flokka
- `/okuskirteini/b`, `/be`, `/c`, `/ce`, `/d`
- `/namsferlid`
- `/um-okkur`
- `/algengar-spurningar`
- `/hafa-samband`
- `/personuvernd`

## Fyrirspurnarform

Formið sendir ekki tölvupóst sjálfkrafa. Án stillingar svarar þjónninn að skilaboð hafi ekki verið send og gesturinn fær `mailto:`-hlekk og símanúmer.

Til að senda fyrirspurnir áfram skal setja vefkrækju í umhverfisbreytu:

```bash
CONTACT_WEBHOOK_URL=https://example.com/hooks/driveon
```

Þjónninn sendir JSON með `name`, `email`, `phone`, `category`, `message` og `source`.

Settu einnig rétta slóð vefsins svo að veftré, robots og Open Graph vísi á réttan stað:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

## Heimildir

Lagalegur texti byggir á Ísland.is, Samgöngustofu og reglugerð nr. 830/2011, yfirfarinn í október 2026. Þar sem opinberar síður eru ekki samhljóða er athugasemd merkt „Til yfirferðar“. Verð á kennslu DRIVEON er ekki birt.

Myndir eru frá Unsplash og vistaðar í `public/images`.
