import AutoCampCards from '@/components/AutoCampCards';
import AutoCampPerformance from '@/components/AutoCampPerformance';
import RecentAutoCamps from '@/components/RecentAutoCamps';
import React from 'react';

const AutoCampaignPage = () => {
  return(
    <div className='mb-4 mt-4'>
    <h1 className='text-4xl font-bold mb-3'>Automated Campaigns</h1>   
    <AutoCampCards />
    <div className='mb-3'>
    <AutoCampPerformance />
    <RecentAutoCamps />
    </div>
    </div>

  ) ;

};

export default AutoCampaignPage;
