export const services = [
  ['Mechanical Design & CAD', 'Precision housings, bearing supports, rotating assemblies, motor mounts, and mechanical interfaces.', 'CAD models, assembly drawings, and interface documentation.'],
  ['Electrical Engineering & Motor Controls', 'BLDC controls, PCB design, sensor integration, firmware, motor characterization, and electronic system architecture.', 'Scoped schematics, firmware, integration notes, or bench test results.'],
  ['Electromechanical System Development', 'Integrate actuators, electronics, sensors, and mechanical packaging for precision motion systems, robotics fixtures, and prototype assemblies.', 'Assembly CAD, interface definitions, and a prototype build plan.'],
  ['Design for Manufacturing', 'Review geometry, materials, tolerances, and inspection needs before releasing a design for CNC machining.', 'Manufacturing drawings, material specifications, and inspection requirements.'],
  ['Thermal Management', 'Design heat paths, enclosures, and mounting interfaces for motor systems, power electronics, and compact assemblies.', 'Enclosure CAD, thermal design notes, and manufacturing drawings.'],
  ['Prototype Manufacturing Support', 'Source prototype parts, coordinate machining and PCB fabrication through external partners, and support component integration.', 'Sourcing and assembly plans with agreed inspection and delivery requirements.'],
];

export const homeCapabilities = `
<section class="home-capabilities" aria-labelledby="home-capabilities-title">
  <div><span class="eyebrow">ADDITIONAL CAPABILITIES</span><h2 id="home-capabilities-title">Engineering &amp; Prototype Development</h2></div>
  <div><p>Alongside our proprietary motor development, Absolute Operations offers select mechanical and electrical engineering services, including precision component design, motor controls, thermal management, and prototype manufacturing support.</p>
  <a class="text-button" href="/engineering-services/">Explore Engineering Services <span aria-hidden="true">→</span></a></div>
</section>`;

export const servicesPage = `
<section class="page-intro engineering-services-intro">
  <a class="breadcrumb mono" href="/">HOME /</a>
  <span class="eyebrow">PROTOTYPE DEVELOPMENT / ST. GEORGE, UTAH</span>
  <h1>Engineering Services</h1>
  <p class="service-lead">Precision engineering supporting advanced motion technology.</p>
  <p>Alongside development of our proprietary slotless axial-flux BLDC platform, we help teams design and prototype advanced electromechanical products, from precision assemblies to motor controls and compact power electronics.</p>
  <div class="actions"><a class="button filled" href="/contact/">Discuss Your Engineering Project <span aria-hidden="true">↗</span></a><a class="text-button" href="/motor-platform/">Explore the Motor Platform <span aria-hidden="true">→</span></a></div>
</section>
<section class="section-light engineering-services">
  <span class="eyebrow">PROJECT SCOPES</span>
  <h2>Our Engineering Capabilities</h2>
  <div class="engineering-service-grid">${services.map(([title,scope,deliverables], index)=>`
    <article><span class="service-number mono">0${index+1} / SERVICE</span><h3>${title.replaceAll('&','&amp;')}</h3><p>${scope}</p><div class="service-deliverables"><strong>Typical deliverables</strong><p>${deliverables}</p></div></article>
`).join('')}</div>
</section>
<section class="engineering-delivery">
  <span class="eyebrow">HOW THE WORK IS DELIVERED</span>
  <h2>From Engineering Concept to Functional Prototype</h2>
  <p>Our services run alongside our motor research and development. Each project starts with a defined scope, deliverables, and review points.</p>
  <div class="split">
    <div><h3>Led by Absolute Operations</h3><p>Mechanical and electrical design, controls, thermal management, integration planning, and manufacturing documentation.</p></div>
    <div><h3>Coordinated through partners</h3><p>Machining, PCB fabrication and assembly, and specialist inspection as needed. We identify partner responsibilities and costs before work begins. Our in-house CNC capability is planned.</p></div>
  </div>
  <div class="service-contact"><h3>Discuss Your Engineering Project</h3><p>Contact us to discuss your technical requirements, schedule, and project scope.</p><a class="button filled" href="/contact/">Contact Absolute Operations <span aria-hidden="true">↗</span></a></div>
</section>`;
