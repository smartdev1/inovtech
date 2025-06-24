<template>
  <section class="section-padding bg-white">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
          Nos <span class="text-primary">Services</span>
        </h2>
        <p class="text-lg text-dark-700 max-w-2xl mx-auto">
          Des solutions digitales complètes pour répondre à tous vos besoins, 
          de la conception au déploiement.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="card animate-on-scroll hover:scale-105 cursor-pointer"
          @click="$router.push('/services')"
        >
          <!-- Icon -->
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <component :is="getIcon(service.icon)" class="w-6 h-6 text-primary" />
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-semibold text-dark-900 mb-3">
            {{ service.title }}
          </h3>
          <p class="text-dark-700 mb-4">
            {{ service.description }}
          </p>
          
          <!-- Features -->
          <ul class="space-y-2 mb-6">
            <li 
              v-for="feature in service.features.slice(0, 3)" 
              :key="feature"
              class="flex items-center text-sm text-dark-600"
            >
              <CheckIcon class="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              {{ feature }}
            </li>
          </ul>
          
          <!-- Price -->
          <div class="border-t pt-4">
            <p class="text-primary font-semibold">{{ service.price }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <router-link to="/services" class="btn-primary">
          Découvrir tous nos services
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { useMainStore } from '../stores/main'
import { storeToRefs } from 'pinia'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  ShoppingCartIcon, 
  ArrowTrendingUpIcon,
  CheckIcon 
} from '@heroicons/vue/24/outline'

const store = useMainStore()
const { services } = storeToRefs(store)

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