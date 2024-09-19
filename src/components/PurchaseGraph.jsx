import React, { useEffect, useState } from 'react';
import { customFetch } from '@/utils/customFetch';
import Chart from 'react-apexcharts';

const PurchaseGraph = () => {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSalesData = async () => {
      setIsLoading(true);
      try {
        const { data } = await customFetch(`/most-popular-package/`);

        const seriesData = data.map((entry) => entry.bookings);
        const labelsData = data.map((entry) => entry.pack_id.toString());

        setChartData({
          options: {},
          series: seriesData,
          labels: labelsData,
        });
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSalesData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='space-y-2 bg-slate-200 rounded p-2'>
      <div>
        <h2 className='font-bold ml-4'>Total Customers Purchase</h2>
        {/* TODO - backend not ready */}
        <p className='font-bold ml-4'>{21}</p>
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type='donut'
            height='200'
            width='380'
            labels={chartData.labels}
          />
        )}
      </div>
    </div>
  );
};

export default PurchaseGraph;
