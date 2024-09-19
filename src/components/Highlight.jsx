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

const Highlight = () => {
  const [highlightInputValue, setHighlightInputValue] = useState('');
  const [highlightValue, setHighlightValue] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0,
    rewardRedeem: 0,
  });

  useEffect(() => {
    const fetchHighlights = async () => {
      if (!highlightInputValue) return;

      const { startDate, endDate } = mapDate(highlightInputValue);
      if (!startDate || !endDate) return;

      try {
        const totalSalesPromise = customFetch(
          `/total_sales/?start_date=${startDate}&end_date=${endDate}`
        );
        const totalCustomersPromise = customFetch(
          `/total-unique-customers/?start_date=${startDate}&end_date=${endDate}`
        );
        const totalOrdersPromise = customFetch(
          `/total-appointments/?start_date=${startDate}&end_date=${endDate}`
        );

        // TODO
        // const rewardPromise = customFetch(
        //   `/api/rewards/?start_date=${startDate}&end_date=${endDate}`
        // );

        const [sales, customers, orders] = await Promise.all([
          totalSalesPromise,
          totalCustomersPromise,
          totalOrdersPromise,
        ]);
        setHighlightValue({
          ...highlightValue,
          totalSales: sales.data.total_sales,
          totalCustomers: customers.data.total_unique_customers,
          totalOrders: orders.data.total_appointments,
        });
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchHighlights();
  }, [highlightInputValue]);

  return (
    <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
      <Select
        onValueChange={(value) => setHighlightInputValue(value)}
        className='border-none'
      >
        <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
          <SelectValue placeholder='Select highlight'>
            {highlightInputValue}
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

      <div className='grid md:grid-cols-2 gap-2'>
        {/* TOTAL SALES */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            {highlightInputValue ? (
              <CardDescription>
                Total sales for {highlightInputValue.toLowerCase()}.
              </CardDescription>
            ) : (
              <CardDescription>Select highlight value.</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <h3 className='text-2xl'>{highlightValue.totalSales}</h3>
          </CardContent>
        </Card>

        {/* TOTAL ORDERS */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>

            {highlightInputValue ? (
              <CardDescription>
                Total orders for {highlightInputValue.toLowerCase()}.
              </CardDescription>
            ) : (
              <CardDescription>Select highlight value.</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <h3 className='text-2xl'>{highlightValue.totalOrders}</h3>
          </CardContent>
        </Card>

        {/* TOTAL CUSTOMERS. */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>

            {highlightInputValue ? (
              <CardDescription>
                Total customers for {highlightInputValue.toLowerCase()}.
              </CardDescription>
            ) : (
              <CardDescription>Select highlight value.</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <h3 className='text-2xl'>{highlightValue.totalCustomers}</h3>
          </CardContent>
        </Card>

        {/* REWARDS. */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <CardTitle>Rewards</CardTitle>

            {highlightInputValue ? (
              <CardDescription>
                Rewards for {highlightInputValue.toLowerCase()}.
              </CardDescription>
            ) : (
              <CardDescription>Select highlight value.</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <h3 className='text-2xl'>{highlightValue.rewardRedeem}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Highlight;
