import React, { useState, useEffect } from 'react'
import { IoMdGift } from 'react-icons/io'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

const CampaignReward = () => {
  const [selectedReward, setSelectedReward] = useState(null)
  const [selectedOption, setSelectedOption] = useState('')
  const [checked, setChecked] = useState(false)
  const [minPurchaseValue, setMinPurchaseValue] = useState('')

  const handleButtonClick = (rewardType) => {
    setSelectedReward(rewardType)
    setSelectedOption(null)
    setChecked(false)
    setMinPurchaseValue('')
  }
  const handleCheck = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    if (!checked) {
      setMinPurchaseValue('') // Clear value when the checkbox is unchecked
    }
  }, [checked])

  return (
    <div>
      <Card className='bg-slate-100'>
        <CardHeader>
          <CardTitle className='ml-4 mt-3 flex items-center'>
            <IoMdGift className='ml-1 mr-2' />
            Would you like to add some rewards?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='bg-slate-50 px-2 py-2 mb-2'>
            <h1>When do you want to send?</h1>
            <div className='inline-flex gap-2'>
              <input
                type='number'
                id='reward-days'
                className='block w-82 p-2 text-gray-900 border border-gray-300 rounded-lg
                  bg-gray-50 text-xs dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white mb-3 mt-1'
                placeholder='Enter days or months'
                required
              />
              <Select
                className='block w-full max-width-sm p-1 text-gray-900 border border-gray-300 rounded-lg
                  bg-slate-50 text-xs dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white mb-3'
              >
                <SelectTrigger className='w-[180px] bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
                  <SelectValue placeholder='Choose Duration'></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='days'>Days after 1st Purchase</SelectItem>
                  <SelectItem value='weeks'>
                    Weeks after 1st Purchase
                  </SelectItem>
                  <SelectItem value='months'>
                    Months after 1st Purchase
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='flex flex-col justify-content-center bg-slate-50 px-2 py-2 mt-2'>
            {/* Buttons to select the reward type */}
            <button
              className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow gap-1 mr-3 mt-4'
              onClick={() => handleButtonClick('percentDiscount')}
            >
              Redeem percent discount
            </button>
            <button
              className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow gap-1 mr-3 mt-4'
              onClick={() => handleButtonClick('rupeeDiscount')}
            >
              Redeem rupee discount
            </button>
            <button
              className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow gap-1 mr-3 mt-4'
              onClick={() => handleButtonClick('freeItem')}
            >
              Redeem a free item
            </button>
            <button
              className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow gap-1 mr-3 mt-4'
              onClick={() => handleButtonClick('noDiscount')}
            >
              No Discount
            </button>

            {selectedReward === 'percentDiscount' && (
              <div className='inline-flex gap-2'>
                <button
                  className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'
                  onClick={() => setSelectedOption('entirePurchase')}
                >
                  Entire Purchase
                </button>
                <button
                  className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'
                  onClick={() => setSelectedOption('specificPurchase')}
                >
                  Specific Purchase
                </button>
              </div>
            )}

            {selectedReward === 'rupeeDiscount' && (
              <div className='inline-flex gap-2'>
                <button
                  className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'
                  onClick={() => setSelectedOption('entirePurchase')}
                >
                  Entire Purchase
                </button>
                <button
                  className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow mt-3 mb-3 gap-1'
                  onClick={() => setSelectedOption('specificPurchase')}
                >
                  Specific Purchase
                </button>
              </div>
            )}
            {selectedReward === 'freeItem' && (
              <div>
                <h1 className='font-bold'>Add Items from POS</h1>
                <h2>
                  Add all the options as per your reward, and the customer can
                  redeem any 1 from them.
                </h2>
                <Select className='block w-full max-width-sm p-1 text-gray-900 border border-gray-300 rounded-lg bg-slate-50 text-xs dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white mb-3 mt-2'>
                  <SelectTrigger className='w-[180px] bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
                    <SelectValue placeholder='Add free items for reward' />
                  </SelectTrigger>
                </Select>
                <Checkbox id='min-purchase' onClick={handleCheck} />
                <label
                  htmlFor='min-purchase'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1'
                >
                  Minimum Purchase required for Redemption.
                </label>
                {checked && (
                  <input
                    type='number'
                    id='reward-days'
                    className='block w-82 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white mb-3'
                    placeholder=' '
                    required
                  />
                )}
              </div>
            )}
            {selectedReward === 'noDiscount' && <h1>No discount applied.</h1>}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CampaignReward
