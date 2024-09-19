import React, { useState } from 'react'
import { CustomerList, CustomerOverview, Segmentation } from '@/components'
import CustomerActivity from '@/components/CustomerActivity'

const CustomerInsightsPage = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ['Overview', 'Segmentation', 'Customer List', 'Activity']
  const contents = [
    <CustomerOverview />,
    <Segmentation />,
    <CustomerList />,
    <CustomerActivity />,
  ]

  return (
    <div className='mb-4 mt-4'>
      <h1 className='text-4xl font-bold ml-2'>Customer Insights</h1>
      <h1 className='text-2xl pb-2 ml-2'>
        All your customer behavior data, segmentation details, and activity,
        easily accessible in one place.
      </h1>

      <div className='flex-4 mt-2 justify-start items-center'>
        {tabs.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={`tab_${index}`}
            className={`px-4 border ${
              activeTab === index ? 'bg-slate-200 text-black' : ''
            } py-3 hover:bg-slate-200`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='flex flex-col mx-auto'>
        {contents &&
          contents.map((content, index) => {
            if (activeTab === index) {
              return (
                <div className='px-3 py-4' key={`content_${index}`}>
                  {content}
                </div>
              )
            }
            return null
          })}
      </div>
    </div>
  )
}

export default CustomerInsightsPage
