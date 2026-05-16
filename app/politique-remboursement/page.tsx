import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Politique de remboursement | ClarioTV',
  description: 'Politique de remboursement de ClarioTV — conditions, délais et procédure pour les demandes de remboursement.',
  alternates: { canonical: `${siteConfig.url}/politique-remboursement` },
  robots: { index: false, follow: true },
};

export default function PolitiqueRemboursementPage() {
  return (
    <LegalPageLayout
      label="Légal"
      title="Politique de remboursement"
      subtitle="Conditions et procédure pour les demandes de remboursement liées à votre abonnement IPTV ClarioTV."
      updatedAt="1er avril 2026"
      sections={[
        {
          heading: 'Notre engagement',
          paragraphs: [
            "ClarioTV met tout en œuvre pour garantir la satisfaction de ses clients. Avant tout achat, nous proposons un test gratuit de 24 heures afin de s'assurer de la compatibilité du service avec votre appareil et votre connexion. Si malgré nos efforts de support vous n'êtes pas satisfait dans les conditions décrites ci-dessous, nous examinons chaque demande de remboursement avec attention et sérieux.",
          ],
        },
        {
          heading: 'Présentation',
          paragraphs: [
            "ClarioTV s'engage à fournir un service de qualité. Si vous rencontrez un problème que notre équipe ne parvient pas à résoudre, nous examinons les demandes de remboursement au cas par cas.",
            "Nous encourageons tous les nouveaux clients à utiliser le test gratuit 24h disponible sur notre site avant tout achat.",
          ],
        },
        {
          heading: 'Demandes de remboursement',
          paragraphs: [
            "Les demandes de remboursement doivent être formulées par écrit, par email à support@clariotv.com, dans un délai de 48 heures suivant l'activation du service.",
            "Passé ce délai, le service étant partiellement consommé, aucun remboursement ne pourra être accordé sauf circonstances exceptionnelles.",
          ],
        },
        {
          heading: "Conditions d'éligibilité",
          paragraphs: [
            "Une demande de remboursement peut être acceptée si : le service ne fonctionne pas du tout sur l'appareil indiqué lors de la commande, notre équipe de support n'a pas pu résoudre le problème dans les 48 heures, vous n'avez pas utilisé le test gratuit 24h avant votre achat.",
            "Ces conditions sont cumulatives. Notre équipe évalue chaque situation individuellement.",
          ],
        },
        {
          heading: 'Cas non remboursables',
          paragraphs: [
            "Les remboursements ne sont pas accordés dans les cas suivants : changement d'avis après activation et utilisation du service, problèmes liés à la connexion Internet de l'utilisateur, incompatibilité signalée après utilisation sur une longue période, abonnement expiré ou partiellement consommé au-delà de 48h.",
          ],
        },
        {
          heading: 'Délai de traitement',
          paragraphs: [
            "Les demandes de remboursement éligibles sont traitées dans un délai de 5 à 10 jours ouvrés.",
            "Le remboursement est effectué par le même moyen de paiement que celui utilisé lors de la commande, dans la mesure du possible.",
          ],
        },
        {
          heading: 'Contact du support',
          paragraphs: [
            "Pour toute demande de remboursement ou question relative à notre politique : support@clariotv.com",
            "Notre équipe est également disponible via WhatsApp au +44 747 661 4523 pour toute assistance.",
          ],
        },
      ]}
    />
  );
}
