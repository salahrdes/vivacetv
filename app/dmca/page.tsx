import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'DMCA | VivaceTV',
  description: 'Procedimiento de notificación DMCA para VivaceTV — notificación de contenido, información requerida y tramitación de solicitudes.',
  alternates: { canonical: `${siteConfig.url}/dmca` },
  robots: { index: true, follow: true },
};

export default function DmcaPage() {
  return (
    <LegalPageLayout
      label="Legal"
      title="DMCA"
      subtitle="Procedimiento de notificación de contenido protegido por derechos de autor conforme al Digital Millennium Copyright Act."
      updatedAt="1 de abril de 2026"
      sections={[
        {
          heading: 'Respeto de los derechos de autor',
          paragraphs: [
            'VivaceTV respeta los derechos de propiedad intelectual y se compromete a tratar con seriedad cualquier notificación de infracción de derechos de autor presentada conforme al Digital Millennium Copyright Act (DMCA). Si eres titular de derechos de autor y consideras que contenidos accesibles a través de nuestro servicio vulneran tus derechos, contáctanos mediante el procedimiento descrito a continuación.',
          ],
        },
        {
          heading: 'Notificación de contenido',
          paragraphs: [
            'Si eres titular de derechos de autor o su representante autorizado y crees que un contenido accesible a través de nuestro servicio vulnera tus derechos, puedes presentarnos una solicitud de retirada conforme al DMCA.',
            'VivaceTV toma en serio las cuestiones de propiedad intelectual y se compromete a tramitar cualquier solicitud válida en el menor tiempo posible.',
          ],
        },
        {
          heading: 'Información a proporcionar',
          paragraphs: [
            'Tu solicitud DMCA debe incluir los siguientes elementos:',
            '1. La identificación precisa de la obra protegida por derechos de autor que consideras infringida.',
            '2. La descripción precisa del contenido en litigio y la URL o el identificador que permita localizarlo.',
            '3. Tus datos de contacto completos: nombre, dirección postal, dirección de correo electrónico y número de teléfono.',
            '4. Una declaración indicando que tienes la convicción de buena fe de que el uso del contenido no está autorizado por el titular de los derechos, su representante o la ley.',
            '5. Una declaración que certifica, bajo pena de perjurio, que la información proporcionada es exacta y que eres el titular de los derechos o su representante autorizado.',
            '6. Tu firma electrónica o física.',
          ],
        },
        {
          heading: 'Tramitación de las solicitudes',
          paragraphs: [
            'VivaceTV se compromete a examinar cualquier solicitud DMCA en un plazo de 72 horas hábiles desde su recepción.',
            'En caso de solicitud válida, el contenido notificado será desactivado o eliminado conforme a los procedimientos aplicables.',
            'VivaceTV se reserva el derecho a rechazar cualquier solicitud incompleta, manifiestamente abusiva o formulada de mala fe.',
          ],
        },
        {
          heading: 'Contacto',
          paragraphs: [
            'Las solicitudes DMCA deben enviarse por correo electrónico a: support@vivacetv.com',
            'Asunto del correo: [DMCA] Notificación de contenido',
          ],
        },
        {
          heading: 'Advertencia',
          paragraphs: [
            'Cualquier declaración intencionadamente inexacta en una notificación DMCA puede acarrear responsabilidad civil y penal. Asegúrate de presentar solicitudes únicamente cuando tengas la convicción razonable y fundada de que tus derechos han sido vulnerados.',
          ],
        },
      ]}
    />
  );
}
