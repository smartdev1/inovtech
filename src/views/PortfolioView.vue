<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="section-padding gradient-bg">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Notre <span class="text-primary">Portfolio</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-3xl mx-auto">
            Découvrez nos réalisations récentes et les technologies utilisées 
            pour créer des solutions digitales innovantes.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="selectedCategory === category 
              ? 'bg-primary text-white' 
              : 'bg-white text-dark-700 hover:bg-primary/10'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="card group cursor-pointer hover:scale-105"
            @click="openProjectModal(project)"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                  <span class="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">
                    {{ project.category }}
                  </span>
                  <p class="text-white text-sm">{{ project.shortDescription }}</p>
                </div>
              </div>
            </div>

            <!-- Project Info -->
            <h3 class="text-xl font-semibold text-dark-900 mb-2 group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-dark-700 mb-4">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies.slice(0, 3)" 
                :key="tech"
                class="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.technologies.length > 3"
                class="inline-block bg-gray-100 text-dark-600 text-xs px-2 py-1 rounded-full"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <!-- Project Stats -->
            <div class="flex justify-between text-sm text-dark-600 border-t pt-4">
              <span>{{ project.duration }}</span>
              <span>{{ project.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      @click="closeProjectModal"
    >
      <div 
        class="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="relative">
          <!-- Close Button -->
          <button 
            @click="closeProjectModal"
            class="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
          >
            <XMarkIcon class="w-5 h-5 text-dark-600" />
          </button>

          <!-- Project Image -->
          <img 
            :src="selectedProject.image" 
            :alt="selectedProject.title"
            class="w-full h-64 object-cover"
          >

          <!-- Project Content -->
          <div class="p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-dark-900">{{ selectedProject.title }}</h2>
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm">
                {{ selectedProject.category }}
              </span>
            </div>

            <p class="text-lg text-dark-700 mb-6">{{ selectedProject.fullDescription }}</p>

            <!-- Technologies Used -->
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-dark-900 mb-3">Technologies utilisées</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in selectedProject.technologies" 
                  :key="tech"
                  class="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Project Features -->
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-dark-900 mb-3">Fonctionnalités clés</h3>
              <ul class="space-y-2">
                <li 
                  v-for="feature in selectedProject.features" 
                  :key="feature"
                  class="flex items-center text-dark-700"
                >
                  <CheckIcon class="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Project Details -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
              <div class="text-center">
                <div class="text-2xl font-bold text-primary mb-1">{{ selectedProject.duration }}</div>
                <div class="text-sm text-dark-600">Durée du projet</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary mb-1">{{ selectedProject.year }}</div>
                <div class="text-sm text-dark-600">Année de réalisation</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary mb-1">{{ selectedProject.team }}</div>
                <div class="text-sm text-dark-600">Taille de l'équipe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'

interface Project {
  id: number
  title: string
  description: string
  shortDescription: string
  fullDescription: string
  image: string
  category: string
  technologies: string[]
  features: string[]
  duration: string
  year: string
  team: string
}

const selectedCategory = ref('Tous')
const selectedProject = ref<Project | null>(null)

const categories = ref(['Tous', 'Web', 'Mobile', 'E-commerce', 'Dashboard'])

const allProjects = ref<Project[]>([
  {
    id: 1,
    title: 'Plateforme E-learning',
    description: 'Plateforme d\'apprentissage en ligne avec système de certification',
    shortDescription: 'Formation en ligne interactive',
    fullDescription: 'Une plateforme complète d\'apprentissage en ligne permettant aux entreprises de former leurs employés avec des parcours personnalisés, des quiz interactifs et un système de certification automatisé.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'FFmpeg', 'AWS S3'],
    features: [
      'Système de certification automatisé',
      'Parcours d\'apprentissage personnalisés',
      'Quiz interactifs et évaluations',
      'Suivi des progrès en temps réel',
      'Intégration vidéo et documents',
      'Messagerie intégrée'
    ],
    duration: '4 mois',
    year: '2024',
    team: '4 personnes'
  },
  {
    id: 2,
    title: 'App Mobile Banking',
    description: 'Application mobile sécurisée pour services bancaires',
    shortDescription: 'Banque mobile nouvelle génération',
    fullDescription: 'Application mobile bancaire avec authentification biométrique, gestion de comptes multiples, virements instantanés et conseils financiers personnalisés basés sur l\'IA.',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Biometric Auth', 'TensorFlow', 'Node.js'],
    features: [
      'Authentification biométrique',
      'Gestion multi-comptes',
      'Virements instantanés',
      'Conseils financiers IA',
      'Notifications push intelligentes',
      'Mode hors ligne'
    ],
    duration: '6 mois',
    year: '2023',
    team: '6 personnes'
  },
  {
    id: 3,
    title: 'Marketplace B2B',
    description: 'Plateforme de mise en relation entre entreprises',
    shortDescription: 'Marketplace pour professionnels',
    fullDescription: 'Marketplace B2B sophistiquée avec système de matching automatique, gestion des devis, facturation intégrée et tableau de bord analytique pour optimiser les relations commerciales.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Docker'],
    features: [
      'Système de matching automatique',
      'Gestion des devis et factures',
      'Évaluations et avis clients',
      'Messagerie sécurisée',
      'Tableau de bord analytique',
      'API pour intégrations tierces'
    ],
    duration: '8 mois',
    year: '2023',
    team: '8 personnes'
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec visualisations avancées',
    shortDescription: 'Analytique temps réel',
    fullDescription: 'Dashboard analytique en temps réel avec visualisations interactives, prédictions par machine learning et alertes intelligentes pour optimiser les performances business.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Dashboard',
    technologies: ['Vue.js', 'D3.js', 'Python', 'TensorFlow', 'InfluxDB', 'Grafana'],
    features: [
      'Visualisations interactives',
      'Prédictions par IA',
      'Alertes intelligentes',
      'Export de données',
      'Collaboration en équipe',
      'Intégrations multiples'
    ],
    duration: '3 mois',
    year: '2024',
    team: '3 personnes'
  },
  {
    id: 5,
    title: 'App Fitness Mobile',
    description: 'Application de coaching sportif personnalisé',
    shortDescription: 'Coach sportif dans votre poche',
    fullDescription: 'Application mobile de fitness avec programmes personnalisés, suivi des performances, coaching IA et communauté d\'entraide pour atteindre vos objectifs.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile',
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'HealthKit', 'Google Fit'],
    features: [
      'Programmes personnalisés',
      'Suivi des performances',
      'Coaching IA adaptatif',
      'Communauté d\'entraide',
      'Intégration wearables',
      'Défis et récompenses'
    ],
    duration: '5 mois',
    year: '2024',
    team: '5 personnes'
  },
  {
    id: 6,
    title: 'Boutique Artisanale',
    description: 'E-commerce pour artisans locaux',
    shortDescription: 'Valoriser l\'artisanat local',
    fullDescription: 'Plateforme e-commerce dédiée aux artisans locaux avec mise en avant des savoir-faire, système de réservation d\'ateliers et livraison géolocalisée.',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce',
    technologies: ['Shopify Plus', 'Vue.js', 'Node.js', 'Stripe', 'Google Maps API'],
    features: [
      'Galerie produits artisanaux',
      'Réservation d\'ateliers',
      'Livraison géolocalisée',
      'Profils artisans détaillés',
      'Système de fidélité',
      'Blog et actualités'
    ],
    duration: '4 mois',
    year: '2023',
    team: '4 personnes'
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return allProjects.value
  }
  return allProjects.value.filter(project => project.category === selectedCategory.value)
})

const openProjectModal = (project: Project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}
</script>