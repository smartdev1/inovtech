<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="section-padding gradient-bg">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            À propos de <span class="text-primary">InovTech</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-3xl mx-auto">
            Experts passionnés de la transformation digitale depuis plus de 8 ans, 
            nous accompagnons les entreprises dans leur évolution technologique.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Notre <span class="text-primary">Équipe</span>
          </h2>
          <p class="text-lg text-dark-700 max-w-2xl mx-auto">
            Une équipe de développeurs et designers passionnés, dédiée à créer 
            des solutions digitales innovantes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="card text-center hover:scale-105 cursor-pointer"
          >
            <div class="relative mb-6">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-32 h-32 rounded-full mx-auto object-cover"
              >
              <div class="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <CheckIcon class="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-dark-900 mb-2">{{ member.name }}</h3>
            <p class="text-primary font-medium mb-3">{{ member.role }}</p>
            <p class="text-dark-700 mb-4">{{ member.description }}</p>
            <div class="flex justify-center space-x-4">
              <span 
                v-for="skill in member.skills.slice(0, 3)" 
                :key="skill"
                class="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding gradient-bg">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Nos <span class="text-primary">Valeurs</span>
          </h2>
          <p class="text-lg text-dark-700 max-w-2xl mx-auto">
            Les principes qui guident notre travail au quotidien
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="value in values"
            :key="value.id"
            class="card text-center hover:scale-105"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="getIcon(value.icon)" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-dark-900 mb-3">{{ value.title }}</h3>
            <p class="text-dark-700">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.id"
            class="text-center"
          >
            <div class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-dark-700">{{ stat.label }}</div>
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
  HeartIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

const teamMembers = ref([
  {
    id: 1,
    name: 'Sarah Martin',
    role: 'CEO & Lead Developer',
    description: 'Experte en développement fullstack avec 10 ans d\'expérience',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Vue.js', 'Node.js', 'AWS']
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'Mobile Developer',
    description: 'Spécialiste des applications mobiles natives et cross-platform',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['React Native', 'Flutter', 'iOS']
  },
  {
    id: 3,
    name: 'Marie Leroy',
    role: 'UX/UI Designer',
    description: 'Designer créative passionnée par l\'expérience utilisateur',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    skills: ['Figma', 'Design System', 'Prototyping']
  }
])

const values = ref([
  {
    id: 1,
    title: 'Innovation',
    description: 'Nous adoptons les dernières technologies pour créer des solutions avant-gardistes',
    icon: 'lightbulb'
  },
  {
    id: 2,
    title: 'Qualité',
    description: 'Chaque projet est réalisé avec la plus grande attention aux détails',
    icon: 'shield-check'
  },
  {
    id: 3,
    title: 'Passion',
    description: 'Notre amour pour le code et le design transparaît dans chaque création',
    icon: 'heart'
  },
  {
    id: 4,
    title: 'Performance',
    description: 'Nous optimisons chaque aspect pour des performances exceptionnelles',
    icon: 'rocket'
  }
])

const stats = ref([
  { id: 1, value: '150+', label: 'Projets réalisés' },
  { id: 2, value: '8+', label: 'Années d\'expérience' },
  { id: 3, value: '50+', label: 'Clients satisfaits' },
  { id: 4, value: '98%', label: 'Taux de satisfaction' }
])

const iconMap = {
  'lightbulb': LightBulbIcon,
  'shield-check': ShieldCheckIcon,
  'heart': HeartIcon,
  'rocket': RocketLaunchIcon
}

const getIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || LightBulbIcon
}
</script>