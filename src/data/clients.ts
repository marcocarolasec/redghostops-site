// Track record: organisations the team has worked for, with or through.
// Rendered as a monochrome logo marquee on the home page (originals in
// /public/logos, taken from each organisation's own site and shown as
// one-colour marks so nine palettes read as one row) and in full on /clients/.
//
// Every entry that can be verified links to a public source. Anything that
// cannot be verified stays descriptive. Do not add a name here without at
// least a role or an engagement we can defend on a call.

export type ClientKind = 'client' | 'platform' | 'employer' | 'partner' | 'institution';

export type Client = {
  name: string;
  short?: string;             // label for the home band, if the name is long
  kind: ClientKind;
  sector: string;
  relation: string;           // one line, how we worked with them
  detail?: string;            // a short paragraph for /clients/
  href?: string;              // public source
  hrefLabel?: string;
  proof?: string;             // a verifiable number or artefact
  logo?: string;              // /public/logos/*.svg, shown monochrome in the band
  logoH?: number;             // band height in px (default 26); square marks go bigger
  since?: string;
};

export const KIND_LABEL: Record<ClientKind, string> = {
  client: 'Client',
  platform: 'Audit platform',
  employer: 'In-house / contract',
  partner: 'Channel partner',
  institution: 'Public body',
};

export const clients: Client[] = [
  {
    name: 'Telefónica Tech',
    logo: '/logos/telefonica-tech.svg', logoH: 30,
    kind: 'employer',
    sector: 'Telecom · Cybersecurity services',
    relation: 'Senior offensive security engineer, 2022 – 2026.',
    detail: 'Four years on the offensive team of Spain’s largest telecom security provider. Penetration tests across Active Directory, web and API, cloud, mobile, IoT, wireless and infrastructure for enterprise clients in Spain, Europe and Latin America. LLM security testing and social engineering campaigns.',
    href: 'https://telefonicatech.com',
    since: '2022',
  },
  {
    name: 'AuditOne',
    logo: '/logos/auditone.svg', logoH: 30,
    kind: 'platform',
    sector: 'Web3 security · Audit aggregator (Cologne, DE)',
    relation: 'Head of Security. Expert-level auditor on the platform.',
    detail: 'Head of Security at AuditOne, the audit aggregator behind projects like Aurora, Humans.ai and RedStone, with a community of 500+ auditors. Also an active auditor on the platform at Auditor Expert level: 19 findings across pen-tests and wallet audits, 3 rated Critical/High. Public auditor profile and published reports.',
    href: 'https://www.auditone.io/company',
    hrefLabel: 'Team page',
    proof: 'https://auditor.auditone.io/u/asier',
    since: '2024',
  },
  {
    name: 'Bloom Wallet',
    logo: '/logos/bloom-wallet.svg', logoH: 34,
    kind: 'client',
    sector: 'Web3 · Cross-chain wallet (IOTA, EVM)',
    relation: 'Pen-test and transaction integration audit, via AuditOne. Public report.',
    detail: 'Penetration test of a cross-chain wallet supporting IOTA and IOTA EVM. We reported the engagement’s High-severity findings, resolved before publication. The full report is public on AuditOne.',
    href: 'https://www.auditone.io/audit-report/bloom-0ff03',
    hrefLabel: 'Public audit report',
    proof: '1 High, 6 Medium, 8 Low',
    since: '2024',
  },
  {
    name: 'Cybar',
    kind: 'client',
    sector: 'Web3 · Platform pen-test',
    relation: 'Penetration test, via AuditOne. Results published on the auditor profile.',
    detail: 'Platform penetration test delivered through AuditOne. Six issues reported, one Medium and five Low; results are listed on the public auditor profile.',
    href: 'https://auditor.auditone.io/u/asier',
    hrefLabel: 'Auditor profile',
    proof: '6 findings',
  },
  {
    name: 'Bullhost Cloud Services',
    logo: '/logos/bullhost.svg', logoH: 26,
    short: 'Bullhost.Tech',
    kind: 'client',
    sector: 'Cloud hosting · Managed security (Basque Country, ES)',
    relation: 'Offensive security engineer and pentest provider, 2019 – 2022.',
    detail: 'Three years running the offensive side of a cloud and managed security provider: penetration tests, web and API audits, vulnerability management, incident response and SOC monitoring for their hosting and MSP customers.',
    href: 'https://bullhost.tech',
    since: '2019',
  },
  {
    name: 'INCIBE',
    logo: '/logos/incibe.svg', logoH: 30,
    kind: 'institution',
    sector: 'Spanish National Cybersecurity Institute',
    relation: 'Coordinated disclosure. Published CVEs through INCIBE-CERT.',
    detail: 'Several of our published CVEs went through INCIBE’s coordinated vulnerability disclosure programme, the Spanish national CERT. Advisories are public with INCIBE and MITRE identifiers.',
    href: 'https://www.incibe.es/en/incibe-cert/notices/aviso',
    hrefLabel: 'INCIBE-CERT advisories',
    proof: 'CVEs with INCIBE identifiers',
  },
  {
    name: 'Assured Clarity',
    logo: '/logos/assured-clarity.svg', logoH: 30,
    kind: 'client',
    sector: 'Security training and consulting (UK)',
    relation: 'Offensive security instructor, 2021 – 2022.',
    detail: 'Designed and delivered hands-on offensive security training for a UK consultancy: penetration testing with Burp Suite, AWS security assessment, OSINT and threat modelling.',
    href: 'https://assured-clarity.com',
    since: '2021',
  },
  {
    name: 'SPRI',
    logo: '/logos/spri.svg', logoH: 56,
    kind: 'institution',
    sector: 'Basque Government business development agency',
    relation: 'Cybersecurity programmes for Basque companies.',
    detail: 'Collaboration with SPRI, the Basque Government’s business development agency, on cybersecurity programmes for companies in the Basque Country.',
    href: 'https://www.spri.eus/',
  },
  {
    name: 'PC Seguridad',
    logo: '/logos/pc-seguridad.svg', logoH: 48,
    kind: 'partner',
    sector: 'IT services and managed security (Las Palmas, ES)',
    relation: 'Channel partner. Senior pentesting for their customer base.',
    detail: 'PC Seguridad, twenty years serving small and mid-sized businesses in the Canary Islands, offers our pentesting and red team services to its customers under a visible partnership. Part of the partner programme described on the Partners page.',
    href: 'https://pcseguridad.es',
    since: '2026',
  },
];

// Order for the home band: recognisable names first.
// Cybar stays off the band until we have its mark; it is still listed on /clients/.
export const bandOrder = ['Telefónica Tech', 'AuditOne', 'INCIBE', 'Bloom Wallet', 'SPRI', 'Bullhost Cloud Services', 'Assured Clarity', 'PC Seguridad'];

export const band = bandOrder
  .map((n) => clients.find((c) => c.name === n))
  .filter((c): c is Client => Boolean(c));
