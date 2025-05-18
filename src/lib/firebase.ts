import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getAuth, Auth } from 'firebase/auth'
import { getAnalytics, Analytics } from 'firebase/analytics'
import { getFirebaseConfig } from './firebase-config'

interface FirebaseServices {
  app: FirebaseApp | null
  db: Firestore | null
  auth: Auth | null
  analytics: Analytics | null
  isInitialized: boolean
}

let firebaseServices: FirebaseServices = {
  app: null,
  db: null,
  auth: null,
  analytics: null,
  isInitialized: false,
}

export const initializeFirebase = (): FirebaseServices => {
  if (firebaseServices.isInitialized) {
    return firebaseServices
  }

  try {
    const config = getFirebaseConfig()
    
    if (!config) {
      console.warn('Firebase configuration is missing. Some features may not work.')
      return firebaseServices
    }

    const app = getApps().length === 0 ? initializeApp(config) : getApps()[0]
    const db = getFirestore(app)
    const auth = getAuth(app)
    let analytics = null
    if (typeof window !== 'undefined') {
      try {
        analytics = getAnalytics(app)
      } catch (error: unknown) {
        console.warn('Analytics initialization failed:', error)
      }
    }

    firebaseServices = {
      app,
      db,
      auth,
      analytics,
      isInitialized: true,
    }

    return firebaseServices
  } catch (error) {
    console.error('Firebase initialization failed:', error)
    return firebaseServices
  }
}

export const { app, db, auth, analytics } = initializeFirebase() 