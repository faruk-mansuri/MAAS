import LoyaltyRedeem from '@/components/LoyaltyRedeem';
import LoyaltySummary from '@/components/LoyaltySummary';
import React from 'react';

const LoyaltyPage = () => {
  return(
    <div className='mb-4 mt-4'>
    <h1 className='text-4xl font-bold mb-3'>Loyalty Perfomance</h1>
    <h1 className='text-2xl font-bold mb-1'>Overview</h1>
    <h2>Here's what's happening in your rewards program till today </h2>
    <LoyaltySummary />
    <LoyaltyRedeem />
    </div>

  ) ;
};

export default LoyaltyPage;

