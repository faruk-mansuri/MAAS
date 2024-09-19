import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { customFetch } from '@/utils/customFetch'
import { mapDate } from '@/utils/highlightHelper'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const AutoCampPerformance = () => {
  const [performanceInputValue, setPerformanceInputValue] = useState('')
  const [performanceValue, setPerformanceValue] = useState({
    totalRevenue: 0,
    totalDelivered: 0,
    customerVisits: 0,
    visitRate: 0,
  })

  useEffect(() => {
    const fetchPerformance = async () => {
      if (!performanceInputValue) return

      const { startDate, endDate } = mapDate(performanceInputValue)
      if (!startDate || !endDate) return

      try {
        const totalRevenuePromise = customFetch(
          `/total_sales/?start_date=${startDate}&end_date=${endDate}`
        )
        const totalDeliveredPromise = customFetch(
          `/total-unique-customers/?start_date=${startDate}&end_date=${endDate}`
        )
        const customerVisitsPromise = customFetch(
          `/total-appointments/?start_date=${startDate}&end_date=${endDate}`
        )
        const visitRatePromise = customFetch(
          `/total-appointments/?start_date=${startDate}&end_date=${endDate}`
        )

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [revenue, delivered, visits, rate] = await Promise.all([
          totalRevenuePromise,
          totalDeliveredPromise,
          customerVisitsPromise,
          visitRatePromise,
        ])
        setPerformanceValue({
          ...performanceValue,
          totalRevenue: revenue.data.total_sales,
          totalDelivered: delivered.data.total_unique_customers,
          customerVisits: visits.data.total_appointments,
          visitRate: rate.data.total_appointments,
        })
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchPerformance()
  }, [performanceInputValue])

  return (
    <div>
      <h1 className='text-2xl ml-2 mt-2'>Overall Performance</h1>
      <h2 className='ml-2'>
        Track the performance of your automated marketing campaigns with
        real-time analytics reports. This will look exciting once you activate
        automated campaigns.
      </h2>
      <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
        <Select
          onValueChange={(value) => setPerformanceInputValue(value)}
          className='border-none'
        >
          <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
            <SelectValue placeholder='Select date'>
              {performanceInputValue}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='7 days'>Last 7 Days.</SelectItem>
            <SelectItem value='30 days'>Last 30 Days.</SelectItem>
            <SelectItem value='this month'>This Month.</SelectItem>
            <SelectItem value='last month'>Last Month.</SelectItem>
            <SelectItem value='last 12 months'>Last 12 Months.</SelectItem>
          </SelectContent>
        </Select>

        <div className='grid md:grid-cols-2 gap-2'>
          {/* TOTAL SALES */}
          <Card className='bg-slate-100'>
            <CardHeader>
              {performanceInputValue ? (
                <CardDescription>
                  Total revenue for {performanceInputValue.toLowerCase()}.
                </CardDescription>
              ) : (
                <CardDescription>Select date value.</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>{performanceValue.totalRevenue}</h3>
            </CardContent>
          </Card>

          {/* TOTAL ORDERS */}
          <Card className='bg-slate-100'>
            <CardHeader>
              {performanceInputValue ? (
                <CardDescription>
                  Total deleveries for {performanceInputValue.toLowerCase()}.
                </CardDescription>
              ) : (
                <CardDescription>Select date value.</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>{performanceValue.totalDelivered}</h3>
            </CardContent>
          </Card>

          {/* TOTAL CUSTOMERS. */}
          <Card className='bg-slate-100'>
            <CardHeader>
              {performanceInputValue ? (
                <CardDescription>
                  Total customer visits for{' '}
                  {performanceInputValue.toLowerCase()}.
                </CardDescription>
              ) : (
                <CardDescription>Select date value.</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>{performanceValue.customerVisits}</h3>
            </CardContent>
          </Card>

          {/* REWARDS. */}
          <Card className='bg-slate-100'>
            <CardHeader>
              {performanceInputValue ? (
                <CardDescription>
                  Average visit rate for {performanceInputValue.toLowerCase()}.
                </CardDescription>
              ) : (
                <CardDescription>Select date value.</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>{performanceValue.visitRate}%</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AutoCampPerformance
