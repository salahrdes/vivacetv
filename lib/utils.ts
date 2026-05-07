export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Build a WhatsApp deep-link with a pre-filled message.
 * Uses the official API endpoint so it works on both mobile and desktop.
 *
 * @param message  Human-readable message to pre-fill (spaces become +)
 */
export function buildWhatsAppUrl(message = 'Bonjour ClarioTV'): string {
  // WhatsApp API uses + for spaces (same format the user specified)
  const encoded = message.trim().replace(/ /g, '+');
  return `https://api.whatsapp.com/send/?phone=447476614523&text=${encoded}`;
}
