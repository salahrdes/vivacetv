import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'DMCA | VivaceTV',
  description: 'Procédure de signalement DMCA pour VivaceTV — signalement de contenu, informations requises et traitement des demandes.',
  alternates: { canonical: `${siteConfig.url}/dmca` },
  robots: { index: true, follow: true },
};

export default function DmcaPage() {
  return (
    <LegalPageLayout
      label="Légal"
      title="DMCA"
      subtitle="Procédure de signalement de contenu protégé par le droit d'auteur conformément au Digital Millennium Copyright Act."
      updatedAt="1er avril 2026"
      sections={[
        {
          heading: 'Respect des droits d\'auteur',
          paragraphs: [
            "VivaceTV respecte les droits de propriété intellectuelle et s'engage à traiter avec sérieux toute notification de violation du droit d'auteur soumise conformément au Digital Millennium Copyright Act (DMCA). Si vous êtes titulaire d'un droit d'auteur et estimez que des contenus accessibles via notre service portent atteinte à vos droits, veuillez nous contacter via la procédure décrite ci-dessous.",
          ],
        },
        {
          heading: 'Signalement de contenu',
          paragraphs: [
            "Si vous êtes titulaire d'un droit d'auteur ou son représentant autorisé et pensez qu'un contenu accessible via notre service porte atteinte à vos droits, vous pouvez nous soumettre une demande de retrait conformément au DMCA.",
            "VivaceTV prend au sérieux les questions de propriété intellectuelle et s'engage à traiter toute demande valide dans les meilleurs délais.",
          ],
        },
        {
          heading: 'Informations à fournir',
          paragraphs: [
            "Votre demande DMCA doit inclure les éléments suivants :",
            "1. L'identification précise de l'œuvre protégée par le droit d'auteur que vous estimez avoir été violée.",
            "2. La description précise du contenu litigieux et l'URL ou l'identifiant permettant de le localiser.",
            "3. Vos coordonnées complètes : nom, adresse postale, adresse email et numéro de téléphone.",
            "4. Une déclaration précisant que vous avez la conviction de bonne foi que l'utilisation du contenu n'est pas autorisée par le titulaire des droits, son représentant ou la loi.",
            "5. Une déclaration attestant, sous peine de parjure, que les informations fournies sont exactes et que vous êtes bien le titulaire des droits ou son représentant autorisé.",
            "6. Votre signature électronique ou physique.",
          ],
        },
        {
          heading: 'Traitement des demandes',
          paragraphs: [
            "VivaceTV s'engage à examiner toute demande DMCA dans un délai de 72 heures ouvrées suivant sa réception.",
            "En cas de demande valide, le contenu signalé sera désactivé ou supprimé conformément aux procédures applicables.",
            "VivaceTV se réserve le droit de rejeter toute demande incomplète, manifestement abusive ou formulée de mauvaise foi.",
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            "Les demandes DMCA doivent être envoyées par email à : support@vivacetv.com",
            "Objet de l'email : [DMCA] Signalement de contenu",
          ],
        },
        {
          heading: 'Avertissement',
          paragraphs: [
            "Toute déclaration intentionnellement inexacte dans une notification DMCA peut engager votre responsabilité civile et pénale. Veillez à ne soumettre des demandes que lorsque vous avez la conviction raisonnable et fondée que vos droits ont été violés.",
          ],
        },
      ]}
    />
  );
}
