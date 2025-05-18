import { useState, useCallback } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { FirebaseError as FirebaseAppError } from 'firebase/app'

// Rename our interface to avoid conflict with imported FirebaseError
interface CustomFirebaseError {
  code: string
  message: string
}

interface DocumentData {
  [key: string]: string | number | boolean | Date | null
}

export const useFirebase = () => {
  const [error, setError] = useState<CustomFirebaseError | null>(null)
  const [loading, setLoading] = useState(false)

  const addDocument = useCallback(async (collectionName: string, data: DocumentData) => {
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
    } catch (err) {
      const firebaseError = err as FirebaseAppError
      setError({
        code: firebaseError.code || 'unknown',
        message: firebaseError.message || 'An unknown error occurred',
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
    } catch (err) {
      const firebaseError = err as FirebaseAppError
      setError({
        code: firebaseError.code || 'unknown',
        message: firebaseError.message || 'An unknown error occurred',
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