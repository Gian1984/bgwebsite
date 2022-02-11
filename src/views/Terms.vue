<template>
  <div class="bg-gray-50" id="header">
    <div class="max-w-7xl mx-auto py-32 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-black text-3xl font-extrabold text-gold sm:text-4xl">
          Terms and Conditions
        </h2>
        <dl class="mt-20 mb-20 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="term in terms" :key="term.title" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-artexa-teal-400">
                  {{ term.title }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ term.description }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon,  } from '@heroicons/vue/outline'

const terms = [
  {
    title: "Article 1 : Objet",
    description:'Les présentes CGU ou Conditions Générales d’Utilisation encadrent juridiquement l’utilisation des services du site Artexa agency (ci-après dénommé « le site »). Constituant le contrat entre la société Artexa agency, l’Utilisateur, l’accès au site doit être précédé de l’acceptation de ces CGU. L’accès à cette plateforme signifie l’acceptation des présentes CGU.\n',
  },
  {
    title: "Article 2 : Mentions légales",
    description:'L’édition du site Artexa agency est assurée par la société Artexa agency SPRL. L’hébergeur du site www.artexa.agency est la société One.com.',
  },
  {
    title: "Article 3 : Accès au site",
    description:'Le site Artexa agency permet d’accéder gratuitement aux services suivants: Réception d’informations sur des biens à vendre en exclusivité. Le site est accessible gratuitement depuis n’importe où par tout utilisateur disposant d’un accès à Internet. Tous les frais nécessaires pour l’accès aux services (matériel informatique, connexion Internet…) sont à la charge de l’utilisateur. Pour des raisons de maintenance ou autres, l’accès au site peut être interrompu ou suspendu par l’éditeur sans préavis ni justification.\n',
  },
  {
    title: "Article 4 : Collecte des données",
    description:'Pour la création du compte de l’Utilisateur, la collecte des informations au moment de l’inscription sur le site est nécessaire et obligatoire. Conformément à la loi n°78-17 du 6 janvier relative à l’informatique, aux fichiers et aux libertés, la collecte et le traitement d’informations personnelles s’effectuent dans le respect de la vie privée. Suivant la loi Informatique et Libertés en date du 6 janvier 1978, articles 39 et 40, l’Utilisateur dispose du droit d’accéder, de rectifier, de supprimer et d’opposer ses données personnelles. L’exercice de ce droit s’effectue par: Le formulaire de contact; Son espace client.',
  },
  {
    title: "Article 5 : Propriété intellectuelle",
    description:'Les marques, logos ainsi que les contenus du site Artexa agency (illustrations graphiques, textes…) sont protégés par le Code de la propriété intellectuelle et par le droit d’auteur. La reproduction et la copie des contenus par l’Utilisateur requièrent une autorisation préalable du site. Dans ce cas, toute utilisation à des usages commerciaux ou à des fins publicitaires est proscrite.\n',
  },
  {
    title: "Article 6 : Responsabilité",
    description:'Bien que les informations publiées sur le site soient réputées fiables, le site se réserve la faculté d’une non-garantie de la fiabilité des sources. Les informations diffusées sur le site Artexa agency sont présentées à titre purement informatif et sont sans valeur contractuelle. En dépit des mises à jour régulières, la responsabilité du site ne peut être engagée en cas de modification des dispositions administratives et juridiques apparaissant après la publication. Il en est de même pour l’utilisation et l’interprétation des informations communiquées sur la plateforme. Le site décline toute responsabilité concernant les éventuels virus pouvant infecter le matériel informatique de l’Utilisateur après l’utilisation ou l’accès à ce site. Le site ne peut être tenu pour responsable en cas de force majeure ou du fait imprévisible et insurmontable d’un tiers. La garantie totale de la sécurité et la confidentialité des données n’est pas assurée par le site. Cependant, le site s’engage à mettre en œuvre toutes les méthodes requises pour le faire au mieux.\n',
  },
  {
    title: "Article 7 : Liens hypertextes",
    description:'Le site peut être constitué de liens hypertextes. En cliquant sur ces derniers, l’Utilisateur sortira de la plateforme. Cette dernière n’a pas de contrôle et ne peut pas être tenue responsable du contenu des pages web relatives à ces liens.',
  },
  {
    title: "Article 8 : Cookies",
    description:'Lors des visites sur le site, l’installation automatique d’un cookie sur le logiciel de navigation de l’Utilisateur peut survenir. Les cookies correspondent à de petits fichiers déposés temporairement sur le disque dur de l’ordinateur de l’Utilisateur. Ces cookies sont nécessaires pour assurer l’accessibilité et la navigation sur le site. Ces fichiers ne comportent pas d’informations personnelles et ne peuvent pas être utilisés pour l’identification d’une personne. L’information présente dans les cookies est utilisée pour améliorer les performances de navigation sur le site www.artexa.agency. En naviguant sur le site, l’Utilisateur accepte les cookies. Leur désactivation peut s’effectuer via les paramètres du logiciel de navigation.\n',
  },
  {
    title: 'Article 9 : Durée du contrat',
    description:'Le présent contrat est valable pour une durée indéterminée. Le début de l’utilisation des services du site marque l’application du contrat à l’égard de l’Utilisateur.',
  },
  {
    title: 'Article 10 : Droit applicable et juridiction compétente',
    description:'Le présent contrat est soumis à la législation luxembourgeoise. L’absence de résolution à l’amiable des cas de litige entre les parties implique le recours aux tribunaux compétents pour régler le contentieux.',
  },

]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      terms,
    }
  },
}
</script>
