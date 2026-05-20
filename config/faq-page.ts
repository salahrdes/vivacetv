/** ─── Extended FAQ for the dedicated /faq page ───────────────────────────
 *  Extends the homepage faqItems with categories and additional Q&As.
 *  TODO (admin): Connect to the admin dashboard FAQ manager.
 * ─────────────────────────────────────────────────────────────────────────── */

export type FaqCategory = {
  id: string;
  label: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'iptv-espana',
    label: 'IPTV en España',
    items: [
      {
        question: '¿Qué es el IPTV?',
        answer:
          'El IPTV (Internet Protocol Television) es una tecnología que permite distribuir canales de televisión y contenido de vídeo a través de Internet, sin antena ni cable. Tienes acceso a miles de canales en directo, contenido bajo demanda y replay en cualquier dispositivo conectado.',
      },
      {
        question: '¿Es legal el IPTV en España?',
        answer:
          'El IPTV como tecnología es perfectamente legal. Lo que es ilegal es acceder a contenidos protegidos por derechos de autor sin autorización. VivaceTV es un servicio gestionado de forma legítima, con facturación oficial y acceso a contenidos dentro del marco legal aplicable.',
      },
      {
        question: '¿Qué conexión a Internet se necesita para el IPTV?',
        answer:
          'Para una experiencia óptima: 10 Mbps mínimo para HD, 25 Mbps recomendados para 4K. Una conexión de fibra óptica es ideal para evitar el buffering. La estabilidad de la conexión es tan importante como la velocidad bruta.',
      },
      {
        question: '¿Cuántos canales hay disponibles con VivaceTV?',
        answer:
          'VivaceTV da acceso a más de 22 000 canales: canales españoles (La 1, La 2, Antena 3, Cuatro, Telecinco, La Sexta, Canal+, beIN Sports…), canales internacionales (árabes, ingleses, franceses, italianos…), canales deportivos (beIN Sports, Eurosport, DAZN…) y un catálogo VOD de películas y series.',
      },
      {
        question: '¿Cuál es la diferencia entre IPTV y Netflix?',
        answer:
          'Netflix es un servicio SVoD (Streaming de Vídeo bajo Demanda) que ofrece únicamente contenido en diferido. El IPTV incluye canales de TV en directo (live), replay, VOD y deporte en tiempo real — es una televisión completa a través de Internet, no solo una biblioteca de películas.',
      },
    ],
  },
  {
    id: 'suscripcion',
    label: 'Suscripción IPTV',
    items: [
      {
        question: '¿Cómo contratar una suscripción IPTV en España con VivaceTV?',
        answer:
          'Elige el plan que más te convenga en la página de Suscripciones, envía tu solicitud y nuestro equipo te contactará por WhatsApp para finalizar tu suscripción. El proceso dura menos de 5 minutos.',
      },
      {
        question: '¿Necesito crear una cuenta para hacer el pedido?',
        answer:
          'No, no es necesaria ninguna cuenta de cliente. Solo tienes que seleccionar tu plan y contactar con nuestro equipo por WhatsApp. Sin registro, sin contraseña, sin compromisos.',
      },
      {
        question: '¿Qué plan IPTV elegir?',
        answer:
          'Si descubres el servicio por primera vez, empieza con una prueba gratuita de 24h o el plan Bronze de 3 meses. Para un uso habitual, el plan Gold de 12 meses ofrece la mejor relación calidad/precio a menos de 3,75 €/mes con acceso 4K y 8K.',
      },
      {
        question: '¿Puedo usar VivaceTV en varios dispositivos al mismo tiempo?',
        answer:
          'Cada suscripción está pensada para una transmisión simultánea. Si deseas usar VivaceTV en varios dispositivos a la vez, contacta con nuestro soporte para una solución adaptada.',
      },
      {
        question: '¿Puedo renovar mi suscripción al vencimiento?',
        answer:
          'Sí, la renovación se realiza fácilmente por WhatsApp. La mayoría de nuestros clientes renuevan directamente al vencimiento con el mismo proceso rápido.',
      },
    ],
  },
  {
    id: 'dispositivos',
    label: 'Dispositivos compatibles',
    items: [
      {
        question: '¿Qué dispositivos son compatibles con VivaceTV?',
        answer:
          'VivaceTV funciona en Smart TV Samsung y LG, Amazon Fire TV Stick, Android (teléfono, tableta, TV Box), iPhone y iPad, PC Windows, Mac, Apple TV y Roku — a través de aplicaciones compatibles como IPTV Smarters Pro.',
      },
      {
        question: '¿Puedo usar VivaceTV en una Smart TV?',
        answer:
          'Sí. Para Smart TV Samsung y LG, descarga IPTV Smarters Pro desde la tienda de tu TV. Nuestro soporte puede guiarte si tu modelo requiere una configuración específica.',
      },
      {
        question: '¿VivaceTV funciona en iPhone y iPad?',
        answer:
          'Sí, descargando IPTV Smarters Pro o GSE Smart IPTV desde el App Store. Ambas aplicaciones son compatibles con iOS 14 y versiones posteriores.',
      },
      {
        question: '¿Puedo usar VivaceTV en PC o Mac?',
        answer:
          'Sí. En Windows, descarga IPTV Smarters Pro desde la Microsoft Store. En Mac, utiliza IPTV Smarters Pro o GSE Smart IPTV desde el App Store de Mac. VLC Media Player es también una alternativa gratuita con un enlace M3U.',
      },
    ],
  },
  {
    id: 'instalacion',
    label: 'Instalación',
    items: [
      {
        question: '¿Cómo funciona la activación?',
        answer:
          'Tras confirmar tu solicitud por WhatsApp, nuestro equipo te envía tus credenciales (URL del servidor, nombre de usuario, contraseña) en menos de 5 minutos. Las introduces en la aplicación IPTV de tu elección.',
      },
      {
        question: '¿Qué aplicación usar para ver VivaceTV?',
        answer:
          'IPTV Smarters Pro es la aplicación que recomendamos — es gratuita, está disponible en todas las plataformas y es muy estable. TiviMate es una excelente alternativa en Firestick y Android TV.',
      },
      {
        question: '¿Cuánto tarda la instalación?',
        answer:
          'La instalación dura generalmente menos de 5 minutos. Si tienes alguna dificultad, nuestro equipo está disponible por WhatsApp para guiarte en tiempo real.',
      },
      {
        question: '¿Puedo obtener ayuda con la instalación?',
        answer:
          'Sí, la asistencia de instalación está incluida en tu suscripción. Contacta con nuestro soporte por WhatsApp y un asesor te guiará paso a paso según tu dispositivo.',
      },
    ],
  },
  {
    id: 'soporte',
    label: 'Soporte',
    items: [
      {
        question: '¿Cómo contactar con el soporte de VivaceTV?',
        answer:
          'El soporte está disponible 24h/24 y 7 días a la semana por WhatsApp en el +44 747 661 4523. También puedes enviar un mensaje desde la página de Contacto del sitio. Respuesta garantizada en 15 minutos.',
      },
      {
        question: '¿Qué calidad de imagen está disponible?',
        answer:
          'Según tu plan, tienes acceso a contenido en SD, HD, 4K Ultra HD y hasta 8K. La calidad efectiva también depende de tu conexión a Internet (mínimo 25 Mbps recomendado para 4K).',
      },
      {
        question: '¿Qué hacer si mi señal es inestable o se corta?',
        answer:
          'En caso de cortes, comprueba primero tu conexión a Internet, reinicia la aplicación y tu dispositivo. Si el problema persiste, contacta con nuestro soporte por WhatsApp — diagnosticamos y resolvemos la mayoría de los problemas en pocos minutos.',
      },
    ],
  },
  {
    id: 'pago',
    label: 'Pago y pedido',
    items: [
      {
        question: '¿Está disponible el pago en línea?',
        answer:
          'El pago en línea estará disponible próximamente. Por el momento, nuestro equipo te contacta por WhatsApp para finalizar el pago según los métodos disponibles.',
      },
      {
        question: '¿Hay compromiso o cargos ocultos?',
        answer:
          'No. Todos nuestros planes son de pago único sin renovación automática. Sin suscripción recurrente, sin cargos ocultos. Pagas una sola vez por la duración elegida.',
      },
      {
        question: '¿Puedo obtener un reembolso?',
        answer:
          'Ofrecemos una política de reembolso bajo ciertas condiciones. Consulta nuestra página de Política de reembolso para conocer los criterios de elegibilidad o contacta con nuestro soporte.',
      },
      {
        question: '¿La prueba gratuita de 24h es realmente gratuita?',
        answer:
          'Sí, totalmente. La prueba gratuita de 24h no requiere ningún pago, ninguna tarjeta bancaria, ningún compromiso. Pruebas el servicio en tu dispositivo antes de decidir.',
      },
    ],
  },
];
