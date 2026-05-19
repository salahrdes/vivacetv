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
    id: 'iptv-france',
    label: 'IPTV en France',
    items: [
      {
        question: "Qu'est-ce que l'IPTV ?",
        answer:
          "L'IPTV (Internet Protocol Television) est une technologie qui permet de diffuser des chaînes de télévision et du contenu vidéo via Internet, sans antenne ni câble. Vous accédez à des milliers de chaînes en direct, du contenu à la demande et du replay sur n'importe quel appareil connecté.",
      },
      {
        question: "L'IPTV est-il légal en France ?",
        answer:
          "L'IPTV en tant que technologie est parfaitement légale. Ce qui est illégal, c'est d'accéder à des contenus protégés par le droit d'auteur sans autorisation. VivaceTV est un service opéré de manière légitime, avec facturation officielle et accès aux contenus dans le respect du cadre légal applicable.",
      },
      {
        question: "Quelle connexion Internet faut-il pour l'IPTV ?",
        answer:
          "Pour une expérience optimale : 10 Mbps minimum pour du HD, 25 Mbps recommandés pour du 4K. Une connexion fibre optique est idéale pour éviter tout buffering. La stabilité de la connexion est aussi importante que la vitesse brute.",
      },
      {
        question: "Combien de chaînes sont disponibles avec VivaceTV ?",
        answer:
          "VivaceTV donne accès à plus de 20 000 chaînes : chaînes françaises (TF1, M6, France 2/3/4/5, Canal+, BFM TV…), chaînes internationales (arabes, anglaises, espagnoles, italiennes…), chaînes sportives (beIN Sports, Canal+ Sport, Eurosport…) et un catalogue VOD de films et séries.",
      },
      {
        question: "Quelle est la différence entre l'IPTV et Netflix ?",
        answer:
          "Netflix est un service SVoD (Streaming Vidéo à la Demande) proposant uniquement du contenu en replay. L'IPTV inclut les chaînes TV en direct (live), le replay, la VOD et le sport en temps réel — c'est une télévision complète via Internet, pas seulement une bibliothèque de films.",
      },
    ],
  },
  {
    id: 'abonnement',
    label: 'Abonnement IPTV',
    items: [
      {
        question: 'Comment souscrire à un abonnement IPTV France avec VivaceTV ?',
        answer:
          'Choisissez le forfait qui vous convient sur la page Abonnements, envoyez votre demande, et notre équipe vous contacte via WhatsApp pour finaliser votre abonnement. Le processus prend moins de 5 minutes.',
      },
      {
        question: 'Dois-je créer un compte pour commander ?',
        answer:
          "Non, aucun compte client n'est nécessaire. Il vous suffit de sélectionner votre forfait et de contacter notre équipe via WhatsApp. Pas d'inscription, pas de mot de passe, pas d'engagement.",
      },
      {
        question: 'Quel forfait IPTV choisir ?',
        answer:
          "Si vous découvrez le service, commencez par un test gratuit 24h ou le forfait Bronze 3 mois. Pour un usage régulier, le forfait Gold 12 mois offre le meilleur rapport qualité/prix à moins de 3,75 €/mois avec accès 4K et 8K.",
      },
      {
        question: 'Puis-je utiliser VivaceTV sur plusieurs appareils en même temps ?',
        answer:
          "Chaque abonnement est prévu pour un flux simultané. Si vous souhaitez utiliser VivaceTV sur plusieurs appareils en même temps, contactez notre support pour une solution adaptée.",
      },
      {
        question: 'Puis-je renouveler mon abonnement à son expiration ?',
        answer:
          "Oui, le renouvellement se fait simplement via WhatsApp. La majorité de nos clients renouvellent directement à l'expiration avec le même processus rapide.",
      },
    ],
  },
  {
    id: 'appareils',
    label: 'Appareils compatibles',
    items: [
      {
        question: 'Quels appareils sont compatibles avec VivaceTV ?',
        answer:
          "VivaceTV fonctionne sur Smart TV Samsung et LG, Amazon Fire TV Stick, Android (téléphone, tablette, TV Box), iPhone et iPad, PC Windows, Mac, Apple TV et Roku — via des applications compatibles comme IPTV Smarters Pro.",
      },
      {
        question: 'Puis-je utiliser VivaceTV sur Smart TV ?',
        answer:
          "Oui. Pour les Smart TV Samsung et LG, téléchargez IPTV Smarters Pro depuis le store de votre TV. Notre support peut vous guider si votre modèle nécessite une configuration spécifique.",
      },
      {
        question: 'VivaceTV fonctionne-t-il sur iPhone et iPad ?',
        answer:
          "Oui, en téléchargeant IPTV Smarters Pro ou GSE Smart IPTV depuis l'App Store. Les deux applications sont compatibles iOS 14 et versions ultérieures.",
      },
      {
        question: 'Puis-je utiliser VivaceTV sur PC ou Mac ?',
        answer:
          "Oui. Sur Windows, téléchargez IPTV Smarters Pro depuis le Microsoft Store. Sur Mac, utilisez IPTV Smarters Pro ou GSE Smart IPTV depuis l'App Store Mac. VLC Media Player est aussi une alternative gratuite avec un lien M3U.",
      },
    ],
  },
  {
    id: 'installation',
    label: 'Installation',
    items: [
      {
        question: 'Comment se passe l\'activation ?',
        answer:
          "Après confirmation de votre demande via WhatsApp, notre équipe vous envoie vos identifiants (URL du serveur, nom d'utilisateur, mot de passe) en moins de 5 minutes. Vous les entrez dans l'application IPTV de votre choix.",
      },
      {
        question: 'Quelle application utiliser pour regarder VivaceTV ?',
        answer:
          "IPTV Smarters Pro est l'application que nous recommandons — elle est gratuite, disponible sur toutes les plateformes et très stable. TiviMate est une excellente alternative sur Firestick et Android TV.",
      },
      {
        question: 'Combien de temps prend l\'installation ?',
        answer:
          "L'installation prend généralement moins de 5 minutes. Si vous rencontrez des difficultés, notre équipe est disponible via WhatsApp pour vous guider en temps réel.",
      },
      {
        question: 'Puis-je obtenir de l\'aide pour l\'installation ?',
        answer:
          "Oui, l'assistance à l'installation est incluse dans votre abonnement. Contactez notre support via WhatsApp et un conseiller vous guidera pas à pas selon votre appareil.",
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    items: [
      {
        question: 'Comment contacter le support VivaceTV ?',
        answer:
          "Le support est disponible 24h/24 et 7j/7 via WhatsApp au +44 747 661 4523. Vous pouvez aussi envoyer un message depuis la page Contact du site. Réponse garantie sous 15 minutes.",
      },
      {
        question: 'Quelle qualité d\'image est disponible ?',
        answer:
          "Selon votre forfait, vous accédez à du contenu en SD, HD, 4K Ultra HD et jusqu'à 8K. La qualité effective dépend aussi de votre connexion Internet (25 Mbps minimum recommandé pour le 4K).",
      },
      {
        question: 'Que faire si mon flux est instable ou coupe ?',
        answer:
          "En cas de coupures, vérifiez d'abord votre connexion Internet, redémarrez l'application et votre appareil. Si le problème persiste, contactez notre support via WhatsApp — nous diagnostiquons et résolvons la plupart des problèmes en quelques minutes.",
      },
    ],
  },
  {
    id: 'paiement',
    label: 'Paiement et demande',
    items: [
      {
        question: 'Le paiement en ligne est-il disponible ?',
        answer:
          "Le paiement en ligne sera disponible prochainement. Pour l'instant, notre équipe vous contacte via WhatsApp pour finaliser le paiement selon les modes disponibles.",
      },
      {
        question: 'Y a-t-il un engagement ou des frais cachés ?',
        answer:
          "Non. Tous nos forfaits sont à paiement unique sans reconduction automatique. Aucun abonnement récurrent, aucun frais caché. Vous payez une seule fois pour la durée choisie.",
      },
      {
        question: 'Puis-je obtenir un remboursement ?',
        answer:
          "Nous proposons une politique de remboursement sous conditions. Consultez notre page Politique de remboursement pour connaître les critères d'éligibilité ou contactez notre support.",
      },
      {
        question: 'Le test gratuit 24h est-il vraiment gratuit ?',
        answer:
          "Oui, totalement. Le test gratuit 24h ne nécessite aucun paiement, aucune carte bancaire, aucun engagement. Vous testez le service sur votre appareil avant de décider.",
      },
    ],
  },
];
