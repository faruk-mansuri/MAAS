
import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { customFetch } from '@/utils/customFetch';
import { mapDate } from '@/utils/highlightHelper';


const NewReturning = () => {
    const [returningInputValue, setreturningInputValue] = useState('');
  const [returningValue, setReturningValue] = useState({
    returnValue: 0,
    newReturnValue: 0,
    startDate: 0,
    endDate: 0,
  });

  useEffect(() => {
    const fetchReturnings = async () => {
      if (!returningInputValue) return;

      const { startDate, endDate } = mapDate(returningInputValue);
      if (!startDate || !endDate) return;

      try {
        const returnValuePromise = customFetch(
          `/?start_date=${startDate}&end_date=${endDate}`
        );
        const newReturnValuePromise = customFetch(
          `/?start_date=${startDate}&end_date=${endDate}`
        );
        const startDatePromise = customFetch(
          `/?start_date=${startDate}&end_date=${endDate}`
        );
        const endDatePromise = customFetch(
            `/?start_date=${startDate}&end_date=${endDate}`
          );

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [returnVal, newReturnVal, startDate, endDate] = await Promise.all([
            returnValuePromise,
            newReturnValuePromise,
            startDatePromise,
            endDatePromise
        ]);
        setReturningValue({
          ...returningValue,
          returnValue: returnVal.data.return_value,
          newReturnValue: newReturnVal.data.new_return_value,
          //startDate: startDate.data.start_date,
          //endDate: endDate.data.end_date
        });
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchReturnings();
  }, [returningInputValue]);

  return (
    <div>
    <Select
        onValueChange={(value) => setreturningInputValue(value)}
        className='border-none'
      >
        <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
          <SelectValue placeholder='New Vs Returning'>
            {returningInputValue}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='7 days'>Last 7 Days.</SelectItem>
          <SelectItem value='30 days'>Last 30 Days.</SelectItem>
          <SelectItem value='this month'>This Month.</SelectItem>
          <SelectItem value='last month'>Last Month.</SelectItem>
          <SelectItem value='last 12 months'>Last 12 Months.</SelectItem>
        </SelectContent>
      </Select>

      <div>
        <h2 className='font-bold ml-4 mb-1 mt-1'>  ₹ {returningValue.returnValue}</h2>
        <h2 className=' ml-4 mb-1'>  New Return Value : {returningValue.newReturnValue}</h2>
        <h2 className=' ml-4 mb-1'>  Start Date : {returningValue.startDate}</h2>
        <h2 className=' ml-4 mb-1'>  End Date : {returningValue.endDate}</h2>
      </div>  
    </div>
  )
}

export default NewReturning
