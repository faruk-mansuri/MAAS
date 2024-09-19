import React from 'react'
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

const RecentAutoCamps = () => {
  return (
    <div>
      <h1 className='text-1xl font-bold mt-3 ml-2'>Recent Auto Campaigns</h1>
      <div className='inline-flex ml-2 gap-2'>
        <button class='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-1 px-3 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'>
          Active
        </button>
        <button class='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-1 px-3 border border-slate-200 rounded shadow mt-3 mb-3'>
          Inactive
        </button>
        <Select
          //onValueChange={(value) => setPerformanceInputValue(value)}
          className='border-none'
        >
          <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none mt-1'>
            <SelectValue placeholder='All Objectives'></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all objectives'>All Objectives</SelectItem>
            <SelectItem value='first customer'>
              Welcome first customer
            </SelectItem>
            <SelectItem value='back customer'>
              Bring back your customer
            </SelectItem>
            <SelectItem value='win customer'>Win back your customer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
        <h1 className='text-1xl'>Celebrate customer's birthdays</h1>
        <h1 className='text-2xl'>
          Lets turn up the volume on your celebration to get 25% off.⚡
        </h1>
        <h1 className='text-1xl'>
          Sent 3 days before their birthdays at 10:00am - expires in 7 days.
        </h1>
        <div className='grid md:grid-cols-4 gap-2'>
          <Card className='bg-slate-100'>
            <CardHeader>
              <CardTitle>Delivered</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>0</h3>
            </CardContent>
          </Card>
          <Card className='bg-slate-100'>
            <CardHeader>
              <CardTitle>Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>0</h3>
            </CardContent>
          </Card>
          <Card className='bg-slate-100'>
            <CardHeader>
              <CardTitle>Visit Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>0%</h3>
            </CardContent>
          </Card>
          <Card className='bg-slate-100'>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className='text-2xl'>0</h3>
            </CardContent>
          </Card>
        </div>
        <h1 className='text-1xl'>Activated On :</h1>
        <h1 className='text-1xl'>Last Updated On:</h1>
      </div>
    </div>
  )
}

export default RecentAutoCamps
