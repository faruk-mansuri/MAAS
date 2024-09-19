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

const Visits = () => {
  const [visitInputValue, setVisitInputValue] = useState('7 days');
  const [salesValue, setSalesValue] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSalesData = async () => {
      if (!visitInputValue) return;
      const { startDate, endDate } = mapDate(visitInputValue);

      if (!startDate || !endDate) return;

      setIsLoading(true);
      try {
        const response = await customFetch(
          `/visits_in/?start_date=${startDate}&end_date=${endDate}`
        );

        const { appointments } = response.data;
        const dates = Object.keys(appointments);
        const values = Object.values(appointments);

        const formateDates = formattedDates(dates, visitInputValue);

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
              name: 'Visits',
              data: values,
            },
          ],
        };

        setChartData(chartDataForLineChart);
        setSalesValue(response.data.total_visits);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSalesData();
  }, [visitInputValue]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='space-y-2 bg-slate-200 rounded p-2'>
      <Select
        onValueChange={(value) => setVisitInputValue(value)}
        className='border-none'
      >
        <Label className='font-bold'>Select Visits Date</Label>
        <SelectTrigger className='w-[180px] bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none'>
          <SelectValue placeholder={visitInputValue}>
            {visitInputValue}
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
        <h2 className='font-bold ml-4'>Visits : {salesValue}</h2>
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

export default Visits;
