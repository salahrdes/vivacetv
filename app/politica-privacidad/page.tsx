import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Política de privacidad | VivaceTV',
  description: 'Política de privacidad de VivaceTV — recopilación, uso y protección de tus datos personales.',
  alternates: { canonical: `${siteConfig.url}/politica-privacidad` },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout
      label="Legal"
      title="Política de privacidad"
      subtitle="Cómo VivaceTV recopila, utiliza y protege tus datos personales conforme al RGPD."
      updatedAt="1 de abril de 2026"
      sections={[
        {
          heading: 'Compromiso de privacidad',
          paragraphs: [
            'La protección de tus datos personales es una prioridad para VivaceTV. Solo recopilamos la información estrictamente necesaria para prestar nuestro servicio IPTV y nunca la compartimos con fines comerciales. Esta política explica qué datos tratamos, con qué propósito y cómo puedes ejercer tus derechos conforme al Reglamento General de Protección de Datos (RGPD).',
          ],
        },
        {
          heading: 'Datos recopilados',
          paragraphs: [
            'VivaceTV recopila únicamente los datos estrictamente necesarios para la prestación de su servicio. Estos datos pueden incluir: nombre o apellido, dirección de correo electrónico, número de teléfono de WhatsApp, tipo de dispositivo utilizado.',
            'No recopilamos datos bancarios, número de seguridad social ni datos sensibles en el sentido del RGPD.',
          ],
        },
        {
          heading: 'Uso de los datos',
          paragraphs: [
            'Los datos recopilados se utilizan exclusivamente para: procesar y confirmar tu pedido, proveer y activar tu acceso al servicio, contactarte para el soporte técnico, mejorar la calidad de nuestro servicio.',
            'No utilizamos tus datos para marketing no solicitado ni los vendemos a terceros.',
          ],
        },
        {
          heading: 'Formularios de contacto y pedido',
          paragraphs: [
            'La información introducida en los formularios del sitio (contacto, prueba gratis) se utiliza únicamente para responder a tu solicitud.',
            'Esta información no se conserva más allá del tiempo necesario para el tratamiento de tu solicitud, salvo consentimiento expreso de tu parte.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Nuestro sitio puede utilizar cookies técnicas necesarias para su correcto funcionamiento. Estas cookies no recopilan información personal identificable.',
            'No se utiliza ninguna cookie publicitaria ni de rastreo de terceros sin tu consentimiento.',
          ],
        },
        {
          heading: 'Conservación de los datos',
          paragraphs: [
            'Tus datos se conservan durante la vigencia de tu suscripción y hasta 12 meses después de su expiración, salvo solicitud de eliminación por tu parte.',
            'Transcurrido ese plazo, tus datos son eliminados o anonimizados.',
          ],
        },
        {
          heading: 'Compartición de datos',
          paragraphs: [
            'VivaceTV no comparte tus datos personales con ningún tercero con fines comerciales.',
            'Tus datos pueden compartirse con subcontratistas técnicos (alojamiento, seguridad) en estricto cumplimiento de las obligaciones del RGPD, mediante contratos de tratamiento de datos.',
          ],
        },
        {
          heading: 'Seguridad',
          paragraphs: [
            'VivaceTV implementa medidas técnicas y organizativas adecuadas para proteger tus datos contra cualquier acceso no autorizado, pérdida, destrucción o divulgación.',
          ],
        },
        {
          heading: 'Derechos de los usuarios',
          paragraphs: [
            'Conforme al RGPD, dispones de los siguientes derechos sobre tus datos personales: derecho de acceso, derecho de rectificación, derecho de supresión, derecho a la portabilidad, derecho de oposición.',
            'Para ejercer estos derechos, contáctanos en support@vivacetv.com. Responderemos en un plazo de 30 días.',
          ],
        },
        {
          heading: 'Contacto',
          paragraphs: [
            'Para cualquier pregunta relativa a esta política de privacidad o al ejercicio de tus derechos: support@vivacetv.com',
            'También tienes derecho a presentar una reclamación ante la AEPD (Agencia Española de Protección de Datos).',
          ],
        },
      ]}
    />
  );
}
