import { Experience } from '../typings'

export const fetchExperiences = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/getExperiences`, { method: 'GET' })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  } else {
    const data = await res.json()
    const experiences: Experience[] = data.experiences

    return experiences
  }
}
