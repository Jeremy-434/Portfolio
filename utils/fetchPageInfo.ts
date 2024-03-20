import { PageInfo } from '../typings'

export const fetchPageInfo = async () => {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/getPageInfo`, { method: 'GET' })

  console.log('🚀 ~ res.status:', res.status)
  console.log('🚀 ~ res:', res)
  console.log('🚀 ~ NEXT_PUBLIC_BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL)
  console.log('🚀 ~ VERCEL_URL:', process.env.VERCEL_URL)
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  } else {
    const data = await res.json()
    console.log('🚀 ~ data:', data)
    const pageInfo: PageInfo = data.pageInfo
    console.log('🚀 ~ pageInfo:', pageInfo)

    return pageInfo
  }
}
