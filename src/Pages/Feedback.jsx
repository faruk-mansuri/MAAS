import FeedbackReport from '@/components/FeedbackReport';
import FeedbackSuggestion from '@/components/FeedbackSuggestion';
import React from 'react';

const FeedbackPage = () => {
  return(
    <div className='mb-4 mt-4'>
    <h1 className='text-4xl font-bold mb-3'>Feedback Insights</h1>   
    <FeedbackReport />
    <FeedbackSuggestion />
    </div>

  ) ;
};

export default FeedbackPage;
