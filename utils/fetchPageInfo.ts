import { PageInfo } from '../typings'

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, { method: 'GET' })

  console.log('🚀 ~ res.status:', res.status)
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  } else {
    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo

    return pageInfo
  }
}
