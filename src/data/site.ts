// The single conversion event on this site is a booked scoping call.
// Every primary CTA links here directly. /contact/ exists for people who
// need email or LinkedIn first, not as a step on the way to the calendar.

export const CALENDLY_URL = 'https://calendly.com/asbarraninfor/redghostops-onboarding';

export const CTA_LABEL = 'Book a scoping call';

// Carries the service of interest into Calendly so the call starts with
// context. Matches the keys in pricing.ts.
export const bookUrl = (service?: string): string => {
  if (!service) return CALENDLY_URL;
  const url = new URL(CALENDLY_URL);
  url.searchParams.set('utm_content', service);
  return url.toString();
};

export const EMAIL = 'engagements@redghostops.com';
