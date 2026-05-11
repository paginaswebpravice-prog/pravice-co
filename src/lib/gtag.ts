export const GA_TRACKING_ID = "G-MNESPQQ54T";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: location,
      value: 1,
    });
  }
};
