import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

const ReferralsPage = () => {
  return (
    <div className='grid h-screen md:grid-cols-2'>
      <div className='bg-slate-400'>
        <div className='flex justify-center text-3xl text-bold mt-32 items-center'>
          What's More ?
        </div>
        <p className='flex items-center ml-3 mb-3'>
          <FaRegCheckCircle className='mr-2' />
          Get new customers
        </p>
        <p className='flex items-center ml-3 mb-3'>
          <FaRegCheckCircle className='mr-2' />
          Know your potential customers
        </p>
        <p className='flex items-center ml-3 mb-3'>
          <FaRegCheckCircle className='mr-2' />
          Send exciting campaigns to potential customers.
        </p>
      </div>
      <div className='bg-slate-200 flex justify-center'>
        <div className='flex flex-col justify-center text-2xl text-bold items-center'>
          <h1>The Refrral program</h1>
          <h2>Let your existing customers bring new customers for you.</h2>
          <div className='inline-flex gap-2'>
            <button class='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'>
              Continue Creating
            </button>
            <button class='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3'>
              How it works ?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralsPage
