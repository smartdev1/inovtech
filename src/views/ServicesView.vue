<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="section-padding gradient-bg">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Nos <span class="text-primary">Services</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-3xl mx-auto">
            Des solutions digitales complètes pour transformer votre entreprise 
            et propulser votre croissance dans l'ère numérique.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="service in detailedServices"
            :key="service.id"
            class="card hover:scale-105 cursor-pointer"
          >
            <!-- Service Header -->
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <component :is="getIcon(service.icon)" class="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-dark-900">{{ service.title }}</h3>
                <p class="text-primary font-medium">{{ service.price }}</p>
              </div>
            </div>

            <!-- Service Description -->
            <p class="text-dark-700 mb-6 text-lg">{{ service.description }}</p>

            <!-- Features List -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-dark-900 mb-3">Inclus dans ce service :</h4>
              <ul class="space-y-2">
                <li 
                  v-for="feature in service.features" 
                  :key="feature"
                  class="flex items-center text-dark-700"
                >
                  <CheckIcon class="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-dark-900 mb-3">Technologies utilisées :</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in service.technologies" 
                  :key="tech"
                  class="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Process -->
            <div class="border-t pt-6">
              <h4 class="text-lg font-semibold text-dark-900 mb-3">Notre processus :</h4>
              <div class="space-y-2">
                <div 
                  v-for="(step, index) in service.process" 
                  :key="step"
                  class="flex items-center text-sm text-dark-600"
                >
                  <span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0">
                    {{ index + 1 }}
                  </span>
                  {{ step }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding gradient-bg">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Notre <span class="text-primary">Méthode</span>
          </h2>
          <p class="text-lg text-dark-700 max-w-2xl mx-auto">
            Une approche structurée et éprouvée pour garantir le succès de votre projet
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            class="card text-center hover:scale-105"
          >
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold text-dark-900 mb-3">{{ step.title }}</h3>
            <p class="text-dark-700">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p class="text-lg text-dark-700 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble la solution parfaite pour votre entreprise.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact" class="btn-primary">
              Demander un devis gratuit
            </router-link>
            <router-link to="/portfolio" class="btn-secondary">
              Voir nos réalisations
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  CheckIcon,
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  ShoppingCartIcon, 
  ArrowTrendingUpIcon
} from '@heroicons/vue/24/outline'

const detailedServices = ref([
  {
    id: 1,
    title: 'Applications Web',
    description: 'Développement d\'applications web modernes, performantes et sur mesure pour répondre à vos besoins spécifiques.',
    icon: 'code',
    price: 'À partir de 5 000€',
    features: [
      'Développement sur mesure',
      'Interface utilisateur moderne',
      'Responsive design',
      'Optimisation SEO',
      'Hébergement et maintenance',
      'Formation utilisateur'
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL'],
    process: [
      'Analyse des besoins',
      'Conception UX/UI',
      'Développement et tests',
      'Déploiement et formation'
    ]
  },
  {
    id: 2,
    title: 'Applications Mobiles',
    description: 'Création d\'applications mobiles natives et cross-platform pour iOS et Android avec une expérience utilisateur exceptionnelle.',
    icon: 'device-phone-mobile',
    price: 'À partir de 8 000€',
    features: [
      'Applications natives iOS/Android',
      'Développement cross-platform',
      'Interface intuitive',
      'Intégration API',
      'Publication sur stores',
      'Suivi analytique'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    process: [
      'Étude de faisabilité',
      'Prototypage rapide',
      'Développement itératif',
      'Tests et publication'
    ]
  },
  {
    id: 3,
    title: 'Solutions E-commerce',
    description: 'Plateformes e-commerce complètes avec gestion des stocks, paiements sécurisés et tableau de bord analytique.',
    icon: 'shopping-cart',
    price: 'À partir de 3 000€',
    features: [
      'Boutique en ligne personnalisée',
      'Gestion des stocks',
      'Paiements sécurisés',
      'Tableau de bord admin',
      'Intégration logistique',
      'Support multilingue'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'Mailchimp'],
    process: [
      'Audit e-commerce',
      'Configuration plateforme',
      'Personnalisation design',
      'Tests et optimisation'
    ]
  },
  {
    id: 4,
    title: 'Transformation Digitale',
    description: 'Accompagnement complet dans votre transformation digitale avec audit, stratégie et mise en œuvre.',
    icon: 'arrow-trending-up',
    price: 'Sur devis',
    features: [
      'Audit digital complet',
      'Stratégie personnalisée',
      'Accompagnement change management',
      'Formation des équipes',
      'Suivi des performances',
      'Support continu'
    ],
    technologies: ['Cloud AWS/Azure', 'CI/CD', 'Docker', 'Kubernetes', 'Analytics', 'CRM'],
    process: [
      'Audit et diagnostic',
      'Définition stratégie',
      'Mise en œuvre progressive',
      'Accompagnement et suivi'
    ]
  }
])

const processSteps = ref([
  {
    id: 1,
    title: 'Découverte',
    description: 'Nous analysons vos besoins, objectifs et contraintes pour définir la solution optimale.'
  },
  {
    id: 2,
    title: 'Conception',
    description: 'Création des maquettes et prototypes pour valider l\'expérience utilisateur.'
  },
  {
    id: 3,
    title: 'Développement',
    description: 'Réalisation de la solution avec des itérations régulières et votre feedback.'
  },
  {
    id: 4,
    title: 'Déploiement',
    description: 'Mise en production, formation et accompagnement pour garantir le succès.'
  }
])

const iconMap = {
  'code': CodeBracketIcon,
  'device-phone-mobile': DevicePhoneMobileIcon,
  'shopping-cart': ShoppingCartIcon,
  'arrow-trending-up': ArrowTrendingUpIcon,
}

const getIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || CodeBracketIcon
}
</script>