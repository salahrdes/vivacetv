import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Términos y condiciones | VivaceTV',
  description: 'Consulta los términos y condiciones del servicio IPTV VivaceTV.',
  alternates: { canonical: `${siteConfig.url}/terminos-condiciones` },
  robots: { index: true, follow: true },
};

export default function TerminosCondicionesPage() {
  return (
    <LegalPageLayout
      label="Legal"
      title="Términos y condiciones"
      subtitle="Condiciones generales que rigen el uso del servicio VivaceTV y la relación entre el proveedor y sus clientes."
      updatedAt="1 de abril de 2026"
      sections={[
        {
          heading: 'Presentación',
          paragraphs: [
            'Los presentes Términos y Condiciones de Uso (TCU) definen las normas de acceso y uso del servicio IPTV VivaceTV. Al suscribirte o utilizar el acceso de prueba gratuito, el usuario reconoce haber leído estas condiciones y las acepta sin reservas. VivaceTV se reserva el derecho de modificarlas en cualquier momento; las nuevas condiciones entran en vigor en la fecha de su publicación.',
          ],
        },
        {
          heading: 'Objeto',
          paragraphs: [
            'Los presentes Términos y Condiciones de Uso tienen por objeto definir las modalidades y condiciones en las que VivaceTV presta sus servicios de streaming IPTV, así como los derechos y obligaciones de las partes.',
            'Al utilizar el servicio VivaceTV, aceptas sin reservas las presentes condiciones generales.',
          ],
        },
        {
          heading: 'Descripción del servicio',
          paragraphs: [
            'VivaceTV es un servicio de acceso a flujos de contenido audiovisual (canales de televisión, películas, series) a través de Internet, accesible en los dispositivos compatibles.',
            'El servicio está disponible en varias modalidades (planes) cuyas características se describen en la página de Suscripciones del sitio.',
          ],
        },
        {
          heading: 'Pedido',
          paragraphs: [
            'El pedido se realiza a través de WhatsApp o el formulario de contacto disponible en el sitio. No se requiere ninguna cuenta de cliente para realizar un pedido.',
            'Tras recibir la solicitud, nuestro equipo se pone en contacto con el cliente para confirmar el pedido y finalizar las modalidades de pago.',
          ],
        },
        {
          heading: 'Activación del servicio',
          paragraphs: [
            'La activación del servicio se produce tras la confirmación del pago. El cliente recibe sus credenciales de acceso (URL del servidor, nombre de usuario, contraseña) por WhatsApp.',
            'La activación se realiza generalmente en un plazo inferior a 5 minutos durante el horario de disponibilidad de nuestro equipo.',
          ],
        },
        {
          heading: 'Responsabilidad del usuario',
          paragraphs: [
            'El cliente se compromete a utilizar el servicio respetando las leyes vigentes en su país de residencia.',
            'El cliente es responsable de la confidencialidad de sus credenciales de acceso. Cualquier uso no autorizado de la cuenta es responsabilidad exclusiva del cliente.',
            'Está prohibido compartir, revender o redistribuir los accesos proporcionados por VivaceTV.',
          ],
        },
        {
          heading: 'Calidad del servicio',
          paragraphs: [
            'VivaceTV se esfuerza por prestar un servicio de calidad óptima. La calidad de imagen y la estabilidad pueden variar según la conexión a internet del usuario, el dispositivo utilizado y las condiciones técnicas de la red.',
            'VivaceTV no garantiza una disponibilidad permanente e ininterrumpida del servicio.',
          ],
        },
        {
          heading: 'Soporte',
          paragraphs: [
            'Nuestro equipo de soporte está disponible 24h/24 por WhatsApp para ayudar a los clientes en la instalación, configuración y resolución de problemas técnicos.',
          ],
        },
        {
          heading: 'Pago',
          paragraphs: [
            'El pago se realiza por los medios acordados con nuestro equipo durante la confirmación del pedido.',
            'Los precios mostrados en el sitio están en euros e incluyen impuestos, salvo indicación contraria.',
            'Toda suscripción pagada es definitiva, sujeta a nuestra política de reembolso.',
          ],
        },
        {
          heading: 'Cancelación',
          paragraphs: [
            'Las suscripciones son de duración determinada. Finalizan automáticamente al expirar el período contratado sin renovación automática.',
            'VivaceTV no aplica renovación tácita en ninguna de sus suscripciones.',
          ],
        },
        {
          heading: 'Modificación de las condiciones',
          paragraphs: [
            'VivaceTV se reserva el derecho de modificar los presentes términos y condiciones en cualquier momento. Las nuevas condiciones entran en vigor desde su publicación en el sitio.',
          ],
        },
        {
          heading: 'Contacto',
          paragraphs: [
            'Para cualquier pregunta relativa a los presentes términos y condiciones: support@vivacetv.com',
          ],
        },
      ]}
    />
  );
}
