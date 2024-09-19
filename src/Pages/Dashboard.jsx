import { customFetch } from '@/utils/customFetch'
import { useEffect } from 'react'
import {
  CreditBalance,
  Highlight,
  ProgressPerformance,
  PurchaseGraph,
  Sales,
  Visits,
} from '@/components'
import { useAuth } from '@/context/AuthContext'

const DashboardPage = () => {
  const { isAuthenticated } = useAuth()
  console.log({ isAuthenticated })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch('/count-email-messages/')
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    // fetchData();
  }, [])

  return (
    <div className='mb-4 mt-4'>
      <h1 className='text-3xl tracking-wide'>Hello,</h1>
      <h1 className='text-2xl font-bold'>Your Business At glance✨</h1>

      <Highlight />

      {/* GRAPH */}
      <div className='mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition grid lg:grid-cols-2 gap-x-2'>
        <Sales />
        <Visits />
        <PurchaseGraph />
      </div>

      <CreditBalance />

      <ProgressPerformance />
    </div>
  )
}

export default DashboardPage
