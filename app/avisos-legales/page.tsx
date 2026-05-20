import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Avisos legales | VivaceTV',
  description: 'Avisos legales del sitio VivaceTV — editor, alojamiento, propiedad intelectual y datos personales.',
  alternates: { canonical: `${siteConfig.url}/avisos-legales` },
  robots: { index: true, follow: true },
};

export default function AvisosLegalesPage() {
  return (
    <LegalPageLayout
      label="Legal"
      title="Avisos legales"
      subtitle="Información legal relativa al editor del sitio y al servicio VivaceTV."
      updatedAt="1 de abril de 2026"
      sections={[
        {
          heading: 'Acerca de este documento',
          paragraphs: [
            'Conforme a la legislación aplicable en materia de servicios de la sociedad de la información, los presentes avisos legales precisan la identidad del editor del sitio vivacetv.com, las condiciones de alojamiento, así como los derechos y obligaciones de los usuarios. Constituyen un compromiso de transparencia ante nuestros usuarios y las autoridades competentes.',
          ],
        },
        {
          heading: 'Editor del sitio',
          paragraphs: [
            'El presente sitio es editado por VivaceTV, proveedor de servicios de streaming digital que opera en el marco de la legislación europea aplicable.',
            'Denominación: VivaceTV',
            'Contacto: support@vivacetv.com',
            'Servicio disponible en España y en los países de la Unión Europea.',
          ],
        },
        {
          heading: 'Contacto',
          paragraphs: [
            'Para cualquier solicitud relativa al sitio, a sus contenidos o a nuestro servicio, puedes contactarnos en la siguiente dirección: support@vivacetv.com',
            'Nuestro equipo responde en un plazo de 24 horas hábiles.',
          ],
        },
        {
          heading: 'Alojamiento',
          paragraphs: [
            'El sitio VivaceTV está alojado en un proveedor profesional que garantiza la disponibilidad, la seguridad y el cumplimiento de los requisitos del RGPD.',
            'La información relativa al proveedor de alojamiento está disponible bajo petición en support@vivacetv.com.',
          ],
        },
        {
          heading: 'Propiedad intelectual',
          paragraphs: [
            'El conjunto de elementos que constituyen este sitio (textos, gráficos, logotipos, iconos, imágenes, maquetación) son propiedad exclusiva de VivaceTV y están protegidos por las leyes españolas e internacionales sobre propiedad intelectual.',
            'Cualquier reproducción, representación, modificación o adaptación, total o parcial, por cualquier medio, sin autorización previa y expresa de VivaceTV, está estrictamente prohibida.',
          ],
        },
        {
          heading: 'Responsabilidad',
          paragraphs: [
            'VivaceTV hace todo lo posible para garantizar la exactitud y la actualización de la información difundida en este sitio, del que se reserva el derecho a corregir el contenido en cualquier momento.',
            'VivaceTV no puede garantizar la exhaustividad, exactitud o actualidad de la información publicada. Declina toda responsabilidad por cualquier daño derivado de una interrupción o indisponibilidad del sitio.',
          ],
        },
        {
          heading: 'Datos personales',
          paragraphs: [
            'VivaceTV recopila y trata los datos personales conforme al Reglamento General de Protección de Datos (RGPD) y la normativa española de protección de datos.',
            'Para cualquier solicitud relativa a tus datos personales (acceso, rectificación, supresión), contáctanos en support@vivacetv.com.',
            'Consulta nuestra Política de privacidad para más información.',
          ],
        },
        {
          heading: 'Derecho aplicable',
          paragraphs: [
            'Los presentes avisos legales se rigen por el derecho español. En caso de litigio, los tribunales españoles serán los únicos competentes.',
          ],
        },
      ]}
    />
  );
}
