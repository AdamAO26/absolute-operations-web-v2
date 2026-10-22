import fs from 'node:fs';
// Filled geometric letter paths stay sharp without fonts or raster masks.
const g={
A:'M0 100 36 0H64L100 100H75L66 74H34L25 100ZM42 53H58L50 29Z',
B:'M0 0H77L94 15V40L84 49 98 61V84L80 100H0ZM23 20V39H68V20ZM23 59V80H72V59Z',
S:'M18 0H82L100 18V31H76V21H24V39H82L100 57V82L82 100H18L0 82V69H24V79H76V60H18L0 42V18Z',
O:'M18 0H82L100 18V82L82 100H18L0 82V18ZM24 22V78H76V22Z',
L:'M0 0H25V77H100V100H0Z',U:'M0 0H25V77H75V0H100V82L82 100H18L0 82Z',
T:'M0 0H100V23H63V100H37V23H0Z',E:'M0 0H100V22H25V39H88V60H25V78H100V100H0Z',
P:'M0 0H80L100 20V48L80 68H25V100H0ZM25 22V46H75V22Z',
R:'M0 0H80L100 20V48L82 66 105 100H75L54 68H25V100H0ZM25 22V46H75V22Z',
I:'M0 0H27V100H0Z',N:'M0 100V0H25L75 61V0H100V100H75L25 39V100Z',
C:'M18 0H82L100 18V34H75V23H25V77H75V66H100V82L82 100H18L0 82V18Z',
',':'M0 76H24V100L10 119H0L8 100H0Z','.':'M0 76H24V100H0Z',
'2':'M0 18 18 0H82L100 18V43L27 78H100V100H0V74L76 37V22H24V33H0Z',
'0':'M18 0H82L100 18V82L82 100H18L0 82V18ZM25 22V78H75V22Z',
'6':'M18 0H88V22H25V40H82L100 58V82L82 100H18L0 82V18ZM25 61V78H75V61Z'};
const widths={I:27,',':24,'.':24,' ':45};
function word(text,x,y,w,h,spacing=15){let offset=0;const units=[...text].reduce((n,c)=>n+(widths[c]??100)+spacing,0)-spacing;const paths=[...text].map(c=>{const p=g[c]?`<path transform="translate(${offset} 0)" d="${g[c]}"/>`:'';offset+=(widths[c]??100)+spacing;return p;}).join('');return `<g transform="translate(${x} ${y}) scale(${w/units} ${h/100})" fill-rule="evenodd">${paths}</g>`;}
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 450" role="img" aria-label="Absolute Operations, LLC — EST. 2026"><g fill="#dbe3e9">${word('ABSOLUTE',55,145,970,110,16)}${word('OPERATIONS, LLC',150,294,780,42,38)}${word('EST. 2026',392,385,296,29,36)}</g><g fill="none" stroke="#dbe3e9" stroke-width="8"><path d="M468 82H8V442H1072V82H612"/><circle cx="540" cy="65" r="43"/><circle cx="540" cy="65" r="9"/><path d="M540 0V56M540 74V130M475 65H531M549 65H605"/></g></svg>`;
fs.writeFileSync('dist/assets/absolute-operations-brand.svg',svg);
let motor=fs.readFileSync('dist/assets/motor-concept.svg','utf8');
motor=motor.replace(/href="data:image\/svg\+xml;base64,[^"]+"/,()=>`href="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}"`);
motor=motor.replace(/<image x="270" y="118" width="180" height="80"/,'<image x="250" y="108" width="220" height="92"');
fs.writeFileSync('dist/assets/motor-concept.svg',motor);
