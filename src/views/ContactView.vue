<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="section-padding gradient-bg">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Contactez-<span class="text-primary">nous</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ! Notre équipe est là pour vous accompagner 
            dans votre transformation digitale.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="card">
            <h2 class="text-2xl font-bold text-dark-900 mb-6">Démarrer un projet</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name & Email -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-dark-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Votre nom"
                  >
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-dark-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="votre@email.com"
                  >
                </div>
              </div>

              <!-- Phone & Company -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="phone" class="block text-sm font-medium text-dark-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+33 1 23 45 67 89"
                  >
                </div>
                <div>
                  <label for="company" class="block text-sm font-medium text-dark-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  >
                </div>
              </div>

              <!-- Service -->
              <div>
                <label for="service" class="block text-sm font-medium text-dark-700 mb-1">
                  Service souhaité
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="web">Application Web</option>
                  <option value="mobile">Application Mobile</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="transformation">Transformation Digitale</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-dark-700 mb-1">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Parlez-nous de votre projet, vos objectifs, votre timeline..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Envoi en cours...
                </span>
                <span v-else>Envoyer ma demande</span>
              </button>
            </form>

            <!-- Success/Error Messages -->
            <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
              {{ submitMessage }}
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="card">
              <h3 class="text-xl font-semibold text-dark-900 mb-4">Nos coordonnées</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <PhoneIcon class="w-5 h-5 text-primary mr-3" />
                  <span class="text-dark-700">+1 (613) 400-1984</span>
                </div>
                <div class="flex items-center">
                  <EnvelopeIcon class="w-5 h-5 text-primary mr-3" />
                  <span class="text-dark-700">contact@inovtech.ci</span>
                </div>
                <div class="flex items-start">
                  <MapPinIcon class="w-5 h-5 text-primary mr-3 mt-1" />
                  <span class="text-dark-700">
                    Ottawa<br>
                    Canada
                  </span>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="card">
              <h3 class="text-xl font-semibold text-dark-900 mb-4">Horaires d'ouverture</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-dark-700">Lundi - Vendredi</span>
                  <span class="text-dark-600">9h00 - 18h00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-dark-700">Samedi</span>
                  <span class="text-dark-600">10h00 - 16h00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-dark-700">Dimanche</span>
                  <span class="text-dark-600">Fermé</span>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="card">
              <h3 class="text-xl font-semibold text-dark-900 mb-4">Pourquoi nous choisir ?</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary mb-1">24h</div>
                  <div class="text-sm text-dark-600">Réponse garantie</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary mb-1">150+</div>
                  <div class="text-sm text-dark-600">Projets réalisés</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary mb-1">98%</div>
                  <div class="text-sm text-dark-600">Clients satisfaits</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary mb-1">8+</div>
                  <div class="text-sm text-dark-600">Années d'expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding gradient-bg">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Questions <span class="text-primary">fréquentes</span>
          </h2>
          <p class="text-lg text-dark-700 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="card cursor-pointer"
            @click="toggleFaq(faq.id)"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-dark-900">{{ faq.question }}</h3>
              <ChevronDownIcon 
                class="w-5 h-5 text-primary transition-transform duration-200"
                :class="{ 'rotate-180': faq.isOpen }"
              />
            </div>
            <div 
              v-show="faq.isOpen"
              class="mt-4 text-dark-700 animate-fade-in"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useMainStore } from '../stores/main'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ChevronDownIcon 
} from '@heroicons/vue/24/outline'

const store = useMainStore()

// Form state
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// FAQ state
const faqs = ref([
  {
    id: 1,
    question: 'Quel est le délai moyen pour réaliser un projet ?',
    answer: 'Le délai varie selon la complexité du projet. En moyenne, comptez 4-6 semaines pour un site web, 8-12 semaines pour une application mobile, et 3-6 mois pour des projets plus complexes.',
    isOpen: false
  },
  {
    id: 2,
    question: 'Proposez-vous un suivi après la livraison ?',
    answer: 'Oui, nous proposons un suivi complet avec maintenance, mises à jour de sécurité, et support technique. Nous offrons également des formations pour vous permettre de gérer votre solution en autonomie.',
    isOpen: false
  },
  {
    id: 3,
    question: 'Pouvez-vous reprendre un projet existant ?',
    answer: 'Absolument ! Nous pouvons auditer votre projet existant, l\'améliorer, le moderniser, ou le refondre entièrement selon vos besoins. Nous nous adaptons à votre situation.',
    isOpen: false
  },
  {
    id: 4,
    question: 'Comment se déroule la facturation ?',
    answer: 'Nous proposons généralement un paiement en 3 fois : 30% à la commande, 40% à mi-parcours, et 30% à la livraison. Pour les projets longs, nous pouvons adapter le calendrier de paiement.',
    isOpen: false
  },
  {
    id: 5,
    question: 'Travaillez-vous avec des clients internationaux ?',
    answer: 'Oui, nous travaillons avec des clients dans toute la France et à l\'international. Nous pouvons nous adapter aux différents fuseaux horaires et proposons nos services en français et en anglais.',
    isOpen: false
  }
])

// Methods
const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const result = await store.submitContactForm(form)
    
    if (result.success) {
      submitSuccess.value = true
      submitMessage.value = result.message
      // Reset form
      Object.keys(form).forEach(key => {
        form[key as keyof typeof form] = ''
      })
    } else {
      submitSuccess.value = false
      submitMessage.value = result.message
    }
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (id: number) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.isOpen = !faq.isOpen
  }
}
</script>