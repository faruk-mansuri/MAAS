import React from 'react'
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StartInstaCampaigns = () => {
  return (
    <div>
    <div className='text-2xl mb-1'>What would like to post today ?</div>
      <h2 className='mt-2 mb-2'>Choose from hundreds of templates pre-built for you !</h2>
      <Card className='bg-slate-300 w-64 h-48'>
          <CardHeader>
          <Link to=" ">
            <CardTitle className='mt-7 ml-2 underline decoration-dotted'>Start from scratch</CardTitle>
          </Link>  
          </CardHeader>
        </Card>
      
    </div>
  )
}

export default StartInstaCampaigns
