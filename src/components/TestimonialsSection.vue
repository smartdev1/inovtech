<template>
  <section class="section-padding bg-white">
    <div class="container-max">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
          Ce que disent nos <span class="text-primary">clients</span>
        </h2>
        <p class="text-lg text-dark-700 max-w-2xl mx-auto">
          Découvrez les témoignages de nos clients satisfaits et leurs expériences 
          avec nos solutions digitales.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="card hover:scale-105 cursor-pointer"
        >
          <!-- Quote -->
          <div class="mb-6">
            <svg class="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="text-dark-700 italic leading-relaxed">
              "{{ testimonial.content }}"
            </p>
          </div>

          <!-- Author -->
          <div class="flex items-center">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover mr-4"
            >
            <div>
              <div class="font-semibold text-dark-900">{{ testimonial.name }}</div>
              <div class="text-sm text-dark-600">{{ testimonial.role }}</div>
              <div class="text-sm text-primary">{{ testimonial.company }}</div>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex mt-4">
            <div 
              v-for="i in 5" 
              :key="i"
              class="w-4 h-4 mr-1"
            >
              <svg 
                class="w-full h-full" 
                :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
          <div class="text-dark-700">Satisfaction client</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
          <div class="text-dark-700">Projets livrés</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
          <div class="text-dark-700">Clients fidèles</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-primary mb-2">8+</div>
          <div class="text-dark-700">Années d'expertise</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Directrice Marketing',
    company: 'TechCorp',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'InovTech a transformé notre présence en ligne. Leur expertise technique et leur approche client sont exceptionnelles. Je recommande vivement !',
    rating: 5
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    role: 'CEO',
    company: 'InnovateLab',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Un partenaire de confiance qui a su comprendre nos besoins et livrer une solution parfaitement adaptée. Très professionnel et réactif.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Responsable Digital',
    company: 'EcoSolutions',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Grâce à InovTech, nous avons pu digitaliser nos processus et améliorer significativement notre efficacité. Une équipe au top !',
    rating: 5
  },
  {
    id: 4,
    name: 'Thomas Rousseau',
    role: 'Fondateur',
    company: 'StartupVision',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Ils ont donné vie à notre vision avec une application mobile exceptionnelle. Le suivi post-livraison est également excellent.',
    rating: 5
  },
  {
    id: 5,
    name: 'Camille Moreau',
    role: 'Responsable E-commerce',
    company: 'FashionTrend',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Notre boutique en ligne a dépassé toutes nos attentes. Design moderne, performances optimales et conversion améliorée.',
    rating: 5
  },
  {
    id: 6,
    name: 'Alexandre Petit',
    role: 'Directeur Technique',
    company: 'DataFlow',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Une expertise technique remarquable et une capacité d\'adaptation impressionnante. Ils ont su relever tous les défis de notre projet.',
    rating: 5
  }
])
</script>