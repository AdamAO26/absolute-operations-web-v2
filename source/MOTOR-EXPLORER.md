# Motor architecture explorer

Open `dist/motor-explorer.html` directly in a WebGL-enabled browser: it is a single self-contained document with inline CSS, procedural model, library code, and fallback artwork. No network or build is needed to run it.

The Motor Platform page includes the same explorer inline, preserving page-level scroll, sticky canvas, navigation, and the normal content that follows.

## Editing

`motor-explorer.template.html` contains the source. Edit `CONFIG` to adjust part names, labels, assembled axial positions, explosion distances, chapter text and progress, reference specifications, and mobile rendering limits. Units represent 10 mm; the base enclosure target is Ø70 mm and 18 mm axial. Exploded spacing is illustrative.

The front face uses the existing company wordmark. The reference image does not establish a final connector design: the two procedural circular connectors are configurable proposed interfaces.

Repack with `node pack-explorer.mjs`, then regenerate the integrated page with `node build-pages.mjs`. Keep these commands in that order after editing the template or referenced artwork. Pinned UMD libraries are embedded from `source/vendor/`: Three.js 0.160.0, GSAP 3.12.5, and ScrollTrigger 3.12.5. Upstream license notices remain in the vendored code.

## Interaction and accessibility

- Scroll down to disassemble; scroll up to reverse. GSAP ScrollTrigger drives the scrubbed timeline; the canvas stays in a CSS sticky stage.
- Chapter buttons and the range slider offer mouse/touch and keyboard paths through the scene.
- The connector select switches separate power/CAN to a combined connector concept.
- System flow can be switched off independently of the exploded view.
- `prefers-reduced-motion: reduce` shows a static fully exploded view, with the component guide expanded. The same mode can be reviewed with `?motion=reduce` on either page.
- Mobile uses fewer winding turns and geometry segments, pixel ratio capped at 1, chapter copy instead of crowded overlay labels, and an accessible component guide.
- A non-WebGL browser receives a static motor image and expanded component guide.

All internal geometry and flows are explanatory. Final dimensions, materials, motor performance, qualification, and manufacturing-origin claims require engineering and supply-chain validation. Slotless does not mean zero energized torque ripple, and direct drive does not establish zero complete-system hysteresis or infinite angular resolution.

Architecture revision: upper and lower Halbach magnet arrays surround the slotless copper winding ring. Electronics now occupy one populated black annular PCB, including feedback, MCU, CAN FD, inverter, drivers, input protection, and regulation. Flow paths and the isolation boundary are regions on that board. Callout anchors are component-local coordinates projected each frame; dots mark their endpoints.

Visibility update: the electromagnetic reveal tilts early, opens the axial gaps before the Halbach callouts, and offsets the cover. BN-filled encapsulant surrounds the bottom PCB. Power/CAN connector geometry follows the PCB edge. Callouts use brighter lines, endpoint markers, and ordering based on projected anchor positions.

Axis/scroll correction: all groups remain on the same Y axis with no lateral cover displacement. A shared continuous expansion factor runs from 12% through 100% scroll; mechanical layers have uniform final spacing and all geometry keeps its original scale. Both direct-drive and titanium top-plate notes attach to front-cover anchors.
