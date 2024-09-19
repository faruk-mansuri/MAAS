import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { progressPerformanceListItems } from '@/utils/programsPerformanceList';

const ProgressPerformance = () => {
  return (
    <div
      className='mt-10 bg-slate-50  px-2 py-4 space-y-8 rounded shadow-sm
    '
    >
      <h1 className='text-2xl font-bold'>See your program's performance</h1>

      <div className='grid lg:grid-cols-2 gap-2'>
        {progressPerformanceListItems.map((item) => {
          const { id, Icon, label, items: performanceList } = item;

          return (
            <Card className='bg-slate-100' key={id}>
              <CardHeader>
                <div className='flex text-lg items-center gap-4 capitalize tracking-wider'>
                  <Icon size={'1.75rem'} /> {label}
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between'>
                  {performanceList.map((performance, i) => {
                    return (
                      <div
                        key={i}
                        className=' border rounded-sm border-none px-2 py-4'
                      >
                        <h1 className='text-lg'>{performance.value}</h1>
                        <p className='capitalize text-sm'>{performance.name}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressPerformance;
