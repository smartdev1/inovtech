import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Accueil - Transformation Digitale',
      description: 'Experts en transformation digitale - Applications web et mobiles sur mesure'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'À propos - Notre expertise',
      description: 'Découvrez notre équipe d\'experts en développement web et mobile'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Nos Services - Solutions digitales',
      description: 'Applications web, mobiles, e-commerce et solutions sur mesure'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: {
      title: 'Portfolio - Nos réalisations',
      description: 'Découvrez nos projets et réalisations récentes'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact - Parlons de votre projet',
      description: 'Contactez-nous pour discuter de votre projet de transformation digitale'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Dynamic meta tags
router.beforeEach((to, _, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
  
  if (to.meta?.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', to.meta.description as string)
  }
  
  next()
})

export default router