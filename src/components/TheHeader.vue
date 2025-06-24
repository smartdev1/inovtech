<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <nav class="container-max">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span class="text-dark-900 font-bold text-sm">IT</span>
            </div>
            <span class="text-xl font-bold text-dark-900">InovTech</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="text-dark-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-primary': $route.path === item.href }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <router-link to="/contact" class="btn-primary">
            Démarrer un projet
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-dark-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-controls="mobile-menu"
            :aria-expanded="isMenuOpen"
          >
            <span class="sr-only">Ouvrir le menu principal</span>
            <Bars3Icon v-if="!isMenuOpen" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            @click="closeMenu"
            class="block px-3 py-2 text-base font-medium text-dark-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-primary bg-primary-50': $route.path === item.href }"
          >
            {{ item.name }}
          </router-link>
          <div class="px-3 py-2">
            <router-link to="/contact" @click="closeMenu" class="btn-primary w-full text-center">
              Démarrer un projet
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useMainStore } from '../stores/main'
import { storeToRefs } from 'pinia'

const store = useMainStore()
const { isMenuOpen } = storeToRefs(store)
const { toggleMenu, closeMenu } = store

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]
</script>