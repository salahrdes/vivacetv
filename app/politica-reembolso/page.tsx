import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de reembolso | VivaceTV',
  description: 'Política de reembolso de VivaceTV — condiciones, plazos y procedimiento para las solicitudes de devolución.',
  alternates: { canonical: `${siteConfig.url}/politica-reembolso` },
  robots: { index: true, follow: true },
};

export default function PoliticaReembolsoPage() {
  return (
    <LegalPageLayout
      label="Legal"
      title="Política de reembolso"
      subtitle="Condiciones y procedimiento para las solicitudes de reembolso relacionadas con tu suscripción IPTV VivaceTV."
      updatedAt="1 de abril de 2026"
      sections={[
        {
          heading: 'Nuestro compromiso',
          paragraphs: [
            'VivaceTV hace todo lo posible para garantizar la satisfacción de sus clientes. Antes de cualquier compra, ofrecemos una prueba gratuita de 24 horas para asegurarnos de la compatibilidad del servicio con tu dispositivo y tu conexión. Si a pesar de nuestros esfuerzos de soporte no estás satisfecho en las condiciones descritas a continuación, examinamos cada solicitud de reembolso con atención y seriedad.',
          ],
        },
        {
          heading: 'Presentación',
          paragraphs: [
            'VivaceTV se compromete a prestar un servicio de calidad. Si encuentras un problema que nuestro equipo no consigue resolver, examinamos las solicitudes de reembolso caso por caso.',
            'Animamos a todos los nuevos clientes a utilizar la prueba gratuita de 24h disponible en nuestro sitio antes de cualquier compra.',
          ],
        },
        {
          heading: 'Solicitudes de reembolso',
          paragraphs: [
            'Las solicitudes de reembolso deben formularse por escrito, por correo electrónico a support@vivacetv.com, en un plazo de 48 horas desde la activación del servicio.',
            'Pasado este plazo, el servicio habiéndose consumido parcialmente, no se podrá conceder ningún reembolso salvo circunstancias excepcionales.',
          ],
        },
        {
          heading: 'Condiciones de elegibilidad',
          paragraphs: [
            'Una solicitud de reembolso puede aceptarse si: el servicio no funciona en absoluto en el dispositivo indicado al realizar el pedido, nuestro equipo de soporte no ha podido resolver el problema en 48 horas, no has utilizado la prueba gratuita de 24h antes de tu compra.',
            'Estas condiciones son acumulativas. Nuestro equipo evalúa cada situación individualmente.',
          ],
        },
        {
          heading: 'Casos no reembolsables',
          paragraphs: [
            'No se conceden reembolsos en los siguientes casos: cambio de opinión después de la activación y uso del servicio, problemas relacionados con la conexión a internet del usuario, incompatibilidad señalada tras un uso prolongado, suscripción expirada o parcialmente consumida más allá de 48h.',
          ],
        },
        {
          heading: 'Plazo de tramitación',
          paragraphs: [
            'Las solicitudes de reembolso elegibles se tramitan en un plazo de 5 a 10 días hábiles.',
            'El reembolso se efectúa por el mismo medio de pago utilizado al realizar el pedido, en la medida de lo posible.',
          ],
        },
        {
          heading: 'Contacto de soporte',
          paragraphs: [
            'Para cualquier solicitud de reembolso o pregunta relativa a nuestra política: support@vivacetv.com',
            'Nuestro equipo también está disponible por WhatsApp en el +44 747 661 4523 para cualquier asistencia.',
          ],
        },
      ]}
    />
  );
}
