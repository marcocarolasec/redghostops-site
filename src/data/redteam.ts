// Copy and routing for the Red Team page, bilingual. English is the site
// default (clean path /red-team/); Spanish lives at /red-team/es/.
// Layout lives in components/RedTeamPage.astro; only text is here.

export type Lang = 'en' | 'es';

export const LANG_NAME: Record<Lang, string> = { es: 'Español', en: 'English' };

export const REDTEAM_PATH: Record<Lang, string> = {
  en: '/red-team/',
  es: '/red-team/es/',
};

export const REDTEAM_ANCHOR = '/services/#red-team';

export const redteamCopy = {
  en: {
    meta: {
      title: 'Red Team Operations — REDOPS Security',
      description: 'Objective-based adversary simulation by a senior operator. Custom tooling, EDR evasion, and a debrief that tells your SOC exactly what it caught and what it missed.',
    },
    kicker: 'Red team',
    h1: 'Find out what your defenders actually catch.',
    lede: 'A red team operation goes past an audit. It emulates a real attacker with a real objective, against a blue team that has not been told, to measure whether your organization would detect it, contain it, and recover.',
    heroMeta: 'Objective-based, typically two to four weeks. Scoped on the call. OSEP certified, ten published CVEs.',
    ctaSecondary: 'See the scenarios',
    proves: {
      heading: 'A pentest finds vulnerabilities. A red team finds out if anyone is watching.',
      items: [
        ['Detection and response, under real conditions', 'A red team tells you what your SOC actually catches, how fast it reacts, and where an attacker moves unseen. A pentest tells you which vulnerabilities exist. Different questions.'],
        ['Cross-cutting weaknesses', 'Real intrusions rarely turn on one vulnerability. The value is in the chain: a phish, a misconfigured service, an over-privileged account, and Tier-0 in three hops.'],
        ['Monitoring gaps you can name', 'Every action is logged on our side. The debrief shows exactly which steps your tooling saw, which it missed, and the log source that would have caught the rest.'],
        ['A blue team that has seen this before', 'The engagement ends with a joint session. Your defenders replay the operation with the operator who ran it, so the next real one is not their first.'],
      ],
    },
    stages: {
      heading: 'How the operation runs.',
      lede: 'One senior operator from planning to debrief. Every action logged, critical findings escalated the day they happen.',
      steps: [
        ['Threat intel and planning', 'We agree on the adversary to emulate and the objective that defines success. Recon builds the picture: exposed infrastructure, people, technology, leaked credentials. The blue team is not told.'],
        ['Initial access', 'Phishing, external exploitation, or an agreed assumed-breach starting point. Whatever a real operator with that objective would use, inside the rules of engagement.'],
        ['Evasion and foothold', 'Custom loaders and C2 tuned to get past the EDR in place, Sophos, CrowdStrike, SentinelOne. Persistence that survives a reboot and a credential reset.'],
        ['Lateral movement and escalation', 'From the first host toward the objective. Kerberos abuse, credential theft, ACL and delegation chains, pivoting between segments.'],
        ['Objective and exfiltration', 'Reaching the agreed target: Domain Admin, a specific system, staged data, or a controlled ransomware simulation. Proven, not asserted, and always reversible.'],
        ['Debrief', 'The full narrative, the detection timeline, and a working session with your defenders. Free follow-up on Critical findings within 30 days.'],
      ],
    },
    scenarios: {
      heading: 'Red team scenarios.',
      lede: 'A scenario is one adversary, one way in, one objective, agreed before anything starts. It defines who we emulate and what success means.',
      adversaryLabel: 'Adversary',
      wayInLabel: 'Way in',
      objectiveLabel: 'Objective',
      adversaries: [
        'External attacker, no prior access',
        'Compromised supplier or third party',
        'Malicious or compromised insider',
        'Competitor after specific data',
      ],
      vectors: [
        'Phishing and social engineering',
        'External vulnerability exploitation',
        'Leaked or guessed credentials',
        'Assumed breach, a planted foothold',
        'Physical or wireless access, where scoped',
      ],
      objectives: [
        'Domain Admin and Tier-0 control',
        'A named business system (ERP, payments, source)',
        'Sensitive data staged for exfiltration',
        'Controlled ransomware simulation',
        'A client-defined objective',
      ],
      examplesHeading: 'What a scenario looks like.',
      examples: [
        'A phishing email lands a foothold. Two weeks later the objective is Domain Admin and a copy of the HR database staged for exfiltration.',
        'An assumed-breach laptop on the corporate VLAN, tasked with reaching the payment system without tripping the SOC.',
        'A developer credential leaked in a public breach, used to reach source code and CI/CD secrets.',
        'A controlled ransomware simulation across a segmented file server estate, to measure detection, containment, and recovery.',
      ],
    },
    ransomware: {
      kicker: 'Ransomware',
      heading: 'The one scenario worth running before it runs itself.',
      lede: 'Ransomware is the attack most likely to hit and the one most organizations have never rehearsed. We run it end to end, safely, and then measure how far it got.',
      cards: [
        ['Run the scenario', 'A ransomware operation executed end to end against an agreed scope, with a reversible payload and hard safety limits. Nothing is encrypted for real.'],
        ['Gap analysis', 'A review of how each defensive layer responded: detection, containment, recovery. Where the operation would have been stopped, and where it would not.'],
      ],
      questionsLabel: 'Three questions it answers',
      questions: [
        'Would your defenses catch it before encryption starts?',
        'Can you contain it to the first host, or does it spread?',
        'Could you recover operations, and how fast?',
      ],
    },
    different: {
      heading: 'Why this red team is different.',
      items: [
        ['One senior operator', 'The person who plans the operation runs it and writes it up. No juniors on your network, no handoffs.'],
        ['Custom tooling', 'Loaders and C2 built for the engagement, not off-the-shelf frameworks every EDR already fingerprints. Loader research is public on the blog.'],
        ['Real evasion', 'EDR evasion developed and tested against Sophos, CrowdStrike, and SentinelOne, not assumed from a course.'],
        ['Research to back it', 'Ten published CVEs with MITRE and INCIBE identifiers, and OSEP certification. Verifiable before you sign anything.'],
      ],
    },
    vs: {
      heading: 'Red team, or penetration test?',
      lede: 'Both are manual, both are senior-led. They answer different questions. If you are unsure which you need, that is what the call is for.',
      thPen: 'Penetration test',
      thRed: 'Red team',
      rows: [
        ['The question', 'Which vulnerabilities exist in this scope?', 'Would we detect and stop a real attacker with an objective?'],
        ['Scope', 'Defined and broad: test everything in the target', 'Narrow and deep: reach the objective by any agreed path'],
        ['The blue team', 'Usually informed; it is a known exercise', 'Not informed; detection and response are part of the test'],
        ['Output', 'A prioritized list of findings to fix', 'A narrative of the intrusion, and where defense held or broke'],
        ['When to run it', 'A new app, an annual requirement, before a launch', 'A mature team that wants to test itself, not its scanners'],
      ],
    },
    delivers: {
      heading: 'What you get.',
      items: [
        'Full operation narrative mapped to MITRE ATT&CK',
        'Detection timeline: what your tooling saw, and when',
        'IOCs and a detection gap analysis for your SOC',
        'Executive briefing and a technical debrief with your team',
        'Free retest of Critical findings within 30 days',
      ],
    },
    pricing: {
      note: 'Red team operations are objective-based and scoped on the call.',
      linkLabel: 'See services and pricing',
    },
    faq: {
      heading: 'Questions.',
      items: [
        ['What is a red team exercise?', 'A planned offensive operation that emulates a specific attacker with a specific objective, run to test detection and response, not just to enumerate vulnerabilities. It measures what your people, process, and tooling actually do during a real intrusion.'],
        ['How is it different from a penetration test?', 'A pentest maps the vulnerabilities in a defined scope, with the defenders usually aware. A red team picks an objective and reaches it by any agreed route, without warning the blue team, so you learn whether you would catch a real one.'],
        ['How long does it take?', 'Objective-based, typically two to four weeks of active operation, longer when it starts cold from the internet with no prior knowledge. Mature teams often run several shorter operations across a year rather than one.'],
        ['Can it break something?', 'Any real-world operation carries risk, so it is managed: written rules of engagement, agreed no-go systems, reversible payloads, and same-day escalation of anything critical. Ransomware simulation never encrypts real data.'],
        ['Do we need a mature security team first?', 'For a full red team, ideally yes. With no monitoring to test, a penetration test or the Active Directory assessment gives more for the money. The scoping call is where we decide honestly which one fits.'],
      ],
    },
    cta: {
      kicker: 'Not sure a full red team is the right test?',
      heading: 'Thirty minutes is enough to scope it.',
      body: 'NDA first, so we can talk about your actual environment. You talk to the operator who would run the operation, not a salesperson.',
      emailSubject: 'Red team scoping',
    },
  },

  es: {
    meta: {
      title: 'Operaciones de Red Team — REDOPS Security',
      description: 'Simulación de adversario basada en objetivos por un operador sénior. Tooling propio, evasión de EDR y un debrief que le dice a tu SOC qué cazó y qué se le escapó.',
    },
    kicker: 'Red team',
    h1: 'Descubre qué detectan de verdad tus defensores.',
    lede: 'Una operación de red team va más allá de una auditoría. Emula a un atacante real con un objetivo real, contra un equipo defensor al que no se ha avisado, para medir si tu organización lo detectaría, lo contendría y se recuperaría.',
    heroMeta: 'Basado en objetivos, normalmente de dos a cuatro semanas. Se dimensiona en la llamada. Certificación OSEP, diez CVEs publicados.',
    ctaSecondary: 'Ver los escenarios',
    proves: {
      heading: 'Un pentest encuentra vulnerabilidades. Un red team descubre si alguien está mirando.',
      items: [
        ['Detección y respuesta, en condiciones reales', 'Un red team te dice qué caza de verdad tu SOC, con qué rapidez reacciona y por dónde se mueve un atacante sin que lo vean. Un pentest te dice qué vulnerabilidades existen. Preguntas distintas.'],
        ['Debilidades transversales', 'Las intrusiones reales rara vez giran sobre una sola vulnerabilidad. El valor está en la cadena: un phishing, un servicio mal configurado, una cuenta con demasiados privilegios, y Tier-0 en tres saltos.'],
        ['Puntos ciegos que puedes nombrar', 'Cada acción queda registrada por nuestro lado. El debrief muestra exactamente qué pasos vio tu tecnología, cuáles se le escaparon y la fuente de logs que habría cazado el resto.'],
        ['Un equipo defensor que ya lo ha vivido', 'La operación termina con una sesión conjunta. Tus defensores repasan la operación con el operador que la ejecutó, para que la próxima de verdad no sea la primera.'],
      ],
    },
    stages: {
      heading: 'Cómo se ejecuta la operación.',
      lede: 'Un operador sénior desde la planificación hasta el debrief. Cada acción registrada, los hallazgos críticos escalados el día que ocurren.',
      steps: [
        ['Inteligencia de amenazas y planificación', 'Acordamos al adversario a emular y el objetivo que define el éxito. El reconocimiento construye la imagen: infraestructura expuesta, personas, tecnología, credenciales filtradas. Al equipo defensor no se le avisa.'],
        ['Acceso inicial', 'Phishing, explotación externa o un punto de partida acordado de assumed breach. Lo que usaría un operador real con ese objetivo, dentro de las reglas de compromiso.'],
        ['Evasión y punto de apoyo', 'Loaders y C2 propios ajustados para pasar el EDR que haya, Sophos, CrowdStrike, SentinelOne. Persistencia que sobrevive a un reinicio y a un reset de credenciales.'],
        ['Movimiento lateral y escalada', 'Del primer host hacia el objetivo. Abuso de Kerberos, robo de credenciales, cadenas de ACLs y delegación, pivotar entre segmentos.'],
        ['Objetivo y exfiltración', 'Alcanzar el objetivo acordado: Domain Admin, un sistema concreto, datos preparados, o una simulación de ransomware controlada. Demostrado, no afirmado, y siempre reversible.'],
        ['Debrief', 'La narrativa completa, la línea de tiempo de detección y una sesión de trabajo con tus defensores. Seguimiento gratuito de los hallazgos críticos en 30 días.'],
      ],
    },
    scenarios: {
      heading: 'Escenarios de red team.',
      lede: 'Un escenario es un adversario, una vía de entrada, un objetivo, acordado antes de empezar nada. Define a quién emulamos y qué significa el éxito.',
      adversaryLabel: 'Adversario',
      wayInLabel: 'Vía de entrada',
      objectiveLabel: 'Objetivo',
      adversaries: [
        'Atacante externo, sin acceso previo',
        'Proveedor o tercero comprometido',
        'Empleado malicioso o comprometido',
        'Competidor tras datos concretos',
      ],
      vectors: [
        'Phishing e ingeniería social',
        'Explotación de vulnerabilidades externas',
        'Credenciales filtradas o adivinadas',
        'Assumed breach, un punto de apoyo dado',
        'Acceso físico o wifi, donde entre en alcance',
      ],
      objectives: [
        'Domain Admin y control de Tier-0',
        'Un sistema de negocio concreto (ERP, pagos, código)',
        'Datos sensibles preparados para exfiltrar',
        'Simulación de ransomware controlada',
        'Un objetivo definido por el cliente',
      ],
      examplesHeading: 'Cómo es un escenario.',
      examples: [
        'Un correo de phishing consigue un punto de apoyo. Dos semanas después el objetivo es Domain Admin y una copia de la base de datos de RRHH preparada para exfiltrar.',
        'Un portátil de assumed breach en la VLAN corporativa, con la tarea de llegar al sistema de pagos sin disparar el SOC.',
        'Una credencial de desarrollador filtrada en una brecha pública, usada para llegar al código fuente y los secretos de CI/CD.',
        'Una simulación de ransomware controlada sobre un parque de servidores de ficheros segmentado, para medir detección, contención y recuperación.',
      ],
    },
    ransomware: {
      kicker: 'Ransomware',
      heading: 'El único escenario que merece ensayarse antes de que se ejecute solo.',
      lede: 'El ransomware es el ataque con más probabilidad de llegar y el que la mayoría de organizaciones nunca ha ensayado. Lo ejecutamos de principio a fin, con seguridad, y luego medimos hasta dónde llegó.',
      cards: [
        ['Ejecutar el escenario', 'Una operación de ransomware ejecutada de principio a fin contra un alcance acordado, con un payload reversible y límites de seguridad estrictos. No se cifra nada de verdad.'],
        ['Análisis de brechas', 'Una revisión de cómo respondió cada capa defensiva: detección, contención, recuperación. Dónde se habría detenido la operación, y dónde no.'],
      ],
      questionsLabel: 'Tres preguntas que responde',
      questions: [
        '¿Cazarían tus defensas el ataque antes de que empiece el cifrado?',
        '¿Puedes contenerlo al primer host, o se propaga?',
        '¿Podrías recuperar la operativa, y en cuánto tiempo?',
      ],
    },
    different: {
      heading: 'Por qué este red team es diferente.',
      items: [
        ['Un operador sénior', 'La persona que planifica la operación la ejecuta y la escribe. Sin juniors en tu red, sin traspasos.'],
        ['Tooling propio', 'Loaders y C2 construidos para la operación, no frameworks de serie que todo EDR ya tiene fichados. La investigación de loaders es pública en el blog.'],
        ['Evasión real', 'Evasión de EDR desarrollada y probada contra Sophos, CrowdStrike y SentinelOne, no supuesta a partir de un curso.'],
        ['Investigación que lo respalda', 'Diez CVEs publicados con identificadores de MITRE e INCIBE, y certificación OSEP. Verificable antes de firmar nada.'],
      ],
    },
    vs: {
      heading: '¿Red team o pentest?',
      lede: 'Ambos son manuales, ambos los lleva un sénior. Responden preguntas distintas. Si no sabes cuál necesitas, para eso está la llamada.',
      thPen: 'Pentest',
      thRed: 'Red team',
      rows: [
        ['La pregunta', '¿Qué vulnerabilidades existen en este alcance?', '¿Detectaríamos y frenaríamos a un atacante real con un objetivo?'],
        ['Alcance', 'Definido y amplio: probar todo lo del objetivo', 'Estrecho y profundo: llegar al objetivo por cualquier vía acordada'],
        ['El equipo defensor', 'Normalmente informado; es un ejercicio conocido', 'No informado; la detección y la respuesta son parte del test'],
        ['Resultado', 'Una lista priorizada de hallazgos que corregir', 'Una narrativa de la intrusión, y dónde aguantó o se rompió la defensa'],
        ['Cuándo hacerlo', 'Una app nueva, un requisito anual, antes de un lanzamiento', 'Un equipo maduro que quiere probarse a sí mismo, no a sus escáneres'],
      ],
    },
    delivers: {
      heading: 'Qué recibes.',
      items: [
        'Narrativa completa de la operación mapeada a MITRE ATT&CK',
        'Línea de tiempo de detección: qué vio tu tecnología, y cuándo',
        'IOCs y un análisis de brechas de detección para tu SOC',
        'Briefing ejecutivo y debrief técnico con tu equipo',
        'Reprueba gratuita de los hallazgos críticos en 30 días',
      ],
    },
    pricing: {
      note: 'Las operaciones de red team se basan en objetivos y se dimensionan en la llamada.',
      linkLabel: 'Ver servicios y precios',
    },
    faq: {
      heading: 'Preguntas.',
      items: [
        ['¿Qué es un ejercicio de red team?', 'Una operación ofensiva planificada que emula a un atacante concreto con un objetivo concreto, ejecutada para probar la detección y la respuesta, no solo para enumerar vulnerabilidades. Mide lo que de verdad hacen tus personas, procesos y tecnología durante una intrusión real.'],
        ['¿En qué se diferencia de un pentest?', 'Un pentest mapea las vulnerabilidades de un alcance definido, con los defensores normalmente al tanto. Un red team elige un objetivo y llega a él por cualquier ruta acordada, sin avisar al equipo defensor, para que aprendas si cazarías uno real.'],
        ['¿Cuánto dura?', 'Basado en objetivos, normalmente de dos a cuatro semanas de operación activa, más si empieza en frío desde internet sin conocimiento previo. Los equipos maduros suelen hacer varias operaciones cortas a lo largo del año en vez de una.'],
        ['¿Puede romper algo?', 'Toda operación real conlleva riesgo, así que se gestiona: reglas de compromiso por escrito, sistemas vetados acordados, payloads reversibles y escalado el mismo día de cualquier cosa crítica. La simulación de ransomware nunca cifra datos de verdad.'],
        ['¿Necesitamos primero un equipo de seguridad maduro?', 'Para un red team completo, idealmente sí. Sin monitorización que probar, un pentest o la evaluación de Directorio Activo dan más por el dinero. La llamada de scoping es donde decidimos con honestidad cuál encaja.'],
      ],
    },
    cta: {
      kicker: '¿No tienes claro si un red team completo es el test adecuado?',
      heading: 'Treinta minutos bastan para dimensionarlo.',
      body: 'Con NDA primero, para poder hablar de tu entorno real. Hablas con el operador que ejecutaría la operación, no con un comercial.',
      emailSubject: 'Scoping red team',
    },
  },
} as const;
