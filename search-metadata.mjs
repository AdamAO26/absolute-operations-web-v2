import fs from 'node:fs';
const origin='https://absoluteoperations.com';
const descriptions={
 '':'Absolute Operations, LLC is developing American-made, ultra-low-profile slotless BLDC motors and custom power electronics for defense, aerospace, and medical applications.',
 'motor-platform':'Explore Absolute Operations’ slotless direct-drive BLDC motor concept, dual Halbach arrays, integrated power electronics, and ultra-low-profile packaging.',
 'custom-integration':'Custom motor engineering around your application: mechanical packaging, windings, power electronics, sensing, controls, and thermal integration.',
 'specifications':'Review preliminary specifications for Absolute Operations’ slotless BLDC motor and integrated power-electronics development platform.',
 'manufacturing':'Absolute Operations is planning precision motor manufacturing in St. George, Utah, with an approximately eight-week custom prototype turnaround target.',
 'about':'Meet Absolute Operations founders Adam DiMaio and Braden Williams, leading mechanical engineering, electromagnetics, and power electronics development.',
 'contact':'Discuss your motor and power-electronics integration requirements with Absolute Operations, LLC. Prepare an application brief for your development program.',
 'industries':'Slotless direct-drive motor development for defense, aerospace, and medical applications, with custom controls and application-specific integration.'
};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function applySearchMetadata(html,path,pageTitle){
 const canonical=origin+(path?'/'+path+'/':'/');
 const title=path?`${pageTitle} | Absolute Operations, LLC`:'Absolute Operations, LLC | Slotless BLDC Motors';
 const description=descriptions[path]||`Absolute Operations develops slotless BLDC motor concepts and custom power electronics for ${pageTitle.toLowerCase()}.`;
 const organization={'@context':'https://schema.org','@type':'Organization',name:'Absolute Operations, LLC',legalName:'Absolute Operations, LLC',url:origin+'/',logo:origin+'/assets/absolute-operations-brand.svg',description:descriptions[''],slogan:'American Ingenuity. Absolute Outcome.',founder:[{'@type':'Person',name:'Adam DiMaio'},{'@type':'Person',name:'Braden Williams'}]};
 html=html.replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(title)}</title>`).replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(description)}">`);
 return html.replace('</head>',`<link rel="canonical" href="${canonical}">\n<meta property="og:type" content="website"><meta property="og:site_name" content="Absolute Operations, LLC"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}">\n<script type="application/ld+json">${JSON.stringify(organization)}</script>\n</head>`);
}
export function writeSearchFiles(paths){
 const urls=paths.map(path=>`  <url><loc>${origin}${path?'/'+path+'/':'/'}</loc></url>`).join('\n');
 fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
 fs.writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
}
