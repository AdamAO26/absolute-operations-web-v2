// Produces a directly openable single HTML file. No package manager or bundler.
import fs from 'node:fs';
let html=fs.readFileSync('source/motor-explorer.template.html','utf8');
const libraries=['three-0.160.0.min.js','gsap-3.12.5.min.js','ScrollTrigger-3.12.5.min.js'];
html=html.replace('__LIBRARIES__',()=>libraries.map(file=>`<script>\n/* Vendored, pinned: ${file}. Original license notices retained below. */\n${fs.readFileSync('source/vendor/'+file,'utf8').replaceAll('</script','<\\/script')}\n</script>`).join('\n'));
html=html.replace('__FALLBACK__','data:image/svg+xml;base64,'+fs.readFileSync('dist/assets/motor-concept.svg').toString('base64'));
html=html.replace('__BRAND__','data:image/svg+xml;base64,'+fs.readFileSync('dist/assets/absolute-operations-brand.svg').toString('base64'));
html=html.replace('</head>','<style>body{margin:0;background:#061628}html{scroll-behavior:auto}</style></head>');
fs.writeFileSync('dist/motor-explorer.html',html);
console.log('Packed standalone motor-explorer.html with embedded pinned libraries and fallback artwork.');
