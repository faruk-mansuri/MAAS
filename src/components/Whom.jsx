import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { MdPerson } from 'react-icons/md'

const Whom = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)
  const handleClose = () => setOpen(false)

  return (
    <div className='gap-2'>
      <Card className='bg-slate-100'>
        <CardHeader>
          <CardTitle className='ml-4 mt-3 flex items-center'>
            <MdPerson className='ml-2 mr-2' />
            Whom do you want to send ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='inline-flex gap-2'>
            <button className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'>
              All Customers
            </button>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  onClick={handleOpen}
                  className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3'
                >
                  Advanced Filters
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='text-2xl text-bold mb-3'>
                    Filter Customers
                  </DialogTitle>
                  <DialogDescription>
                    <h1>Customers Visited in:</h1>
                    <div className='inline-flex gap-2 mt-2'>
                      <div>
                        <button className='px-2 py-2 bg-slate-200 hover:bg-slate-400 text-gray-800 font-semibold border border-slate-400 shodow rounded-lg'>
                          Last 30 days
                        </button>
                      </div>
                      <div>
                        <button className='px-2 py-2 bg-slate-200 hover:bg-slate-400 text-gray-800 font-semibold border border-slate-400 shodow rounded-lg'>
                          Last 90 days
                        </button>
                      </div>
                      <textarea
                        id='message'
                        rows='1'
                        className='block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2'
                        placeholder='Customer visited'
                      ></textarea>
                    </div>
                    <h1 className='mt-4'>Customers has not Visited in:</h1>
                    <div className='inline-flex gap-2 mt-2'>
                      <div>
                        <button className='px-2 py-2 bg-slate-200 hover:bg-slate-400 text-gray-800 font-semibold border border-slate-400 shodow rounded-lg'>
                          Last 30 days
                        </button>
                      </div>
                      <div>
                        <button className='px-2 py-2 bg-slate-200 hover:bg-slate-400 text-gray-800 font-semibold border border-slate-400 shodow rounded-lg'>
                          Last 90 days
                        </button>
                      </div>
                      <textarea
                        id='message'
                        rows='1'
                        className='block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2'
                        placeholder='Customer not visited'
                      ></textarea>
                    </div>
                  </DialogDescription>
                  <DialogDescription>
                    <h1 className='mb-2 mt-2'>Customer Segment</h1>
                    <div className='flex items-center space-x-1'>
                      <Checkbox id='customers' />
                      <label
                        htmlFor='customers'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        New Customers
                      </label>
                      <Checkbox id='risk-customers' />
                      <label
                        htmlFor='risk-customers'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        At Risk Customers
                      </label>
                      <Checkbox id='lost-customers' />
                      <label
                        htmlFor='lost-customers'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        Lost Customers
                      </label>
                      <Checkbox id='promising-customers' />
                      <label
                        htmlFor='promising-customers'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        Promising Customers
                      </label>
                      <Checkbox id='loyal-customers' />
                      <label
                        htmlFor='loyal-customers'
                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      >
                        Loyal Customers
                      </label>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Whom
