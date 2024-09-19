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
import Chart from 'react-apexcharts';
import { formattedDates } from '@/utils/formatDate';
import { Label } from './ui/label';

const Sales = () => {
  const [salesInputValue, setSalesInputValue] = useState('7 days');
  const [salesValue, setSalesValue] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSalesData = async () => {
      if (!salesInputValue) return;
      const { startDate, endDate } = mapDate(salesInputValue);

      if (!startDate || !endDate) return;

      setIsLoading(true);
      try {
        const response = await customFetch(
          `/sales-report/?start_date=${startDate}&end_date=${endDate}`
        );

        const { sales_by_date } = response.data;
        const dates = Object.keys(sales_by_date);
        const values = Object.values(sales_by_date);

        const formateDates = formattedDates(dates, salesInputValue);

        const chartDataForLineChart = {
          options: {
            xaxis: {
              categories: formateDates,
            },
            yaxis: {
              min: 0,
            },
          },
          series: [
            {
              name: 'Sales',
              data: values,
            },
          ],
        };

        setChartData(chartDataForLineChart);
        setSalesValue(response.data.total_sales);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSalesData();
  }, [salesInputValue]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='space-y-2 bg-slate-200 rounded p-2'>
      <Select
        onValueChange={(value) => setSalesInputValue(value)}
        className='border-none'
      >
        <Label className='font-bold'>Select Sales Date</Label>
        <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
          <SelectValue placeholder={salesInputValue}>
            {salesInputValue}
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
        <h2 className='font-bold ml-4'> Sales : ₹ {salesValue}</h2>
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type='line'
            height={240}
          />
        )}
      </div>
    </div>
  );
};

export default Sales;
