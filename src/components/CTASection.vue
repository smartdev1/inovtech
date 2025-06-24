<template>
  <section class="section-padding bg-primary text-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary-800"></div>
    <div class="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

    <div class="container-max relative z-10">
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Prêt à transformer votre idée en réalité ?
        </h2>
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Rejoignez les entreprises qui ont fait confiance à InovTech pour leur 
          transformation digitale. Commençons dès aujourd'hui à construire votre succès de demain.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <router-link 
            to="/contact" 
            class="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            Demander un devis gratuit
          </router-link>
          <router-link 
            to="/portfolio" 
            class="border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            Voir nos réalisations
          </router-link>
        </div>

        <!-- Trust Indicators -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="flex items-center justify-center">
            <CheckCircleIcon class="w-6 h-6 mr-2 text-white" />
            <span class="text-white/90">Devis gratuit sous 24h</span>
          </div>
          <div class="flex items-center justify-center">
            <CheckCircleIcon class="w-6 h-6 mr-2 text-white" />
            <span class="text-white/90">Suivi personnalisé</span>
          </div>
          <div class="flex items-center justify-center">
            <CheckCircleIcon class="w-6 h-6 mr-2 text-white" />
            <span class="text-white/90">Garantie satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>