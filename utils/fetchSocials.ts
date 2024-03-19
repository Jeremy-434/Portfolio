import { Social } from '../typings'

export const fetchSocials = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/getSocials`, { method: 'GET' })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  } else {
    const data = await res.json()
    const socials: Social[] = data.socials

    return socials
  }
}
