// Copy for the /partners/ section, the only bilingual part of the site.
// Spanish is the default because the pitch is aimed at Spanish MSPs and at
// the Kit Digital / Kit Consulting channel; English exists for the rest.
// Numbers are interpolated from pricing.ts here so the components stay dumb.

import { entry, recurring, eur, partnerDiscountPct } from './pricing';

export type Lang = 'es' | 'en';

export const PARTNERS_PATH: Record<Lang, string> = {
  es: '/partners/',
  en: '/partners/en/',
};

// Section anchors, so the English page does not carry Spanish fragments.
export const ANCHORS: Record<Lang, { how: string; sell: string }> = {
  es: { how: 'como-funciona', sell: 'servicios' },
  en: { how: 'how-it-works', sell: 'services' },
};

// Shown in the language switch and in the hreflang tags.
export const LANG_NAME: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

export type PartnersCopy = {
  meta: { title: string; description: string };
  hero: { h1: string; lede: string; ctaPrimary: string; ctaSecondary: string };
  audience: { heading: string; rows: [string, string][]; close: string };
  how: { heading: string; steps: [string, string][]; terms: string };
  sell: {
    heading: string;
    lede: string;
    thService: string;
    thPrice: string;
    fromLabel: string;
    customLabel: string;
    discount: string;
    servicesLink: string;
    entry: string;
    recurring: string;
  };
  kitDigital: { heading: string; body: string[]; note: string };
  kitConsulting: { heading: string; body: string[] };
  faq: { heading: string; items: [string, string][] };
  closing: { kicker: string; heading: string; body: string; cta: string; mailSubject: string };
};

const es: PartnersCopy = {
  meta: {
    title: 'Partners: pentesting en marca blanca para MSPs y consultoras — REDOPS Security',
    description:
      'Ofrece pentesting y red team a tus clientes bajo tu marca. Tú vendes y gestionas la relación, REDOPS ejecuta. Para MSPs, consultoras IT, agentes digitalizadores y asesores del Kit Consulting.',
  },
  hero: {
    h1: 'Pentesting en marca blanca para tus clientes.',
    lede: 'Tú tienes la relación con el cliente y le facturas cada mes. Nosotros tenemos el equipo ofensivo. Tú vendes el pentest bajo tu marca, nosotros lo ejecutamos, el informe lleva tu logo y el cliente sigue siendo tuyo.',
    ctaPrimary: 'Hablemos 30 minutos',
    ctaSecondary: 'Cómo funciona',
  },
  audience: {
    heading: 'Para quién es.',
    rows: [
      ['MSPs y proveedores de IT gestionado', 'Administras el firewall, el Active Directory o el Microsoft 365 de tus clientes.'],
      ['Consultoras e integradores', 'Vendes proyectos de infraestructura, cloud o desarrollo, y te llegan preguntas de seguridad que hoy derivas fuera.'],
      ['Agentes digitalizadores del Kit Digital', 'Tienes cartera en las soluciones de Ciberseguridad, Comunicaciones seguras o Puesto de trabajo seguro.'],
      ['Asesores digitales del Kit Consulting', 'Entregas el Servicio de Asesoramiento en Ciberseguridad.'],
    ],
    close: 'El argumento no es la comisión. Es que si a tu cliente le van a encontrar una crítica, es mejor que se la encuentres tú antes que un tercero.',
  },
  how: {
    heading: 'Cómo funciona.',
    steps: [
      ['Nos pasas la oportunidad', 'Tú detectas la necesidad y nos la cuentas. Una llamada de treinta minutos entre los tres, o solo contigo si prefieres que no aparezcamos todavía, para cerrar el alcance.'],
      ['Propuesta a precio de partner', 'Te pasamos el presupuesto con la tarifa de partner. Tú se lo presentas al cliente con tu precio y tu marca. Nosotros no hablamos de precios con tu cliente.'],
      ['Autorización de pruebas', 'El cliente final firma la autorización. En ella figura REDOPS Security Ltd. como ejecutor técnico, aunque el informe y la relación comercial sean tuyos. Es obligatorio. No se lanza nada contra sistemas de terceros sin autorización escrita que nombre a quien ejecuta.'],
      ['Ejecución', 'Aviso el mismo día de cualquier hallazgo crítico y canal directo contigo durante todo el trabajo, no un buzón de tickets.'],
      ['Entrega', 'Informe con tu marca y sesión de explicación técnica. La das tú, o la damos nosotros presentándonos como tu equipo de seguridad ofensiva. Retest gratuito de los hallazgos High y Critical a treinta días, igual que en cualquier trabajo nuestro.'],
    ],
    terms:
      'NDA mutuo antes de cualquier detalle técnico. Cláusula de no puenteo en las dos direcciones: nosotros no contactamos a tu cliente para venderle nada, tú no subcontratas el mismo trabajo a otro usando nuestro informe. Y nos reservamos el derecho a rechazar alcances que no podamos ejecutar con calidad. Preferimos decirte que no antes de que se lo prometas al cliente.',
  },
  sell: {
    heading: 'Qué puedes vender.',
    lede: 'El catálogo es el mismo que está publicado, sin versión recortada para partners. Aquí solo va la tarifa de partida.',
    thService: 'Servicio',
    thPrice: 'Tarifa publicada',
    fromLabel: 'desde',
    customLabel: 'a medida',
    discount: `Sobre esa tarifa aplicamos un ${partnerDiscountPct}% de descuento de partner. Lo que le cobres tú a tu cliente lo decides tú, y no lo preguntamos. El desglose de alcance, días y entregables de cada servicio está en `,
    servicesLink: 'servicios y precios',
    entry: `Para abrir la conversación con un cliente que nunca ha hecho un pentest, empieza por el ${entry.name}: ${entry.days} días sobre su perímetro externo, sin explotación, con una lista priorizada de lo que tiene expuesto. Es barato de vender y suele ser lo que destapa el proyecto grande.`,
    recurring: `Si vendes mantenimiento mensual, los planes ${recurring[0].name} y ${recurring[1].name}, a ${eur(recurring[0].monthly)} y ${eur(recurring[1].monthly)} al mes, se integran en tu cuota sin que tengas que montar nada. La monitorización y el informe mensual corren por nuestra cuenta.`,
  },
  kitDigital: {
    heading: 'Si eres agente digitalizador del Kit Digital.',
    body: [
      'Primero lo obvio: el plazo de solicitudes del Kit Digital se cerró el 31 de octubre de 2025, con las dos últimas convocatorias que quedaban abiertas. De aquí en adelante el programa solo es ejecutar y justificar bonos ya concedidos.',
      'Y lo segundo: el pentesting nunca ha sido una solución subvencionable del programa. No lo vendemos como si lo fuera y no te vamos a ayudar a presentarlo así.',
      `La oportunidad está en tu cartera, no en el bono. A los clientes a los que instalaste antivirus, EDR, firewall o comunicaciones seguras les queda una pregunta sin responder, y es si eso funciona. Un ${entry.name} o un pentest externo bajo tu marca es la respuesta. Servicio no subvencionado, a precio de mercado, vendido a un cliente que ya confía en ti.`,
    ],
    note: 'Filtro claro, para no hacerte perder la llamada: esto tiene sentido con clientes de cincuenta empleados en adelante y una relación de mantenimiento continuada. Si tu cartera es de microempresas con una web y un CRM, dilo en la llamada y te decimos si merece la pena.',
  },
  kitConsulting: {
    heading: 'Si eres asesor digital del Kit Consulting.',
    body: [
      'Conviene aclarar el estado del programa antes que nada. El Kit Consulting tuvo una única convocatoria, cerrada el 31 de marzo de 2025, y el último plazo para presentar acuerdos de prestación de servicios venció el 31 de mayo de 2026. No admite solicitudes nuevas. Igual que el Kit Digital, lo que queda es ejecución y justificación.',
      'El bono iba dirigido a empresas de 10 a 249 empleados, con importes de 12.000, 18.000 y 24.000 euros según el tramo, y entre sus categorías está el Servicio de Asesoramiento en Ciberseguridad, en sus tres niveles: básico, avanzado y preparación para certificación.',
      'Muchos asesores entregan ese servicio como un diagnóstico de escritorio: cuestionarios, políticas y un plan de acción a tres años. Un pentest externo real dentro del entregable convierte el asesoramiento en algo que el cliente puede enseñar a su dirección y a sus auditores. Nosotros ejecutamos la parte técnica en marca blanca y tú la integras en tu informe. Tu cliente ve un único proveedor, que eres tú.',
      'El perfil de empresa al que apuntaban estos bonos, mediana, con infraestructura propia, Active Directory y servicios expuestos a internet, es exactamente el que mejor aprovecha un pentest. Esa cartera sigue ahí aunque el bono ya esté justificado, y el trabajo se vende igual, a precio de mercado.',
    ],
  },
  faq: {
    heading: 'Preguntas frecuentes.',
    items: [
      ['¿El informe lleva mi marca o la vuestra?', 'La tuya. Nuestra referencia aparece solo en la autorización de pruebas que firma el cliente y en el contrato entre tú y REDOPS.'],
      ['¿Podéis hablar con mi cliente?', 'Solo en las sesiones técnicas que organices tú, y presentados como tu equipo. Nunca para vender.'],
      ['¿Quién factura a quién?', 'REDOPS te factura a ti, a precio de partner. Tú facturas a tu cliente lo que decidas. Nosotros no vemos esa cifra.'],
      ['¿Qué pasa si el cliente quiere contrataros directamente después?', 'Le remitimos a ti. Está escrito en el contrato de partner y va en las dos direcciones.'],
      ['¿Cubrís responsabilidad civil sobre el trabajo entregado bajo mi marca?', 'La autorización de pruebas y el contrato de partner definen quién responde de qué, y eso se revisa en la llamada con los dos contratos delante antes de firmar nada.'],
      ['¿Y si el alcance que ha vendido mi comercial no es realista?', 'Te lo decimos antes de firmar, no a mitad del trabajo. Y buscamos juntos qué sí se puede hacer con ese presupuesto.'],
    ],
  },
  closing: {
    kicker: 'Primer trabajo de partner',
    heading: 'Empieza por un cliente real tuyo.',
    body: `Un ${entry.name} sobre el perímetro de uno de tus clientes, con el ${partnerDiscountPct}% de partner sobre los ${eur(entry.price)} publicados. Ves el informe con tu marca, se lo enseñas al cliente, y decides después si quieres que esto sea un canal. No hay mínimo de volumen ni exclusividad que firmar antes.`,
    cta: 'Hablemos 30 minutos',
    mailSubject: 'Programa%20de%20partners',
  },
};

const en: PartnersCopy = {
  meta: {
    title: 'Partners: white-label pentesting for MSPs and consultancies — REDOPS Security',
    description:
      'Offer pentesting and red teaming to your clients under your own brand. You sell and own the relationship, REDOPS executes. For MSPs, IT consultancies, and Spanish Kit Digital and Kit Consulting advisors.',
  },
  hero: {
    h1: 'White-label pentesting for your clients.',
    lede: 'You own the client relationship and you invoice them every month. We have the offensive team. You sell the pentest under your brand, we execute it, the report carries your logo, and the client stays yours.',
    ctaPrimary: 'Book 30 minutes',
    ctaSecondary: 'How it works',
  },
  audience: {
    heading: 'Who this is for.',
    rows: [
      ['MSPs and managed IT providers', 'You run the firewall, the Active Directory or the Microsoft 365 tenant for your clients.'],
      ['Consultancies and integrators', 'You sell infrastructure, cloud or development projects, and the security questions that come back get referred out.'],
      ['Kit Digital agentes digitalizadores', 'You have a book of clients on the Ciberseguridad, Comunicaciones seguras or Puesto de trabajo seguro solutions.'],
      ['Kit Consulting advisors', 'You deliver the Servicio de Asesoramiento en Ciberseguridad.'],
    ],
    close: 'The argument is not the commission. It is that if someone is going to find a Critical on your client, better that it is you and not a third party.',
  },
  how: {
    heading: 'How it works.',
    steps: [
      ['You bring us the opportunity', 'You spot the need and tell us about it. Thirty minutes with the three of us, or with you alone if you would rather we stayed out of sight for now, to settle the scope.'],
      ['Proposal at partner price', 'We send you the quote at the partner rate. You present it to your client with your price and your brand. We do not discuss price with your client.'],
      ['Testing authorization', 'The end client signs the authorization. It names REDOPS Security Ltd. as the technical executor, even though the report and the commercial relationship are yours. This part is not optional. Nothing is fired at a third party without written authorization naming whoever runs it.'],
      ['Execution', 'Same-day notice of any critical finding, and a direct channel to the operator for the whole engagement, not a ticket queue.'],
      ['Delivery', 'Report under your brand, and a technical walkthrough session. You run it, or we run it introduced as your offensive security team. Free retest of High and Critical findings within thirty days, same as on any other job of ours.'],
    ],
    terms:
      'Mutual NDA before any technical detail. Non-circumvention in both directions: we do not approach your client to sell them anything, and you do not subcontract the same work to someone else off the back of our report. We also reserve the right to turn down scopes we cannot execute well. We would rather tell you no before you promise it to the client.',
  },
  sell: {
    heading: 'What you can sell.',
    lede: 'The catalog is the one already published on the site, with no cut-down partner edition. Only the starting rate is listed here.',
    thService: 'Service',
    thPrice: 'Published rate',
    fromLabel: 'from',
    customLabel: 'after scoping',
    discount: `Partner price is ${partnerDiscountPct}% off that published rate. What you charge your client is yours to decide, and we do not ask. Scope, days and deliverables for each service are broken down in `,
    servicesLink: 'services and pricing',
    entry: `To open the security conversation with a client who has never had a pentest, start with the ${entry.name}: ${entry.days} days on their external perimeter, validation only, ending in a prioritized list of what is exposed. It is cheap to sell and it is usually what uncovers the larger project.`,
    recurring: `If you sell monthly maintenance, ${recurring[0].name} and ${recurring[1].name}, at ${eur(recurring[0].monthly)} and ${eur(recurring[1].monthly)} a month, fold into your fee without you having to build anything. The monitoring and the monthly report are on us.`,
  },
  kitDigital: {
    heading: 'If you are a Kit Digital agente digitalizador.',
    body: [
      'The obvious part first: applications for Kit Digital closed on 31 October 2025, with the last two calls that were still open. From here the program is only about executing and justifying grants already awarded.',
      'The second part: pentesting has never been a fundable solution under the program. We do not sell it as though it were, and we will not help you present it that way.',
      `The opportunity is your book of clients, not the grant. The clients you installed antivirus, EDR, firewall or secure communications for are left with one unanswered question, which is whether any of it works. An ${entry.name} or an external pentest under your brand is the answer. Unsubsidized service, at market price, sold to a client who already trusts you.`,
    ],
    note: 'A clear filter, so the call is not wasted: this makes sense with clients of fifty employees and up and an ongoing maintenance relationship. If your book is micro-businesses with a website and a CRM, say so on the call and we will tell you whether it is worth it.',
  },
  kitConsulting: {
    heading: 'If you are a Kit Consulting advisor.',
    body: [
      'The state of the program first. Kit Consulting ran a single call, closed on 31 March 2025, and the final deadline to submit service agreements expired on 31 May 2026. It takes no new applications. As with Kit Digital, what is left is execution and justification.',
      'The grant targeted companies of 10 to 249 employees, at 12,000, 18,000 and 24,000 euros depending on the bracket, and one of its categories is the Servicio de Asesoramiento en Ciberseguridad, in three levels: basic, advanced, and certification readiness.',
      'Plenty of advisors deliver that service as a desk exercise: questionnaires, policies and a three-year action plan. A real external pentest inside the deliverable turns the advisory into something the client can show their board and their auditors. We run the technical part white-label and you fold it into your advisory report. Your client sees a single supplier, which is you.',
      'The company profile these grants aimed at, mid-sized, with its own infrastructure, Active Directory and internet-facing services, is exactly the one that gets the most out of a pentest. That book of clients is still there once the grant is justified, and the work sells anyway, at market price.',
    ],
  },
  faq: {
    heading: 'Common questions.',
    items: [
      ['Does the report carry my brand or yours?', 'Yours. Our name appears only on the testing authorization the client signs, and in the contract between you and REDOPS.'],
      ['Can you talk to my client?', 'Only in the technical sessions you set up, and introduced as your team. Never to sell.'],
      ['Who invoices whom?', 'REDOPS invoices you, at partner price. You invoice your client whatever you decide. We never see that figure.'],
      ['What if the client wants to hire you directly afterwards?', 'We send them back to you. It is written into the partner contract and it runs both ways.'],
      ['Do you carry liability cover for work delivered under my brand?', 'The testing authorization and the partner contract set out who answers for what, and that gets reviewed on the call with both contracts in front of us, before anything is signed.'],
      ['What if the scope my sales team sold is not realistic?', 'We tell you before signing, not halfway through the job. And we work out together what can be done for that budget.'],
    ],
  },
  closing: {
    kicker: 'First partner engagement',
    heading: 'Start with a real client of yours.',
    body: `An ${entry.name} on the perimeter of one of your clients, at the partner ${partnerDiscountPct}% off the published ${eur(entry.price)}. You see the report under your brand, you show it to the client, and you decide afterwards whether this becomes a channel. No volume minimum and no exclusivity to sign up front.`,
    cta: 'Book 30 minutes',
    mailSubject: 'Partner%20program',
  },
};

export const partnersCopy: Record<Lang, PartnersCopy> = { es, en };
