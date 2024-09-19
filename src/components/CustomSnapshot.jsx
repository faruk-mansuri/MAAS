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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

 const CustomSnapshot = () => {
    const [customerInputValue, setCustomerInputValue] = useState('');
  const [customerValue, setCustomerValue] = useState({
    totalUniqueCustomers: 0,
    newcustomers: 0,
    totalRepeatCustomers: 0
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      if (!customerInputValue) return;

      const { startDate, endDate } = mapDate(customerInputValue);
      if (!startDate || !endDate) return;

      try {
        const totalUniqueCustomersPromise = customFetch(
          `/?start_date=${startDate}&end_date=${endDate}`
        );
        const  newcustomerssPromise = customFetch(
          `/?start_date=${startDate}&end_date=${endDate}`
        );
        const repeatCustomersPromise = customFetch(
          `/?start_date=${startDate}&end_date=${endDate}`
        );

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [uniqueCustomers, newCustomers, repeatCustomers] = await Promise.all([
            totalUniqueCustomersPromise,
            newcustomerssPromise,
            repeatCustomersPromise
        ]);
        setCustomerValue({
          ...customerValue,
          totalUniqueCustomers: uniqueCustomers.data.total_unique_customers,
          newcustomers: newCustomers.data.new_customers,
          totalRepeatCustomers: repeatCustomers.data.repeat_customers,
        });
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchCustomers();
  }, [customerInputValue]);

  return (
    <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
      <Select
        onValueChange={(value) => setCustomerInputValue(value)}
        className='border-none'
      >
        <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
          <SelectValue placeholder='Customer Insights'>
            {customerInputValue}
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

      <div className='grid md:grid-cols-3 gap-2'>
        {/* TOTAL SALES */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <CardTitle>Total Unique Customers</CardTitle>
            {customerInputValue ? (
              <CardDescription>
                Total unique Customers {customerInputValue.toLowerCase()}.
              </CardDescription>
            ) : (
              <CardDescription>Select Custom Insights value.</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <h3 className='text-2xl'>{customerValue.totalUniqueCustomers}</h3>
          </CardContent>
        </Card>

        {/* TOTAL ORDERS */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <CardTitle>New Customers</CardTitle>

            {customerInputValue ? (
              <CardDescription>
                New Customers for {customerInputValue.toLowerCase()}.
              </CardDescription>
            ) : (
              <CardDescription>Select Customer Insights value.</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <h3 className='text-2xl'>{customerValue.newcustomers}</h3>
          </CardContent>
        </Card>

        {/* TOTAL CUSTOMERS. */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <CardTitle>Repeat Customers</CardTitle>

            {customerInputValue ? (
              <CardDescription>
                Total Repeat Customers for {customerInputValue.toLowerCase()}.
              </CardDescription>
            ) : (
              <CardDescription>Select Customer Insights value.</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <h3 className='text-2xl'>{customerValue.totalRepeatCustomers}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CustomSnapshot
