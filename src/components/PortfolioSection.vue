<template>
  <section class="section-padding gradient-bg">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
          Nos <span class="text-primary">Réalisations</span>
        </h2>
        <p class="text-lg text-dark-700 max-w-2xl mx-auto">
          Découvrez quelques-uns de nos projets récents et les technologies 
          utilisées pour créer des solutions innovantes.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in featuredProjects"
          :key="project.id"
          class="card animate-on-scroll group cursor-pointer"
          @click="$router.push('/portfolio')"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden rounded-lg mb-4">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 right-4">
                <span class="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full">
                  {{ project.category }}
                </span>
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
          <div class="flex flex-wrap gap-2">
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
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <router-link to="/portfolio" class="btn-primary">
          Voir tous nos projets
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/main'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { featuredProjects } = storeToRefs(store)
</script>