import InstaTemplateLib from '@/components/InstaTemplateLib';
import StartInstaCampaigns from '@/components/StartInstaCampaigns';
import React, { useState } from 'react';


const InstaCampaignsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Start InstaCampaign","Template Library"];
  const contents =[
    <StartInstaCampaigns />,
    <InstaTemplateLib />
  ]
  return(
    <div className='mb-4 mt-4'>
    <h1 className='text-3xl mt-3 ml-2 text-bold mb-3'> Insta Campaigns</h1>
    <div className='flex-4 mt-2 justify-start items-center'>
    {tabs.map(((tab, index) => <button
    onClick={() => setActiveTab(index)} 
    key={`tab_${index}`} 
    className={`px-4 border ${activeTab === index ? "bg-slate-200 text-black" : ""} py-3 hover:bg-slate-200`}
    >{tab}</button>))}
      
    </div>
    <div className='flex flex-col mx-auto'>
    {contents && contents.map((content, index) =>{
      if (activeTab === index) {
      return <div className='px-3 py-4' key={`content_${index}`}>{content}</div>
      }
      return null
    }
    )}
    </div>
     
   

    </div>
  ); 
};

export default InstaCampaignsPage;
