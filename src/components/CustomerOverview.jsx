import React from 'react';
import CustomSnapshot from './CustomSnapshot';
import { CustomerGraph, NewReturning, RepeatCustomerGraph } from '.';

const CustomerOverview = () => {
  return (
    <div className='mt-2'>
      <h1 className='text-3xl font-bold'>Customer Snapshot</h1>
      <CustomSnapshot />
      <div className='mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
      <NewReturning />
      </div>
    
      <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
      <h1 className='text-2xl mt-3 font-bold'>Know your customers like never before</h1>
      <div className='grid md:grid-cols-2 gap-2'>
        <CustomerGraph />
        <RepeatCustomerGraph />
      </div>
      </div>
    </div>
  )
}

export default CustomerOverview
