import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MdOutlineWhatsapp } from 'react-icons/md'
import Whom from './Whom'
import When from './When'

const WhatsappMessage = () => {
  return (
    <div>
      <Card className='bg-slate-100'>
        <CardTitle className='ml-6 mt-3 flex items-center'>
          <MdOutlineWhatsapp className='ml-2  mr-2' /> Edit Whatsapp Message
        </CardTitle>
        <CardContent>
          <label
            htmlFor='whatsapp-name'
            className='block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Enter the Subject of message:{' '}
          </label>
          <input
            type='text'
            id='whatsapp-name'
            className='block w-80 p-2 text-gray-900 border border-gray-300 rounded-lg
           bg-gray-50 text-xs dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white mb-4'
            required
          />
          <label
            htmlFor='whatsapp-message'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Enter your custom message:
          </label>
          <textarea
            id='whatsapp-message'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2'
            placeholder='Write your message here...'
          ></textarea>
          <button className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow gap-1 mr-3 mt-4'>
            Generate your text using AI
          </button>
        </CardContent>
      </Card>
      <Whom />
      <When />
    </div>
  )
}

export default WhatsappMessage
