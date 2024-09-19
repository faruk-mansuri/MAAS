import QrSummary from '@/components/QrSummary';
import React from 'react';

const QRCodePage = () => {
  return(
    <div className='mb-4 mt-4'>
    <h1 className='text-2xl font-bold mb-3'>QR Code</h1> 
    <h2>Create unlimited QR codes to aquire new customers.</h2> 
    <i href='' className='flex justify-end mr-3'>How it works ?</i>
    <QrSummary />
    </div>

  ) ;
};

export default QRCodePage;
