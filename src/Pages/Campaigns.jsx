import StartCampaign from '@/components/StartCampaign'
import TemplateLib from '@/components/TemplateLib'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const CampaignPage = () => {
  const location = useLocation()
  const isCampaignPage = location.pathname === '/campaigns'
  const isTemplateLibPage = location.pathname === '/campaigns/template-lib'

  return (
    <div>
      <h1 className='text-4xl mt-4 ml-2 text-bold mb-4'>Campaigns</h1>

      <div className='flex gap-x-2'>
        <Button
          className={`hover:text-white ${cn(
            isCampaignPage && 'bg-slate-200 text-black'
          )}`}
        >
          <Link to='/campaigns'>Start Campaign</Link>
        </Button>

        <Button
          className={`hover:text-white ${cn(
            isTemplateLibPage && 'bg-slate-200 text-black'
          )}}`}
        >
          <Link to={'/campaigns/template-lib'}>See Templates</Link>
        </Button>
      </div>

      <Outlet />
    </div>
  )
}

export default CampaignPage
