export const services = [
  {
    title: 'Motor and actuator mechanical design',
    scope: 'Bearing housings, motor mounts, rotor interfaces, thermal housings, and mechanical assemblies designed around your package and interfaces.',
    deliverables: 'CAD models, interface drawings, and an assembly design review.',
  },
  {
    title: 'Electronics enclosure and thermal engineering',
    scope: 'PCB mounting, connector access, enclosure layout, heat paths, and provisions for shielding and serviceability.',
    deliverables: 'Enclosure CAD, thermal design notes, and manufacturing drawings.',
  },
  {
    title: 'Robotics fixtures and prototype assemblies',
    scope: 'Design for positioning fixtures, grippers, mounts, and prototype actuator assemblies. Fabrication can be coordinated through partners.',
    deliverables: 'Fixture or assembly drawings, a parts list, and an agreed prototype build plan.',
  },
  {
    title: 'BLDC motor controls and PCB development',
    scope: 'Scoped controller and firmware design, motor characterization, electrical prototype support, and integration with the host system.',
    deliverables: 'A defined package of schematics, firmware, integration notes, or bench test results.',
  },
  {
    title: 'Design for manufacturing and prototype sourcing',
    scope: 'Review part geometry, materials, tolerances, and inspection needs. Prepare drawings for quote and coordinate machining, inspection, or delivery through partners as agreed.',
    deliverables: 'Drawings suitable for quoting, a sourcing plan, and agreed inspection requirements.',
  },
];

export const servicesPage = `
<section class="page-intro engineering-services-intro">
  <a class="breadcrumb mono" href="/">HOME /</a>
  <span class="eyebrow">ENGINEERING SERVICES / ST. GEORGE, UTAH</span>
  <h1>Engineering &amp; Prototype Development Services</h1>
  <p>Get mechanical design, electronics, and prototype support from the team developing the Absolute Operations slotless BLDC motor platform. Start with a focused engineering project or bring us an assembly that needs mechanical and electrical integration.</p>
  <div class="actions"><a class="button filled" href="/contact/">Discuss Your Engineering Project <span aria-hidden="true">↗</span></a><a class="text-button" href="/motor-platform/">Explore the Motor Platform <span aria-hidden="true">→</span></a></div>
</section>
<section class="section-light engineering-services">
  <div class="section-head"><span class="eyebrow">PROJECT SCOPES</span></div>
  <h2>Bring us a problem or a design ready for review.</h2>
  <div class="engineering-service-grid">${services.map(({title,scope,deliverables}, index)=>`
    <article><span class="mono">0${index+1} / SERVICE</span><h3>${title}</h3><p>${scope}</p><p><strong>Typical deliverables:</strong> ${deliverables}</p></article>
  `).join('')}</div>
</section>
<section class="engineering-delivery">
  <span class="eyebrow">HOW THE WORK IS DELIVERED</span>
  <div class="split">
    <div><h2>Engineering led by our team.</h2><p>We scope and lead mechanical and electrical design, controls, thermal packaging, and manufacturing documentation.</p></div>
    <div><h2>Fabrication coordinated with partners.</h2><p>When a project calls for machining, PCB fabrication or assembly, or specialist inspection, the quote identifies the partner work and who is responsible for delivery. Our own precision CNC capability is planned.</p></div>
  </div>
  <p>Each quote defines the deliverables, schedule, review points, and partner costs before work begins.</p>
  <a class="button filled" href="/contact/">Discuss Your Engineering Project <span aria-hidden="true">↗</span></a>
</section>`;
