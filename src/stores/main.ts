import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import axios from 'axios'

export interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  url?: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
}

export const useMainStore = defineStore('main', () => {
  // State
  const loading = ref(false)
  const error = ref<string | null>(null)
  const services = ref<Service[]>([])
  const projects = ref<Project[]>([])
  const isMenuOpen = ref(false)

  // WordPress API configuration
//  const wpApiUrl = 'https://your-wordpress-site.com/wp-json/wp/v2'

  // Getters
  const featuredProjects = computed(() => 
    projects.value.filter(project => project.id <= 3)
  )

  const projectsByCategory = computed(() => {
    const categories: { [key: string]: Project[] } = {}
    projects.value.forEach(project => {
      if (!categories[project.category]) {
        categories[project.category] = []
      }
      categories[project.category].push(project)
    })
    return categories
  })

  // Actions
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const setError = (message: string | null) => {
    error.value = message
  }

  // Mock data (replace with WordPress API calls)
  const initializeServices = () => {
    services.value = [
      {
        id: 1,
        title: 'Applications Web',
        description: 'Développement d\'applications web modernes et performantes',
        icon: 'code',
        features: ['Vue.js / React', 'Node.js / PHP', 'Base de données', 'API REST'],
        price: 'À partir de 5 000€'
      },
      {
        id: 2,
        title: 'Applications Mobiles',
        description: 'Applications mobiles natives et cross-platform',
        icon: 'device-phone-mobile',
        features: ['iOS / Android', 'React Native', 'Flutter', 'Interface native'],
        price: 'À partir de 8 000€'
      },
      {
        id: 3,
        title: 'E-commerce',
        description: 'Solutions e-commerce complètes et sur mesure',
        icon: 'shopping-cart',
        features: ['Shopify / WooCommerce', 'Paiement sécurisé', 'Gestion stocks', 'Analytics'],
        price: 'À partir de 3 000€'
      },
      {
        id: 4,
        title: 'Transformation Digitale',
        description: 'Accompagnement complet dans votre transformation',
        icon: 'arrow-trending-up',
        features: ['Audit digital', 'Stratégie', 'Formation', 'Support'],
        price: 'Sur devis'
      }
    ]
  }

  const initializeProjects = () => {
    projects.value = [
      {
        id: 1,
        title: 'Plateforme E-learning',
        description: 'Plateforme d\'apprentissage en ligne avec système de certification',
        image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Web',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io']
      },
      {
        id: 2,
        title: 'App Mobile Banking',
        description: 'Application mobile sécurisée pour services bancaires',
        image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Mobile',
        technologies: ['React Native', 'Firebase', 'Stripe', 'Biometric Auth']
      },
      {
        id: 3,
        title: 'Marketplace B2B',
        description: 'Plateforme de mise en relation entre entreprises',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'E-commerce',
        technologies: ['React', 'Laravel', 'PostgreSQL', 'Elasticsearch']
      },
      {
        id: 4,
        title: 'Dashboard Analytics',
        description: 'Tableau de bord analytique avec visualisations avancées',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Web',
        technologies: ['Vue.js', 'D3.js', 'Python', 'TensorFlow']
      }
    ]
  }

  // WordPress API integration (commented for now)
  /*
  const fetchServices = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${wpApiUrl}/services`)
      services.value = response.data
    } catch (err) {
      setError('Erreur lors du chargement des services')
    } finally {
      setLoading(false)
    }
  }

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${wpApiUrl}/projects`)
      projects.value = response.data
    } catch (err) {
      setError('Erreur lors du chargement des projets')
    } finally {
      setLoading(false)
    }
  }
  */

  const submitContactForm = async (formData: ContactForm) => {
    try {
      setLoading(true)
      // Use formData to avoid unused variable error
      console.log('Contact form submitted:', formData)
      // Replace with actual API call
      // await axios.post(`${wpApiUrl}/contact`, formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      return { success: true, message: 'Votre message a été envoyé avec succès!' }
    } catch (err) {
      setError('Erreur lors de l\'envoi du message')
      return { success: false, message: 'Erreur lors de l\'envoi' }
    } finally {
      setLoading(false)
    }
  }

  // Initialize mock data
  initializeServices()
  initializeProjects()

  return {
    // State
    loading,
    error,
    services,
    projects,
    isMenuOpen,
    
    // Getters
    featuredProjects,
    projectsByCategory,
    
    // Actions
    toggleMenu,
    closeMenu,
    setLoading,
    setError,
    submitContactForm
  }
})