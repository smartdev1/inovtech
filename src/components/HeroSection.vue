<template>
  <section class="relative min-h-screen flex items-center gradient-bg overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
    </div>

    <div class="container-max relative z-10 section-padding">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="animate-slide-up">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-6">
            Transformez votre
            <span class="text-primary">vision digitale</span>
            en réalité
          </h1>
          <p class="text-lg md:text-xl text-dark-700 mb-8 leading-relaxed">
            Nous créons des applications web et mobiles sur mesure qui propulsent 
            votre entreprise vers le succès digital. De l'idée au déploiement, 
            nous vous accompagnons dans votre transformation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/contact" class="btn-primary text-center">
              Démarrer mon projet
            </router-link>
            <router-link to="/portfolio" class="btn-secondary text-center">
              Voir nos réalisations
            </router-link>
          </div>
        </div>

        <!-- Visual -->
        <div class="animate-fade-in" style="animation-delay: 0.3s;">
          <div class="relative">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Transformation digitale" 
              class="rounded-2xl shadow-2xl w-full h-auto"
            >
            <!-- Floating Cards -->
            <div class="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm font-medium">Projet en cours</span>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float" style="animation-delay: 0.5s;">
              <div class="flex items-center space-x-2">
                <span class="text-2xl font-bold text-primary">98%</span>
                <span class="text-sm text-dark-700">Satisfaction client</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
        <div class="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>