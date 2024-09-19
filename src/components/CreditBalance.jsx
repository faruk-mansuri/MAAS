import React, { useEffect, useState } from 'react';
import { customFetch } from '@/utils/customFetch';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// icons
import { BiMessageRoundedMinus } from 'react-icons/bi';
import { BiMessageSquareDots } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

const CreditBalance = () => {
  const [creditBalanceValue, setCreditBalanceValue] = useState({
    emailCount: 0,
    whatsAppUtilityCount: 0,
    sms: 0,
    whatsAppMarketingCount: 0,
  });

  useEffect(() => {
    const fetchCreditBalance = async () => {
      try {
        const emailCount = customFetch(`/count-email-messages/`);
        const whatAppMessagesCount = customFetch(`/count-whatsapp-messages/`);

        // TODO - SMS and whatApp marketing

        const [emailCountResponse, whatAppMessagesCountResponse] =
          await Promise.all([emailCount, whatAppMessagesCount]);

        setCreditBalanceValue({
          ...creditBalanceValue,
          emailCount: emailCountResponse.data.email_message_count,
          whatsAppUtilityCount:
            whatAppMessagesCountResponse.data.whatsapp_message_count,
        });
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchCreditBalance();
  }, []);

  return (
    <div className='bg-slate-50 mt-2 px-2 py-4 space-y-2 rounded shadow-sm hover:shadow-md transition'>
      <h1 className='text-3xl capitalize tracking-wider'>
        Your credit balance
      </h1>

      <div className='grid md:grid-cols-2 gap-2'>
        {/* SMS COUNT */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <div className='flex justify-between'>
              <CardTitle>{creditBalanceValue.sms}</CardTitle>
              <CardDescription className='tracking-wider'>
                Total sms count.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className='flex place-items-center gap-2'>
              <BiMessageRoundedMinus size='2rem' />
              SMS
            </p>
          </CardContent>
        </Card>

        {/* EMAIL COUNT */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <div className='flex justify-between'>
              <CardTitle>{creditBalanceValue.emailCount}</CardTitle>
              <CardDescription className='tracking-wider'>
                Total email count.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <p className='flex place-items-center gap-2'>
              <BiMessageSquareDots size='2rem' />
              Email
            </p>
          </CardContent>
        </Card>

        {/* WHATSAPP UTILITY COUNT */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <div className='flex justify-between'>
              <CardTitle>{creditBalanceValue.whatsAppUtilityCount}</CardTitle>
              <CardDescription className='tracking-wider'>
                Total whats app utility count.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <p className='flex place-items-center gap-2'>
              <FaWhatsapp size='2rem' />
              Whats app utility
            </p>
          </CardContent>
        </Card>

        {/* WHATSAPP MARKETING COUNT */}
        <Card className='bg-slate-100'>
          <CardHeader>
            <div className='flex justify-between'>
              <CardTitle>{creditBalanceValue.whatsAppMarketingCount}</CardTitle>
              <CardDescription className='tracking-wider'>
                Total whats app marketing count.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <p className='flex place-items-center gap-2'>
              <FaWhatsapp size='2rem' />
              Whats app marketing
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreditBalance;
