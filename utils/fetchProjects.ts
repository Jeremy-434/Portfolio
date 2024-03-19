import { Project } from '../typings'

export const fetchProjects = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/getProjects`, { method: 'GET' })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  } else {
    const data = await res.json()
    const projects: Project[] = data.projects

    return projects
  }
}
