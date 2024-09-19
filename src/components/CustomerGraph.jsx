import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'

const CustomerGraph = () => {
  return (
    <div>
      <Card className='bg-slate-100'>
        <CardHeader>
          <CardTitle>Customers By Day</CardTitle>
          <h1 className='font-bold text-2xl ml-2 mb-1 mt-4'>88%</h1>
          <h2>Customer make purchase only on weekend</h2>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-rows-2 gap-2'>
            <div className='space-y-2 bg-slate-50 rounded p-2'>
              <h1 className='text-2xl'>What it means ? </h1>
              Your customer's love the weekend but your business suffers
              mid-week
            </div>
            <div className='space-y-2 bg-slate-50 rounded p-2'>
              <h1 className='text-3xl'>Take Action!</h1>
              <h2>
                Target weekenders with weekday incentives. Time shifting will
                draw more business during slow-days, and also extend your
                brand's top-of-mind awareness.
              </h2>
              <Link to={'/campaigns'}>
                <button className='mt-3 px-2 py-2 rounded-sm bg-slate-200'>
                  Send Campaign
                </button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CustomerGraph
