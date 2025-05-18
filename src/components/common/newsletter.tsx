"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useFirebase } from '@/hooks/use-firebase'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { addDocument, checkEmailExists, error, loading } = useFirebase()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Check if email already exists
      const exists = await checkEmailExists(email)
      if (exists) {
        setStatus('error')
        return
      }

      // Add new subscription
      const docId = await addDocument('newsletter', { email })
      if (docId) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setStatus('error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-blue-600 dark:bg-blue-800 rounded-lg p-8"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-blue-100 mb-6">
          Stay updated with our latest news, articles, and tech insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-green-200">Thanks for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-200">Something went wrong. Please try again.</p>
        )}
      </div>
    </motion.div>
  )
} 