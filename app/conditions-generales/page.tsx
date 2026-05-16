import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | ClarioTV",
  description: "Consultez les conditions générales d'utilisation du service IPTV ClarioTV.",
  alternates: { canonical: `${siteConfig.url}/conditions-generales` },
  robots: { index: false, follow: true },
};

export default function ConditionsGeneralesPage() {
  return (
    <LegalPageLayout
      label="Légal"
      title="Conditions générales"
      subtitle="Conditions générales régissant l'utilisation du service ClarioTV et la relation entre le prestataire et ses clients."
      updatedAt="1er avril 2026"
      sections={[
        {
          heading: 'Présentation',
          paragraphs: [
            "Les présentes Conditions Générales d'Utilisation (CGU) définissent les règles d'accès et d'utilisation du service IPTV ClarioTV. En souscrivant un abonnement ou en utilisant l'accès test gratuit, l'utilisateur reconnaît avoir pris connaissance de ces conditions et les accepte sans réserve. ClarioTV se réserve le droit de les modifier à tout moment ; les nouvelles conditions prennent effet à leur date de publication.",
          ],
        },
        {
          heading: 'Objet',
          paragraphs: [
            "Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles ClarioTV fournit ses services de streaming IPTV ainsi que les droits et obligations des parties.",
            "En utilisant le service ClarioTV, vous acceptez sans réserve les présentes conditions générales.",
          ],
        },
        {
          heading: 'Description du service',
          paragraphs: [
            "ClarioTV est un service d'accès à des flux de contenu audiovisuel (chaînes de télévision, films, séries) via Internet, accessible sur les appareils compatibles.",
            "Le service est disponible en plusieurs formules (forfaits) dont les caractéristiques sont décrites sur la page Abonnements du site.",
          ],
        },
        {
          heading: 'Commande',
          paragraphs: [
            "La commande s'effectue via WhatsApp ou le formulaire de contact disponible sur le site. Aucun compte client n'est requis pour commander.",
            "Après réception de la demande, notre équipe contacte le client pour confirmer la commande et finaliser les modalités de paiement.",
          ],
        },
        {
          heading: 'Activation du service',
          paragraphs: [
            "L'activation du service intervient après confirmation du paiement. Le client reçoit ses identifiants d'accès (URL de serveur, nom d'utilisateur, mot de passe) via WhatsApp.",
            "L'activation est généralement effectuée dans un délai inférieur à 5 minutes lors des heures de disponibilité de notre équipe.",
          ],
        },
        {
          heading: "Responsabilité de l'utilisateur",
          paragraphs: [
            "Le client s'engage à utiliser le service dans le respect des lois en vigueur dans son pays de résidence.",
            "Le client est responsable de la confidentialité de ses identifiants d'accès. Tout usage non autorisé du compte est de la responsabilité exclusive du client.",
            "Il est interdit de partager, revendre ou redistribuer les accès fournis par ClarioTV.",
          ],
        },
        {
          heading: 'Qualité de service',
          paragraphs: [
            "ClarioTV s'efforce de fournir un service de qualité optimale. La qualité d'image et la stabilité peuvent varier selon la connexion Internet de l'utilisateur, l'appareil utilisé et les conditions techniques du réseau.",
            "ClarioTV ne garantit pas une disponibilité permanente et sans interruption du service.",
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            "Notre équipe de support est disponible 24h/24 via WhatsApp pour assister les clients dans l'installation, la configuration et la résolution des problèmes techniques.",
          ],
        },
        {
          heading: 'Paiement',
          paragraphs: [
            "Le paiement est effectué par les moyens convenus avec notre équipe lors de la confirmation de commande.",
            "Les prix affichés sur le site sont en euros et hors taxe, sauf indication contraire.",
            "Tout abonnement payé est définitif, sous réserve de notre politique de remboursement.",
          ],
        },
        {
          heading: 'Résiliation',
          paragraphs: [
            "Les abonnements sont à durée déterminée. Ils prennent fin automatiquement à l'expiration de la période souscrite sans reconduction automatique.",
            "Il n'existe pas d'abonnement à reconduction tacite chez ClarioTV.",
          ],
        },
        {
          heading: 'Modification des conditions',
          paragraphs: [
            "ClarioTV se réserve le droit de modifier les présentes conditions générales à tout moment. Les nouvelles conditions entrent en vigueur dès leur publication sur le site.",
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            "Pour toute question relative aux présentes conditions générales : support@clariotv.com",
          ],
        },
      ]}
    />
  );
}
