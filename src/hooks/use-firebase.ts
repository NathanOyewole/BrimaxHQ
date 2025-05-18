import { useState, useCallback } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

interface FirebaseError {
  code: string
  message: string
}

export const useFirebase = () => {
  const [error, setError] = useState<FirebaseError | null>(null)
  const [loading, setLoading] = useState(false)

  const addDocument = useCallback(async (collectionName: string, data: any) => {
    if (!db) {
      setError({ code: 'firebase/not-initialized', message: 'Firebase is not initialized' })
      return null
    }

    setLoading(true)
    setError(null)

    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: new Date().toISOString(),
      })
      return docRef.id
    } catch (err: any) {
      setError({
        code: err.code || 'unknown',
        message: err.message || 'An unknown error occurred',
      })
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const checkEmailExists = useCallback(async (email: string) => {
    if (!db) {
      setError({ code: 'firebase/not-initialized', message: 'Firebase is not initialized' })
      return false
    }

    setLoading(true)
    setError(null)

    try {
      const q = query(collection(db, 'newsletter'), where('email', '==', email))
      const querySnapshot = await getDocs(q)
      return !querySnapshot.empty
    } catch (err: any) {
      setError({
        code: err.code || 'unknown',
        message: err.message || 'An unknown error occurred',
      })
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    addDocument,
    checkEmailExists,
    error,
    loading,
  }
} 