'use client'
import { useState, useEffect } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isContactDisabled, setIsContactDisabled] = useState(false)

  useEffect(() => {
    const contactDisabled = process.env.NEXT_PUBLIC_CONTACT_FORM_DISABLED === 'true'
    setIsContactDisabled(contactDisabled)
  }, [])


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
          message: 'Message envoyé avec succès ! Je vous recontacte dans les 24h - 48h.'
        })
        setFormData({
          name: '',
          email: '',
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
            Repoussons les limites de votre ambition
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Expert en développement web, je crée des sites et sites webs performants et sur-mesure.
            Grâce à un référencement optimisé et une experience utilisateur exceptionnelle, faisons passer ensemble un nouveau cap à votre business !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className={`${styles.featureCard} p-6 rounded-xl shadow-sm`}>
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Développement Rapide</h3>
              <p className="text-sm text-gray-600">de Solutions web modernes et performantes</p>
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
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tarification transparente</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Projets à partir de <span className="font-bold">500€</span> selon la complexité</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Devis personnalisé détaillé et sans engagement</span>
              </li>
            </ul>
          </div>
          {isContactDisabled ? (
            <div className={`${styles.glassCard} rounded-2xl p-8 md:p-10 text-center`}>
            <div className="bg-amber-50 p-6 rounded-lg mb-4 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-800 mb-2">📅 Indisponibilité temporaire</h3>
              <p className="text-amber-700 mb-3">
                Je ne prends plus de nouveaux projets pour le moment en raison d'un carnet de commandes complet.
                Merci de votre compréhension !
              </p>
              <p className="text-amber-700">
                En attendant, n'hésitez pas à consulter <a href="/blog" className="font-medium underline hover:text-amber-900 transition-colors">mon blog</a> pour découvrir mes derniers articles et suivre l'actualité de mes projets en cours.
              </p>
            </div>
            <p className="text-gray-600 mt-4">
              Revenez dans quelques jours pour vérifier mes nouvelles disponibilités.
            </p>
          </div>
          ) : (
            <form onSubmit={handleSubmit} className={`${styles.glassCard} rounded-2xl p-8 md:p-10`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre email *
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
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre nom *
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
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre projet en quelques mots *
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
                  "Obtenir mon devis gratuit 🚀"
                )}
              </button>

              <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>Réponse garantie sous 24-48h</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
