# Absolute Operations website

Complete local review copy of the current website. Open this folder in VS Code:

`C:\Users\adamn\Desktop\Absolute\absolute-operations-web-v2`

## Preview

Requires Node.js. No dependencies need to be installed.

```sh
node preview-server.mjs
```

Open http://127.0.0.1:4174/ in your browser. Use the server instead of opening HTML files directly so all page and asset paths resolve correctly.

## Edit

- `build-pages.mjs`: navigation, page composition, and most page content.
- `source/founders.html`: founder biographies.
- `source/sections.html`: shared homepage and product sections.
- `dist/style.css` and `dist/pages.css`: responsive layouts, navigation styling, and animations.
- `dist/app.js`: mobile menu and local application-brief download.
- `dist/assets/`: original company logo and motor/manufacturing illustrations.

After changing source content, run `node build-pages.mjs` to regenerate the HTML pages in `dist/`. CSS, JavaScript, and assets are edited directly in `dist/` and preserved by this build.

The website has separate Home, Motor Platform, Custom Integration, Specifications, Industries, Manufacturing, About Us, and Contact pages, plus Defense, Aerospace, and Medical pages.

The existing managed Sites checkout remains in `sites/absolute-motion/`, including its publishing metadata. Root-level files are the local review copy; they do not automatically sync edits back to the hosted site.

The application brief downloads locally and does not submit an inquiry. Phone layouts were reviewed at 320 × 667 and 390 × 844, including navigation, text wrapping, image proportions, and the motor explorer.

## Scroll-driven 3D motor explorer

The Motor Platform page includes a procedural Three.js / GSAP exploded-view explorer. The same experience is available in `dist/motor-explorer.html` as a single self-contained file: open it directly in a WebGL-enabled browser, with no server, network, or build required.

Edit its `CONFIG` object in `source/motor-explorer.template.html` for part labels, assembled positions, explosion spacing, chapters, reference specifications, and mobile rendering limits. Repackage with `node pack-explorer.mjs`, then run `node build-pages.mjs`. See `source/MOTOR-EXPLORER.md` for implementation and accessibility details.

The explorer was checked at desktop and 390 × 844 phone dimensions, including static exploded mode, chapter navigation, connector selection, and system-flow toggle. This is an illustrative architecture, not validated CAD or qualification evidence.

## Updated brand and compact layouts

The supplied rectangular crosshair logo is rendered in site silver on a transparent background by `dist/assets/absolute-operations-brand.svg`. `source/brand-reference.png` preserves the supplied original; `source/brand-reference-web.jpg` is its lighter web encoding. `prepare-brand.mjs` uses `source/vector-brand.mjs` to generate crisp geometric letter paths, a stronger crosshair, and a larger motor engraving, with no raster mask or external font dependency. Updated branding appears in headers, footers, favicon references, motor illustration, and the 3D motor face.

Main-page layouts were checked at 390 × 844 and 320 × 667, with no page-wide horizontal overflow. The specifications table has its own horizontal scroll area. Phone navigation, proportional images, and the motor explorer controls were also reviewed.



Home and Motor Platform now share the same procedural 3D motor through motor-explorer.html?view=hero. The engraving sits above the mounting holes. The former reducer comparison is replaced by a slotless / close-to-zero cogging design-target chapter.
