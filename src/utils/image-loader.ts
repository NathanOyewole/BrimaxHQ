export async function loadImage(src: string, retries = 3): Promise<string> {
  try {
    const response = await fetch(src, { 
      signal: AbortSignal.timeout(5000) // 5 second timeout
    })
    if (!response.ok) throw new Error('Failed to load image')
    return src
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Wait 1 second before retry
      return loadImage(src, retries - 1)
    }
    throw error
  }
} 