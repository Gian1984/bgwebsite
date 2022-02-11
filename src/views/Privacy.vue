<template>
  <div class="bg-gray-50" id="header">
    <div class="max-w-7xl mx-auto py-32 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gold sm:text-4xl">
          Artexa Privacy Policy and Cookie Policy
        </h2>
        <dl class="mt-20 mb-20 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="tier in privacy.tiers" :key="tier.title" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400 text-artexa-teal-400">
                <span class="font-medium text-artexa-teal-400">
                  {{ tier.title }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-bord">
                {{ tier.description }}
              </p>
              <ul role="list" class="mt-6 space-y-6">
                <li v-for="feature in tier.features" :key="feature" class="flex">
                  <ChevronRightIcon class="flex-shrink-0 w-6 h-6 text-rose-500" aria-hidden="true" />
                  <span class="ml-3 text-gray-500">{{ feature }}</span>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/outline'

const privacy = {
  tiers: [
    {
      title: '1. Parties et Objet',
      description: 'Artexa agency établit la présente Politique de confidentialité dont l\'objet est d\'informer en toute transparence les Utilisateurs du site internet hébergé à l\'adresse suivante : www.artexa.agency, (ci-après le "Site"), de la manière dont les données personnelles sont récoltées et traitées par Artexa agency. Le terme "Utilisateur" fait référence à tout utilisateur, soit toute personne physique ou morale, qui visite ou interagit d\'une quelconque manière avec le Site. A ce titre, Artexa agency détermine tous les moyens et finalités techniques, juridiques et organisationnelles du traitement des données personnelles des Utilisateurs. Artexa agency s\'engage à cet effet à prendre toutes les mesures nécessaires pour garantir un traitement des données personnelles conforme à la loi du 30 juillet 2018, relative à la protection des personnes physiques à l\'égard des traitements des données à caractère personnel (ci-après, "la Loi") et au Règlement européen du 26 avril 2016 relatif à la protection des données des personnes physiques à l\'égard du traitement des données à caractère personnel et à la libre circulation de ces données (ci-après le "Règlement"). Artexa agency est libre de choisir toute personne physique ou morale qui traite les données personnelles des utilisateurs à sa demande et pour son compte (ci-après le "Sous-traitant"). Le cas échéant, Artexa agency s\'engage à sélectionner un Sous-traitant offrant des garanties suffisantes quant aux mesures de sécurité techniques et organisationnelles du traitement des données personnelles, au regard de la Loi et du Règlement.\n',
      features: [
          'BG Agency SPRLs (ci-après "Artexa agency" ou le "Responsable du Traitement")',
          'Rue principale 34, L8814 bigonville',
          'BCE / TVA : LU ????.???.???',
          'Téléphone : ???',
        ],
    },
    {
      title: '2. Traitement des données personnelles',
      description: 'L\'utilisation du Site par les Utilisateurs pourra entraîner la communication de données personnelles. Le traitement de ces données par Artexa agency, en sa qualité de responsable du traitement, ou par les prestataires agissant au nom et pour le compte de Artexa agency, sera conforme à la Loi et au Règlement. Les données à caractère personnel seront traitées par Artexa agency, conformément aux finalités citées plus bas, via: le partage de contenu gratuit\n',
      features: [
      ],
    },
    {
      title: '3. Finalité du traitement des données personnelles',
      description: 'Conformément à l\'article 13 du Règlement, les finalités du traitement des données personnelles sont communiquées à l\'Utilisateur et sont les suivantes :',
      features: [
        'Assurer l\'exécution des services proposés et convenus sur le Site;',
        'Assurer le contrôle de l\'exécution des services proposés ;',
        'Effectuer des activités de marketing et d\'informations promotionnelles après consentement préalable de l\'Utilisateur et jusqu\'à la révocation de ce consentement, par exemple l\'envoi de promotions sur les produits et services du Responsable du Traitement; Téléphone : ???',
        'Répondre aux questions de l\'Utilisateur ;',
        'Réaliser des statistiques afin d\'améliorer le Site internet, les services proposés et l\'organisation interne de fonctionnement ;',
        'Améliorer la qualité du Site et des produits et/ou services proposés par le Responsable du Traitement ;',
        'Permettre une meilleure identification des centres d\'intérêt de l\'Utilisateur.\n',
      ],
    },
    {
      title: '4. Données personnelles susceptibles d\'être traitées',
      description: 'L\'Utilisateur consent, lors de la visite et lors de l\'utilisation du Site, que Artexa agency recueille et traite, selon les modalités et principes décrits dans la présente Politique de confidentialité, les données à caractère personnel suivantes :',
      features: [
        'Les informations des Utilisateurs qu\'ils donnent à des fins contractuelles et pour permettre la bonne exécution des obligations réciproques, à savoir le nom, prénom, adresse, numéro IBAN et données bancaires,... ; et plus généralement, toute information volontairement donnée par l\'Utilisateur;',
        'Les informations des Utilisateurs en remplissant des formulaire ou en contactant par téléphone, adresse électronique ou autre moyen, par exemple le nom, l\'adresse, l\'adresse électronique et le numéro de téléphone des Utilisateurs.',
        'En ce qui concerne chacune des visites des utilisateurs sur le Site, les informations automatiquement recueillies sont;\n',
        'L\'adresse IP, le type et le modèle de navigateur, le fuseau horaire, le système d\'exploitation;\n',
        'L\'ensemble de l\'information concernant les pages que l\'Utilisateur a consultées sur le Site, notamment l\'URL, le temps de navigation...'
      ],
    },
    {
      title: '5. Consentement',
      description: 'L\'Utilisateur consent, lors de la visite et lors de l\'utilisation du Site, que Artexa agency recueille et traite, selon les modalités et principes décrits dans la présente Politique de confidentialité, les données à caractère personnel suivantes :',
      features: [
        'Les informations des Utilisateurs qu\'ils donnent à des fins contractuelles et pour permettre la bonne exécution des obligations réciproques, à savoir le nom, prénom, adresse, numéro IBAN et données bancaires,... ; et plus généralement, toute information volontairement donnée par l\'Utilisateur;',
        'Les informations des Utilisateurs en remplissant des formulaire ou en contactant par téléphone, adresse électronique ou autre moyen, par exemple le nom, l\'adresse, l\'adresse électronique et le numéro de téléphone des Utilisateurs.',
        'En ce qui concerne chacune des visites des utilisateurs sur le Site, les informations automatiquement recueillies sont;\n',
        'L\'adresse IP, le type et le modèle de navigateur, le fuseau horaire, le système d\'exploitation;\n',
        'L\'ensemble de l\'information concernant les pages que l\'Utilisateur a consultées sur le Site, notamment l\'URL, le temps de navigation...'
      ],
    },
    {
      title: '6. Durée de conservation des données personnelles des Utilisateurs',
      description: 'Conformément à l\'article 13 §2 du Règlement et de la Loi, le Responsable du Traitement ne conserve les données à caractère personnel que pendant le temps raisonnablement nécessaire pour permettre l\'accomplissement des finalités pour lesquelles elles sont traitées. Cette durée est dans tous les cas inférieure à : 5 ans\n',
      features: [
      ],
    },
    {
      title: '7. Destinataires des données et divulgation à des tiers\n',
      description: 'Les données personnelles peuvent être transmises aux préposés, collaborateurs, sous-traitants ou fournisseurs de Artexa agency qui offrent des garanties de sécurité des données adéquates, et qui collaborent avec le Artexa agency dans le cadre de la commercialisation de produits ou de la fourniture de services. Ils agissent sous l\'autorité directe de Artexa agency, et sont notamment responsables de recueillir, de traiter ou de sous-traiter ces données. Dans tous les cas, les destinataires des données et ceux à qui ces données ont été divulguées respectent le contenu de la présente Politique de confidentialité. Artexa agency assure qu\'ils traiteront ces données aux seules finalités prévues, de façon discrète et sécurisée. Dans l\'hypothèse où les données seraient divulguées à des tiers à des fins de marketing direct ou de prospection, l\'Utilisateur en sera préalablement informé pour qu\'il exprime son consentement à l\'utilisation de ces données personnels.\n',
      features: [
      ],
    },
    {
      title: '8. Droits des Utilisateurs',
      description: 'A tout moment, l\'Utilisateur peut exercer ses droits en envoyant un message par courrier électronique à l\'adresse suivante : info@artexa.agency, ou une lettre par voie postale adressée, en joignant une copie de sa carte d\'identité à l\'adresse suivante : Rue de ransbeek 230, 1120 Neder-Over-Heembeek.',
      features: [
      ],
    },
    {
      title: '9. Droit d\'accès',
      description: 'Le Responsable du Traitement peut exiger le paiement de frais raisonnables basés sur les coûts administratifs pour toute copie supplémentaire demandée par l\'Utilisateur. Lorsque l\'Utilisateur introduit cette demande par voie électronique (par le biais de l\'adresse électronique par exemple), les informations sont fournies sous une forme électronique d\'usage courant, à moins que l\'Utilisateur ne demande qu\'il en soit autrement. A tout moment, l\'Utilisateur peut exercer ses droits en envoyant un message par courrier électronique à l\'adresse suivante : info@artexa.agency, ou une lettre par voie postale adressée, en joignant une copie de sa carte d\'identité à l\'adresse suivante : Rue de ransbeek 230, 1120 Neder-Over-Heembeek. Conformément à l\'article 15 du Règlement, Artexa agency garantit le droit d\'accès à l\'Utilisateur à ses données personnelles. L\'Utilisateur a le droit d\'obtenir l\'accès auxdites données à caractère personnel ainsi que les informations suivantes:\n',
      features: [
          'Les final ités du traitement ;',
          'Les catégories de données à caractère personnel concernées ;',
          'Les destinataires ou catégories de destinataires auxquels les données à caractère personnel ont été ou seront communiquées, en particulier les destinataires qui sont établis dans des pays tiers ou les organisations internationales ;',
          'Lorsque cela est possible, la durée de conservation des données à caractère personnel envisagée ou, lorsque ce n\'est pas possible, les critères utilisés pour déterminer cette durée ;\n',
          'L\'existence d\'une prise de décision automatisée, y compris un profilage, visée à l\'article 22, paragraphes 1 et 4 du Règlement, et, au moins en pareils cas, des informations utiles concernant la logique sous-jacente, ainsi que l\'importance et les conséquences prévues de ce traitement pour la personne concernée\n',

      ],
    },
    {
      title: '10. Droit de rectification',
      description: 'Artexa agency garantit le droit de rectification et d\'effacement des données personnelles à l\'utilisateur. Conformément à l\'article 16 du Règlement, les données incorrectes, inexactes ou non-pertinentes peuvent être corrigées ou effacées à tout moment. L\'Utilisateur procède d\'abord lui-même aux modifications nécessaires depuis son compte utilisateur/autre, sauf si celles-ci ne peuvent être effectuées de manière autonome, dans quel cas la demande peut en être faite auprès de Artexa agency. Conformément à l\'article 19 du Règlement, le Responsable du traitement notifie à chaque destinataire auquel les données à caractère personnel ont été communiquées toute rectification des données à caractère personnel, à moins qu\'une telle communication se révèle impossible ou exige des efforts disproportionnés. Le responsable du traitement fournit à la personne concernée des informations sur ces destinataires si celle-ci en fait la demande.\n',
      features: [
      ],
    },
    {
      title: '11. Droit à l\'effacement',
      description:'Conformément à l\'article 19 du Règlement, le Responsable du traitement notifie à chaque destinataire auquel les données à caractère personnel ont été communiquées tout effacement de données à caractère personnel ou toute limitation du traitement effectué, à moins qu\'une telle communication se révèle impossible ou exige des efforts disproportionnés. Le responsable du traitement fournit à la personne concernée des informations sur ces destinataires si celle-ci en fait la demande. L\'Utilisateur a le droit d\'obtenir l\'effacement de ses données personnelles dans les meilleurs délais dans les hypothèses énumérées à l\'article 17 du Règlement. Lorsque le Responsable de Traitement a rendu publiques les données à caractère personnel et qu\'il est tenu de les effacer en vertu du paragraphe précédent, le Responsable du traitement, compte tenu des technologies disponibles et des coûts de mise en œuvre, prend des mesures raisonnables, y compris d\'ordre technique, pour informer les autres responsables du traitement qui traitent ces données à caractère personnel que la personne concernée a demandé l\'effacement par ces responsables du traitement de tout lien vers ces données à caractère personnel, ou de toute copie ou reproduction de celles-ci. Les deux paragraphes précédents ne s\'appliquent pas dans la mesure où ce traitement est nécessaire:\n',
      features: [
          'À l\'exercice du droit à la liberté d\'expression et d\'information;',
          'Pour respecter une obligation légale qui requiert le traitement prévue par le droit de l\'Union ou par le droit de l\'État membre auquel le responsable du traitement est soumis, ou pour exécuter une mission d\'intérêt public ou relevant de l\'exercice de l\'autorité publique dont est investi le responsable du traitement;',
          'À la constatation, à l\'exercice ou à la défense de droits en justice.',
      ],
    },
    {
      title: '12. Droit de portabilité des données',
      description:'Conformément à l\'article 20 du Règlement, les Utilisateurs ont le droit de recevoir de Artexa agency les données à caractère personnel les concernant dans un format structuré, couramment utilisé et lisible par machine. Les Utilisateurs ont le droit de transmettre ces données à un autre responsable du traitement sans que Artexa agency y fasse obstacle dans les cas prévus par le Règlement.Lorsque l\'Utilisateur exerce son droit à la portabilité des données en application du paragraphe précédent, elle a le droit d\'obtenir que les données à caractère personnel soient transmises directement d\'un responsable du traitement à un autre, lorsque cela est techniquement possible. L\'exercice du droit de portabilité des données s\'entend sans préjudice du droit à l\'effacement. Ce droit ne s\'applique pas au traitement nécessaire à l\'exécution d\'une mission d\'intérêt public ou relevant de l\'exercice de l\'autorité publique dont est investi le responsable du traitement. Le droit de portabilité des données ne porte pas atteinte aux droits et libertés de tiers.\n',
      features: [
      ],
    },
    {
      title: '13. Droit d\'opposition et prise de décision individuelle automatisée',
      description:'L\'Utilisateur dispose à tout moment du droit de s\'opposer au traitement de ses données personnelles en raison de sa situation particulière, y compris l\'automatisation des données effectuée par Artexa agency. Conformément à l\'article 21 du Règlement, Artexa agency ne traitera plus les données à caractère personnel, à moins qu\'il existe des motifs légitimes et impérieux pour le traitement qui prévalent sur les intérêts et les droits et libertés de l\'Utilisateur, ou pour la constatation, l\'exercice ou la défense de droits en justice. Lorsque les données à caractère personnel sont traitées à des fins de prospection, l\'Utilisateur a le droit de s\'opposer à tout moment au traitement des données à caractère personnel la concernant à de telles fins de prospection, y compris au profilage dans la mesure où il est lié à une telle prospection. Lorsque la personne concernée s\'oppose au traitement à des fins de prospection, les données à caractère personnel ne sont plus traitées à ces fins.\n',
      features: [

      ],
    },
    {
      title: '14. Droit de plainte',
      description:'L\'Utilisateur dispose du droit d\'introduire une plainte concernant le traitement de ses données personnelles par Artexa agency auprès de l\'Autorité de Protection des Données, compétente pour le territoire luxembourgeois. De plus amples informations peuvent être trouvées sur le site internet: https://cnpd.public.lu/fr.html. L\'introduction d\'une plainte se fait aux adresses suivantes: Commission nationale pour la protection des données - Service des réclamations - Boulevard du Jazz 15, L-4370 Belvaux - Tél. : (+352) 26 10 60 - 1 - Fax. : (+352) 26 10 60 - 6099 - Lien: https://cnpd.public.lu/fr/particuliers/faire-valoir/formulaire-plainte.html . L\'Utilisateur peut également introduire une plainte auprès du tribunal de première instance de son domicile',
      features: [

      ],
    },
    {
      title: '15. Cookies',
      description:'Le Site utilise des cookies pour distinguer les Utilisateurs du Site. Cela permet de fournir aux Utilisateurs une meilleure expérience de navigation et une amélioration du Site et de son contenu. Les objectifs et modalités des cookies sont contenus dans ce présent article.\n',
      features: [

      ],
    },
    {
      title: '15. Cookies',
      description:'Le Site utilise des cookies pour distinguer les Utilisateurs du Site. Cela permet de fournir aux Utilisateurs une meilleure expérience de navigation et une amélioration du Site et de son contenu. Les objectifs et modalités des cookies sont contenus dans ce présent article.\n',
      features: [
      ],
    },
    {
      title: '16. Principes généraux',
      description:'Un "Cookie" est un fichier déposé temporairement ou de façon permanente sur le disque dur de l\'Utilisateur lors de la consultation du Site Internet, en vue d\'une connexion ultérieure. Grâce aux cookies, le serveur reconnaît l\'ordinateur de l\'Utilisateur. Les cookies peuvent aussi être installés par des tiers avec lesquels Artexa agency collabore. Certains des cookies utilisés par Artexa agency sont nécessaires au bon fonctionnement du Site, d\'autres permettent d\'améliorer l\'expérience de l\'Utilisateur. L\'Utilisateur peut personnaliser ou désactiver les cookies en paramétrant son navigateur. En utilisant le Site Internet, l\'Utilisateur marque expressément son accord avec la gestion des cookies telle que décrite dans le présent article.\n',
      features: [
      ],
    },
    {
      title: '17. Type de cookies et finalités poursuivies',
      description:'Différents types de cookies sont utilisés par Artexa agency sur le Site :',
      features: [
          'Les cookies techniques : ils sont nécessaires à l\'exploitation du Site Internet, permettent la communication des données introduites et sont destinés à faciliter la navigation de l\'Utilisateur ;',
          'Les cookies de mesures statistiques et d\'audience : ces cookies permettent la reconnaissance de l\'Utilisateur et sont utilisés afin de comptabiliser le nombre d\'Utilisateurs du Site Internet sur une certaine période. Dès lors qu\'ils indiquent aussi le comportement de navigation, ils sont un moyen efficace pour améliorer la navigation de l\'Utilisateur, en lui affichant des propositions et offres susceptibles de l\'intéresser. Ils permettent aussi à Artexa agency de repérer les possibles bugs sur le Site Internet et de les corriger.',
          'Les cookies fonctionnels : ces cookies facilitent l\'utilisation du Site Internet en retenant certains choix introduits (par exemple, le nom d\'utilisateur ou la langue) ;',
          'Les cookies de traçage : Artexa agency utilise des cookies de traçage via Google Analytics, pour mesurer l\'interaction des Utilisateurs avec le contenu du Site et produire des statistiques anonymes. Ces statistiques permettent à Artexa agency de perfectionner le Site Internet. Google étaye l\'explication de ces cookies à l\'adresse suivante: http://www.google.nl/intl/en_uk/policies/privacy/',
      ],
    },
    {
      title: '18. Délai de conservation des cookies',
      description:'Les cookies sont conservés pour le temps nécessaire à l\'accomplissement de la finalité poursuivie. Les cookies susceptibles d\'être stockés sur le disque dur de l\'Utilisateur ainsi que leur délai de conservation sont les suivants : 1 an',
      features: [
      ],
    },
    {
      title: '19. Gestion des cookies',
      description:'Si l\'Utilisateur refuse que les cookies de Google Analytics soient utilisés, il est invité à paramétrer son navigateur en ce sens, sur le site web suivant : http://tools.google.com/dlpage/gaoptout. Si l\'Utilisateur ne veut pas que le Site Internet place des cookies sur son disque dur, il lui est aisé de les gérer ou les supprimer en modifiant les paramètres de son navigateur. La programmation du navigateur permet aussi à l\'Utilisateur de recevoir un avis ou une notification dès qu\'un Site Internet utilise des cookies et ainsi décider d\'accepter cela, ou de le refuser. Si l\'Utilisateur désactive certains cookies, il accepte que le Site Internet puisse ne pas fonctionner de manière optimale. Certaines parties du Site Internet pourraient ainsi ne pas être utilisables, ou l\'être partiellement. Si l\'Utilisateur souhaite ainsi gérer et/ou supprimer certains cookies, il peut le faire en utilisant le/les lien(s) suivant(s): Pour les Utilisateurs ayant comme navigateur :',
      features: [
          'Internet Explorer : http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies',
          'Microsoft Edge : http://windows.microsoft.com/en-gb/windows-10/edge-privacy-faq',
          'Chrome : https://support.google.com/accounts/answer/61416?hl=fr',
          'Firefox : https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences',
          'Safari : https://support.apple.com/kb/ph21411?locale=fr_CA'
      ],
    },
    {
      title: '20. Limitation de responsabilité du Responsable de traitement',
      description:'Le site Internet peut contenir des liens vers d\'autres sites internet détenus par des tiers non liés à Artexa agency. Le contenu de ces sites et le respect de ceux-ci au regard de la Loi et du Règlement ne relèvent pas de la responsabilité de Artexa agency. Le titulaire de l\'autorité parentale doit donner son consentement exprès pour que le mineur de moins de 16 ans puisse divulguer des informations ou données personnelles sur le site Internet. Artexa agency conseille vivement aux personnes exerçant l\'autorité parentale sur des mineurs de promouvoir une utilisation responsable et sécurisée d\'Internet. Le Responsable de traitement ne peut être tenu responsable pour avoir collecté et traité des informations et données personnelles de mineurs de moins de 16 ans dont le consentement n\'est pas effectivement couvert par celui de leurs parents légaux ou pour des données incorrectes -notamment concernant l\'âge- introduites par des mineurs. En aucun cas, des données personnelles ne seront traitées par le Responsable de traitement si l\'Utilisateur précise qu\'il est âgé de moins de 16 ans. Artexa agency n\'est pas responsable de la perte, de la corruption ou du vol de données personnelles causés notamment par la présence de virus ou suite à des attaques informatiques.\n',
      features: [
      ],
    },
    {
      title: '21. Mise à jour de la présente politique de confidentialité',
      description:'La mention "Dernière mise à jour" figurant au début de la présente politique de confidentialité indique à quand remonte sa dernière révision. De quelconques modifications entreront en vigueur lors de notre publication de la politique de confidentialité amendée sur les Services. Votre utilisation des Services suite à ces amendements signifie que vous acceptez la politique de confidentialité telle qu\'amendée.',
      features: [
      ],
    },
    {
      title: '22. Droit applicable et juridiction compétente',
      description:'La présente Politique de confidentialité est exclusivement régie par le droit luxembourgeois. Tout litige sera porté devant les tribunaux de l\'arrondissement judiciaire du siège social de',
      features: [
      ],
    },
    {
      title: '22. Contact',
      description:'Pour toute question ou réclamation relative à la présente Politique de confidentialité, l\'Utilisateur peut contacter le Responsable du traitement via l\'adresse suivante : info@artexa.agency',
      features: [
      ],
    },
   ]
}

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    ChevronRightIcon
  },
  setup() {
    return {
      privacy,
    }
  },
}
</script>
