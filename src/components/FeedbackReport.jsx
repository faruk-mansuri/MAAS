import React, { useEffect, useState } from 'react'
import { FaCaretRight } from 'react-icons/fa6'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import { customFetch } from '@/utils/customFetch'
import { mapDate } from '@/utils/highlightHelper'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const FeedbackReport = () => {
  const [reportInputValue, setReportInputValue] = useState('')
  const [reportValue, ReportValue] = useState({
    totalFeedbacks: 0,
    avgRatings: 0,
    positiveFeedback: 0,
    negativeFeedback: 0,
    neutralFeedback: 0,
  })

  useEffect(() => {
    const fetchReports = async () => {
      if (!reportInputValue) return

      const { startDate, endDate } = mapDate(reportInputValue)
      if (!startDate || !endDate) return

      try {
        const totalFeedbackPromise = customFetch(
          `/total_sales/?start_date=${startDate}&end_date=${endDate}`
        )
        const avgRatingsPromise = customFetch(
          `/total-unique-customers/?start_date=${startDate}&end_date=${endDate}`
        )
        const positiveFeedbackPromise = customFetch(
          `/total-appointments/?start_date=${startDate}&end_date=${endDate}`
        )
        const negativeFeedbackPromise = customFetch(
          `/total-appointments/?start_date=${startDate}&end_date=${endDate}`
        )
        const neutralFeedbackPromise = customFetch(
          `/total-appointments/?start_date=${startDate}&end_date=${endDate}`
        )

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [feedback, ratings, positive, negative, neutral] =
          await Promise.all([
            totalFeedbackPromise,
            avgRatingsPromise,
            positiveFeedbackPromise,
            negativeFeedbackPromise,
            neutralFeedbackPromise,
          ])
        setReportInputValue({
          ...reportInputValue,
          totalFeedbacks: feedback.data.total_sales,
          avgRatings: ratings.data.total_unique_customers,
          positiveFeedbacks: positive.data.total_appointments,
          negativeFeedbacks: negative.data.total_appointments,
          neutralFeedbacks: neutral.data.total_appointments,
        })
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchReports()
  }, [reportInputValue])

  return (
    <div>
      <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
        <h2 className='font-bold mb-2'>What's New</h2>
        <h1 className='text-2xl font-bold mb-2'>
          Turn Negative Feedback Into
          <br /> Positive Relationships!
        </h1>
        <h2>
          With our new feedback feature, you can easily sent rewards or
          apologies to your customers in just a few clicks.
        </h2>
        <div className='inline-flex gap-2'>
          <button class='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'>
            <span className='inline-flex gap-1'>
              <FaCaretRight className='mt-1' />
              <h1>See how it works</h1>
            </span>
          </button>
          <button class='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3'>
            <span className='inline-flex gap-1'>
              <h1>Explore</h1>
              <LiaLongArrowAltRightSolid className='mt-1' />
            </span>
          </button>
        </div>
      </div>
      <h2 className='font-bold mt-3'>
        Track your customer feedback with real-time analytics.
      </h2>
      <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
        <Select
          onValueChange={(value) => setReportInputValue(value)}
          className='border-none'
        >
          <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
            <SelectValue placeholder='Daily-response'>
              {reportInputValue}
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
          <div className=''>
            <Card className='bg-slate-100'>
              <CardHeader>
                <CardTitle>Total Feedbacks</CardTitle>
                {reportInputValue ? (
                  <CardDescription>
                    Total feedbacks for {reportInputValue.toLowerCase()}.
                  </CardDescription>
                ) : (
                  <CardDescription>Select response value.</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <h3 className='text-2xl'>{reportValue.totalFeedbacks}</h3>
              </CardContent>
            </Card>
          </div>
          <div className='row-span-2'>
            <Card className='bg-slate-100'>
              <CardHeader>
                <CardTitle>Feedback Reports</CardTitle>

                {reportInputValue ? (
                  <CardDescription>
                    Feedback Report for {reportInputValue.toLowerCase()}.
                  </CardDescription>
                ) : (
                  <CardDescription>Select response value.</CardDescription>
                )}
              </CardHeader>
              <CardContent className='inline-flex'>
                <h3 className='text-2xl'>
                  {reportValue.positiveFeedback}% positive feedback
                </h3>
                <h3 className='text-2xl ml-2'>
                  {reportValue.negativeFeedback}% negative feedback
                </h3>
                <h3 className='text-2xl ml-2'>
                  {reportValue.neutralFeedback}% neutral feedback
                </h3>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className='bg-slate-100'>
              <CardHeader>
                <CardTitle>Average Ratings</CardTitle>

                {reportInputValue ? (
                  <CardDescription>
                    Average Ratings for {reportInputValue.toLowerCase()}.
                  </CardDescription>
                ) : (
                  <CardDescription>Select response value.</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <h3 className='text-2xl'>{reportValue.avgRatings}</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackReport
