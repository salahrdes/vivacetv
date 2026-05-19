import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Mentions légales | VivaceTV',
  description: 'Mentions légales du site VivaceTV — éditeur, hébergement, propriété intellectuelle et données personnelles.',
  alternates: { canonical: `${siteConfig.url}/mentions-legales` },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout
      label="Légal"
      title="Mentions légales"
      subtitle="Informations légales relatives à l'éditeur du site et au service VivaceTV."
      updatedAt="1er avril 2026"
      sections={[
        {
          heading: 'À propos de ce document',
          paragraphs: [
            'Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l\'Économie Numérique (LCEN), les présentes mentions légales précisent l\'identité de l\'éditeur du site vivacetv.com, les conditions d\'hébergement, ainsi que les droits et obligations des utilisateurs. Elles constituent un engagement de transparence vis-à-vis de nos utilisateurs et des autorités compétentes.',
          ],
        },
        {
          heading: 'Éditeur du site',
          paragraphs: [
            'Le présent site est édité par VivaceTV, prestataire de services de streaming numérique opérant dans le cadre de la législation européenne applicable.',
            'Dénomination : VivaceTV',
            'Contact : support@vivacetv.com',
            'Service disponible en France et dans les pays de l\'Union européenne.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Pour toute demande relative au site, à ses contenus ou à notre service, vous pouvez nous contacter à l\'adresse suivante : support@vivacetv.com',
            'Notre équipe répond sous 24 heures ouvrées.',
          ],
        },
        {
          heading: 'Hébergement',
          paragraphs: [
            'Le site VivaceTV est hébergé chez un prestataire professionnel garantissant la disponibilité, la sécurité et la conformité aux exigences du RGPD.',
            'Les informations relatives à l\'hébergeur sont disponibles sur demande à support@vivacetv.com.',
          ],
        },
        {
          heading: 'Propriété intellectuelle',
          paragraphs: [
            'L\'ensemble des éléments constituant ce site (textes, graphiques, logos, icônes, images, mises en page) sont la propriété exclusive de VivaceTV et sont protégés par les lois françaises et internationales sur la propriété intellectuelle.',
            'Toute reproduction, représentation, modification ou adaptation, totale ou partielle, par quelque procédé que ce soit, sans autorisation préalable et expresse de VivaceTV, est strictement interdite.',
          ],
        },
        {
          heading: 'Responsabilité',
          paragraphs: [
            'VivaceTV met tout en œuvre pour assurer l\'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment.',
            'VivaceTV ne peut garantir l\'exhaustivité, la précision ou l\'actualité des informations publiées. Elle décline toute responsabilité pour tout dommage résultant d\'une interruption ou d\'une indisponibilité du site.',
          ],
        },
        {
          heading: 'Données personnelles',
          paragraphs: [
            'VivaceTV collecte et traite les données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.',
            'Pour toute demande relative à vos données personnelles (accès, rectification, suppression), contactez-nous à support@vivacetv.com.',
            'Consultez notre Politique de confidentialité pour en savoir plus.',
          ],
        },
        {
          heading: 'Droit applicable',
          paragraphs: [
            'Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.',
          ],
        },
      ]}
    />
  );
}
