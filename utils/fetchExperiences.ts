import { Experience } from '../typings'

export const fetchExperiences = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`, { method: 'GET' })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  } else {
    const data = await res.json()
    const experiences: Experience[] = data.experiences

    return experiences
  }
}
