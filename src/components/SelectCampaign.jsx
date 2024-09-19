import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const SelectCampaign = () => {
  const [selectedChannel, setSelectedChannel] = useState('')
  const [selectedSubOption, setSelectedSubOption] = useState('')

  const handleChannelChange = (event) => {
    setSelectedChannel(event.target.value)
    setSelectedSubOption('')
  }

  const handleSubOptionChange = (event) => {
    setSelectedSubOption(event.target.value)
  }

  return (
    <div className='grid h-screen md:grid-cols-2'>
      <div className='bg-slate-400'>
        <div className='flex justify-center text-4xl text-bold ml-7 mt-32 items-center'>
          How do you want to send the campaign ?
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex justify-between items-center text-2xl font-bold'>
          <a
            href='/campaigns'
            className='underline text-gray-800 font-semibold ml-3 mt-3 mb-3 gap-1'
          >
            Back
          </a>
          <button className='underline text-gray-800 font-semibold mr-3 mt-3 mb-3'>
            Next
          </button>
        </div>
        <div className='flex justify-center mt-11'>
          <Card className='bg-slate-400 w-64 h-100'>
            <CardHeader>
              <CardTitle className='mt-7 ml-2'>Select Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <label
                htmlFor='campaign-name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Enter Campaign Name:{' '}
              </label>
              <input
                type='text'
                id='campaign-name'
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
           bg-gray-50 text-xs dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white mb-3'
                required
              />
              <ul className='text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                <li className='border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                  <div className='flex items-center ps-3'>
                    <input
                      id='email-radio'
                      type='radio'
                      value='email'
                      checked={selectedChannel === 'email'}
                      onChange={handleChannelChange}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
               dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                      htmlFor='email-radio'
                      className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Email
                    </label>
                  </div>

                  {selectedChannel === 'email' && (
                    <ul className='text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-2'>
                      <li className='border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                        <div className='flex items-center ps-3'>
                          <input
                            id='custom-template-radio'
                            type='radio'
                            value='custom-template'
                            checked={selectedSubOption === 'custom-template'}
                            onChange={handleSubOptionChange}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
               dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                          />
                          <label
                            htmlFor='custom-template-radio'
                            className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                          >
                            Custom Template
                          </label>
                        </div>
                      </li>
                      <li className='border-gray-200 rounded-t-lg dark:border-gray-600'>
                        <div className='flex items-center ps-3'>
                          <input
                            id='custom-message-radio'
                            type='radio'
                            value='custom-message'
                            checked={selectedSubOption === 'custom-message'}
                            onChange={handleSubOptionChange}
                            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
               dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                          />
                          <label
                            htmlFor='custom-message-radio'
                            className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                          >
                            Custom Message
                          </label>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
                <li className='border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                  <div className='flex items-center ps-3'>
                    <input
                      id='whatsapp-radio'
                      type='radio'
                      value='whatsapp'
                      checked={selectedChannel === 'whatsapp'}
                      onChange={handleChannelChange}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
             focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2
             dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                      htmlFor='whatsapp-radio'
                      className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      WhatsApp
                    </label>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SelectCampaign
