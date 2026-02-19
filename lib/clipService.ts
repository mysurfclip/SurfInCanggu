import { Clip } from './types'
import { mockClips } from './clipData'

export async function getClips(): Promise<Clip[]> {
  // 🔹 For now → return mock
  return mockClips

  /**
   * 🔹 Later when backend ready:
   *
   * const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clips`)
   * if (!res.ok) throw new Error('Failed to fetch clips')
   * return res.json()
   */
}
