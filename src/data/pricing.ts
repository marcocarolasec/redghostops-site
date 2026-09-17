// Single source of truth for published pricing. Every number on the site
// comes from here; adjust values in this file only.
// All prices in EUR, excluding VAT.

export const eur = (n: number) => '€' + n.toLocaleString('en-US');

export const dayRate = 1200;

// Entry product: priced under the typical procurement threshold so a CTO can
// approve it alone. Full amount credited against a later full engagement.
export const entry = {
  key: 'attack-surface-review',
  name: 'Attack Surface Review',
  scope: 'External perimeter, up to 3 root domains',
  days: 2,
  price: 1900,
  creditWindowDays: 90,
};

export type Tier = {
  label: string;
  scope: string;
  days: number | null; // null = custom
  price: number | null; // null = quoted after scoping
};

export type Service = {
  key: string;
  name: string;
  tiers: Tier[];
};

export const services: Service[] = [
  {
    key: 'web-pentest',
    name: 'Web Application Pentest',
    tiers: [
      { label: 'S', scope: '1 role, ~30 endpoints', days: 5, price: 5900 },
      { label: 'M', scope: '2–3 roles, ~80 endpoints', days: 7, price: 7900 },
      { label: 'L', scope: 'Larger or multi-app scope', days: null, price: null },
    ],
  },
  {
    key: 'external-pentest',
    name: 'External Network Pentest',
    tiers: [{ label: '', scope: 'Up to 50 live hosts', days: 5, price: 5900 }],
  },
  {
    key: 'internal-pentest',
    name: 'Internal Network Pentest',
    tiers: [{ label: '', scope: 'Assumed breach, internal network', days: null, price: null }],
  },
  {
    key: 'ad-assessment',
    name: 'Active Directory Assessment',
    tiers: [
      { label: 'Single domain', scope: 'One AD domain', days: 7, price: 8900 },
      { label: 'Multi-domain', scope: 'Multi-domain / forest', days: 10, price: 11900 },
    ],
  },
  {
    key: 'mobile-pentest',
    name: 'Mobile Application Pentest',
    tiers: [{ label: '', scope: 'iOS or Android, one app', days: null, price: null }],
  },
  {
    key: 'red-team',
    name: 'Red Team Operations',
    tiers: [{ label: '', scope: 'Objective-based, 2–4 weeks', days: null, price: null }],
  },
  {
    key: 'cloud',
    name: 'Cloud Security Assessment',
    tiers: [{ label: '', scope: 'AWS / Azure / GCP, 5–10 days', days: null, price: null }],
  },
];

export const addons = [
  { name: 'Out-of-window retest', scope: 'Re-validation of findings after the free 30-day window', days: '1–2', price: 1900 },
  { name: 'Additional day / scope extension', scope: 'Same operator, same engagement', days: '1', price: dayRate },
];

export const recurring = [
  {
    key: 'watch',
    name: 'Watch',
    monthly: 790,
    includes: [
      'Continuous monitoring of your external attack surface',
      'Alerts on new exposed hosts, services and certificates',
      'Monthly written report',
      'Direct channel to the operator',
    ],
  },
  {
    key: 'watch-verify',
    name: 'Watch + Verify',
    monthly: 1490,
    includes: [
      'Everything in Watch',
      'One retest day per quarter to verify remediation',
      'Priority scheduling for new engagements',
    ],
  },
];

// Discount off the published price for white-label partner work (MSPs,
// consultancies, resellers). Placeholder value: review before quoting.
export const partnerDiscountPct = 20;

export const terms = {
  commitmentMonths: 12,
  annualPrepayDiscount: 10,
  bundle: [
    { services: 2, pct: 10 },
    { services: 3, pct: 15 },
  ],
};

// Lowest published price per service key, for "from €X" labels elsewhere.
export const fromPrice = (key: string): number | null => {
  const s = services.find((x) => x.key === key);
  const prices = (s?.tiers ?? []).map((t) => t.price).filter((p): p is number => p !== null);
  return prices.length ? Math.min(...prices) : null;
};
