'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès ! Je vous recontacte dans les 24h.'
        })
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          message: ''
        })
      } else {
        throw new Error(data.message || 'Une erreur est survenue')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={`py-24 relative ${styles.formBackground}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transformons votre vision en réalité
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Expert en développement web, je crée des solutions performantes et sur-mesure.
            Discutons de votre projet et donnons vie à vos idées !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className={`${styles.featureCard} p-6 rounded-xl shadow-sm`}>
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Développement Rapide</h3>
              <p className="text-sm text-gray-600">Solutions web modernes et performants</p>
            </div>
            <div className={`${styles.featureCard} p-6 rounded-xl shadow-sm`}>
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Sites Performants</h3>
              <p className="text-sm text-gray-600">Optimisés pour le référencement et la conversion</p>
            </div>
            <div className={`${styles.featureCard} p-6 rounded-xl shadow-sm`}>
              <div className="text-2xl mb-3">🛠️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Support Complet</h3>
              <p className="text-sm text-gray-600">Accompagnement et maintenance de qualité</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className={`${styles.glassCard} rounded-2xl p-8 md:p-10`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  required
                  className={`${styles.inputField} w-full px-4 py-3 rounded-lg border border-gray-200`}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  required
                  className={`${styles.inputField} w-full px-4 py-3 rounded-lg border border-gray-200`}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de projet
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  required
                  className={`${styles.inputField} w-full px-4 py-3 rounded-lg border border-gray-200`}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option value="">Sélectionnez</option>
                  <option value="website">Site Web / E-commerce</option>
                  <option value="webapp">Application Web</option>
                  <option value="fullstack">Projet Web Full Stack</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget estimé
                </label>
                <input
                  type="text"
                  id="budget"
                  value={formData.budget}
                  required
                  placeholder="Ex: 5000€"
                  className={`${styles.inputField} w-full px-4 py-3 rounded-lg border border-gray-200`}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Votre projet en quelques mots
              </label>
              <textarea
                id="message"
                value={formData.message}
                required
                rows={4}
                className={`${styles.inputField} w-full px-4 py-3 rounded-lg border border-gray-200`}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Décrivez vos objectifs, vos besoins spécifiques..."
              />
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg mb-6 ${
                status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.submitButton} w-full py-4 px-6 rounded-lg text-white font-medium relative`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                "Lancer mon projet 🚀"
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Réponse garantie sous 24-48h
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}