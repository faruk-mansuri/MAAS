import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MdCalendarMonth } from 'react-icons/md'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const getCurrentDate = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

const When = () => {
  const [sendNow, setSendNow] = useState('')
  const [sendLater, setSendLater] = useState(null)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleSendNow = () => {
    setSendNow(getCurrentDate())
  }

  const handleSendLater = () => {
    setShowDatePicker(true)
  }

  const handleDateChange = (date) => {
    setSendLater(date)
    setShowDatePicker(false)
  }

  return (
    <div className='gap-2'>
      <Card className='bg-slate-100'>
        <CardHeader>
          <CardTitle className='ml-4 mt-3 flex items-center'>
            <MdCalendarMonth className='ml-1 mr-2' />
            When do you want to send?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='inline-flex gap-2'>
            <button
              onClick={handleSendNow}
              className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'
            >
              Send Now
            </button>
            <button
              onClick={handleSendLater}
              className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3'
            >
              Send Later
            </button>
          </div>
          {showDatePicker && (
            <DatePicker
              selected={sendLater}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat='Pp'
              className='mt-2 bg-white border border-gray-300 rounded px-2 py-1 shadow'
            />
          )}
          {sendLater && (
            <div className='mt-2'>
              <p className='text-sm text-gray-600'>
                Scheduled for: {sendLater.toString()}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default When
