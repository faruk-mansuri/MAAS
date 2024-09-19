import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const AutoCampCards = () => {
  return (
    <div>
      <div className='space-y-2 bg-slate-50 rounded p-2'>
        <h1 className='text-2xl'>See It. Forget It.</h1>
        <h2>
          Automated Campaigns will be sent to customers on an ongoing basis
          after a one-time setup. You can stop these at any time.
        </h2>
      </div>
      <h1 className='mt-3 text-2xl font-bold mb-1 ml-2'>Try these next.</h1>
      <h2 className='mt-1 mb-3 ml-2'>
        Good Job ! Activate these pending automated campaigns to grow your
        business.
      </h2>
      <div className='grid md:grid-cols-2 gap-2 mt-1'>
        <Card className='bg-slate-50'>
          <CardTitle className='ml-2 mt-1 text-2xl'>
            Welcome First Time Customers.
          </CardTitle>
          <CardContent>
            <h3 className='text-1xl'>
              Introduce your brand to first time customers and encourage them to
              become loyal returning customers with post-sale customers.
            </h3>
          </CardContent>
        </Card>
        <Card className='bg-slate-50'>
          <CardTitle className='ml-2 mt-1 text-2xl'>
            Bring back your customers!
          </CardTitle>
          <CardContent>
            <h3 className='text-1xl'>
              When customer haven't visited in while, this campaign send them an
              incentive to return again much sooner than they would otherwise.{' '}
            </h3>
          </CardContent>
        </Card>
        <Card className='bg-slate-50'>
          <CardTitle className='ml-2 mt-1 text-2xl'>
            Win back customers!
          </CardTitle>
          <CardContent>
            <h3 className='text-1xl'>
              Get customers to visit again! This campaign can sends an incentive
              to your old customers who haven't purchased in a long time.{' '}
            </h3>
          </CardContent>
        </Card>
        <Card className='bg-slate-50'>
          <CardTitle className='ml-2 mt-1 text-2xl'>
            Celebrate customer's birhtday.
          </CardTitle>
          <CardContent>
            <h3 className='text-1xl'>
              Strengthen customer relationships and make them feel special. This
              campaign wishes your customers "Happy Birhtday".{' '}
            </h3>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AutoCampCards
