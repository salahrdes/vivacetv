import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | ClarioTV',
  description: 'Politique de confidentialité de ClarioTV — collecte, utilisation et protection de vos données personnelles.',
  alternates: { canonical: `${siteConfig.url}/politique-confidentialite` },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout
      label="Légal"
      title="Politique de confidentialité"
      subtitle="Comment ClarioTV collecte, utilise et protège vos données personnelles conformément au RGPD."
      updatedAt="1er avril 2026"
      sections={[
        {
          heading: 'Engagement de confidentialité',
          paragraphs: [
            "La protection de vos données personnelles est une priorité pour ClarioTV. Nous collectons uniquement les informations strictement nécessaires à la fourniture de notre service IPTV, et nous ne les partageons jamais à des fins commerciales. La présente politique explique quelles données nous traitons, dans quel but, et comment vous pouvez exercer vos droits conformément au Règlement Général sur la Protection des Données (RGPD).",
          ],
        },
        {
          heading: 'Données collectées',
          paragraphs: [
            "ClarioTV collecte uniquement les données strictement nécessaires à la fourniture de son service. Ces données peuvent inclure : nom ou prénom, adresse email, numéro de téléphone WhatsApp, type d'appareil utilisé.",
            "Nous ne collectons pas de données bancaires, de numéro de sécurité sociale ni de données sensibles au sens du RGPD.",
          ],
        },
        {
          heading: 'Utilisation des données',
          paragraphs: [
            "Les données collectées sont utilisées exclusivement pour : traiter et confirmer votre commande, fournir et activer votre accès au service, vous contacter pour le support technique, améliorer la qualité de notre service.",
            "Nous n'utilisons pas vos données à des fins de marketing non sollicité ni ne les vendons à des tiers.",
          ],
        },
        {
          heading: 'Formulaires de contact et de commande',
          paragraphs: [
            "Les informations saisies dans les formulaires du site (contact, test gratuit) sont utilisées uniquement pour répondre à votre demande.",
            "Ces informations ne sont pas conservées au-delà de la durée nécessaire au traitement de votre demande, sauf consentement explicite de votre part.",
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            "Notre site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent pas d'informations personnelles identifiables.",
            "Aucun cookie publicitaire ou de traçage tiers n'est utilisé sans votre consentement.",
          ],
        },
        {
          heading: 'Conservation des données',
          paragraphs: [
            "Vos données sont conservées pendant la durée de votre abonnement et jusqu'à 12 mois après l'expiration de celui-ci, sauf demande de suppression de votre part.",
            "À l'expiration de cette période, vos données sont supprimées ou anonymisées.",
          ],
        },
        {
          heading: 'Partage des données',
          paragraphs: [
            "ClarioTV ne partage vos données personnelles avec aucun tiers à des fins commerciales.",
            "Vos données peuvent être partagées avec des sous-traitants techniques (hébergement, sécurité) dans le strict respect des obligations RGPD, par le biais de contrats de traitement.",
          ],
        },
        {
          heading: 'Sécurité',
          paragraphs: [
            "ClarioTV met en place des mesures techniques et organisationnelles adaptées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation.",
          ],
        },
        {
          heading: 'Droits des utilisateurs',
          paragraphs: [
            "Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles : droit d'accès, droit de rectification, droit à l'effacement, droit à la portabilité, droit d'opposition.",
            "Pour exercer ces droits, contactez-nous à support@clariotv.com. Nous répondrons dans un délai de 30 jours.",
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            "Pour toute question relative à la présente politique de confidentialité ou à l'exercice de vos droits : support@clariotv.com",
            "Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).",
          ],
        },
      ]}
    />
  );
}
