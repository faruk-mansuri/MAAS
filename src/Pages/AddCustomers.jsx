import AddManually from '@/components/AddManually';
import EcomIntegration from '@/components/EcomIntegration';
import ImportCustomers from '@/components/ImportCustomers';
import PosIntegration from '@/components/PosIntegration';
import React, { useState } from 'react';

const AddCustomersPage = () => {

  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["POS Integrations","Import Customers","Add Manually","E-Commerce Integration"];
  const contents = [
    <PosIntegration />,
    <ImportCustomers />,
    <AddManually />,
    <EcomIntegration />
  ]

  return(
    <div className='mb-4 mt-4'>
    <h1 className='text-4xl font-bold mb-3'>Add Customers</h1>   
    
    <div className='flex-4 mt-2 justify-start items-center'>
      {tabs.map(((tab, index) => <button onClick={() => setActiveTab(index)}
      key={`tab_${index}`}
      className={`px-4 border ${activeTab === index ? "bg-slate-200 text-black" : ""} py-3 hover:bg-slate-200`}
      >{tab}</button>
      ))}
    </div>
    <div className='flex flex-col mx-auto'>
      {contents && contents.map((content, index) =>{
        if (activeTab === index){
          return <div className='px-3 py-4' key={`content_${index}`}>{content}</div>
        }
        return null
      })}
      
    </div>
    </div>

  ) ;
};

export default AddCustomersPage;
