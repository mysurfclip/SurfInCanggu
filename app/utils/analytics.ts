export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      location: 'Canggu',
      ...params
    });
  }
}
