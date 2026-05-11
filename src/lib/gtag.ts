export const GA_TRACKING_ID = "G-MNESPQQ54T";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackWhatsAppClick = (buttonName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: buttonName,
      page_path: window.location.pathname,
      value: 1,
    });

    console.log("Evento enviado");
  } else {
    console.log("gtag no existe");
  }
};
