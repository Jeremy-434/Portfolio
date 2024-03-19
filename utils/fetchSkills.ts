import { Skill } from '../typings'

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, { method: 'GET' })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  } else {
    const data = await res.json()
    const skills: Skill[] = data.skills

    return skills
  }
}
