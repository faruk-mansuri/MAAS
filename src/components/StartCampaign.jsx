import React, { useState } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import CustomEmailTemplate from './CustomEmailTemplate'
import CustomEmailMessage from './CustomEmailMessage'
import WhatsappMessage from './WhatsappMessage'
import InstagramMessage from './InstagramMessage'

const StartCampaign = () => {
  const [showEmailTemplate, setShowEmailTemplate] = useState(false)
  const [showEmailMessage, setShowEmailMessage] = useState(false)
  const [showWhatsappMessage, setShowWhatsappMessage] = useState(false)
  const [showInstagramMessage, setShowInstagramMessage] = useState(false)

  const renderSelectedComponent = () => {
    if (showEmailTemplate) return <CustomEmailTemplate />
    if (showEmailMessage) return <CustomEmailMessage />
    if (showWhatsappMessage) return <WhatsappMessage />
    if (showInstagramMessage) return <InstagramMessage />
    return <h1 className='text-2xl ml-5 mt-3'>Please Select Channel!</h1>
  }

  return (
    <div className='flex mt-4'>
      <div className='py-8 px-4 bg-slate-200'>
        <div className='text-2xl mb-1'>What would you like to send today?</div>
        <h2 className='mt-2 mb-2'>
          Choose from hundreds of templates pre-built for you!
        </h2>
        <Card className='bg-slate-300 w-64 h-40'>
          <CardHeader>
            <CardTitle className='mt-1 ml-2 mb-2 underline decoration-dotted'>
              Start from scratch
            </CardTitle>
            <CardDescription>
              <label
                htmlFor='campaign-name'
                className='block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Enter Campaign Name:
              </label>
              <input
                type='text'
                id='campaign-name'
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
                  bg-gray-50 text-xs dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white mb-3'
                required
              />
            </CardDescription>
          </CardHeader>
        </Card>

        <DropdownMenuCheckboxes
          setShowEmailTemplate={setShowEmailTemplate}
          setShowEmailMessage={setShowEmailMessage}
          setShowWhatsappMessage={setShowWhatsappMessage}
          setShowInstagramMessage={setShowInstagramMessage}
          showEmailTemplate={showEmailTemplate}
          showEmailMessage={showEmailMessage}
          showWhatsappMessage={showWhatsappMessage}
          showInstagramMessage={showInstagramMessage}
        />
      </div>

      <div className='flex-1 bg-slate-300'>{renderSelectedComponent()}</div>
    </div>
  )
}

export default StartCampaign

export function DropdownMenuCheckboxes({
  setShowEmailTemplate,
  setShowEmailMessage,
  setShowWhatsappMessage,
  setShowInstagramMessage,
  showEmailTemplate,
  showEmailMessage,
  showWhatsappMessage,
  showInstagramMessage,
}) {
  const handleEmailTemplateChange = (checked) => {
    setShowEmailTemplate(checked)
    if (checked) {
      setShowEmailMessage(false)
      setShowWhatsappMessage(false)
    }
  }

  const handleEmailMessageChange = (checked) => {
    setShowEmailMessage(checked)
    if (checked) {
      setShowEmailTemplate(false)
      setShowWhatsappMessage(false)
    }
  }

  const handleWhatsappMessageChange = (checked) => {
    setShowWhatsappMessage(checked)
    // if (checked) {
    //   setShowEmailTemplate(true) || setShowEmailMessage(true)
    // }
  }

  const handleInstagramMessageChange = (checked) => {
    setShowInstagramMessage(checked)
    // if (checked) {
    //   setShowEmailTemplate(true) || setShowEmailMessage(true)
    // }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex justify-center w-64 mt-2'>
          Select Channel to Send Messages
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Channels</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showEmailTemplate}
          onCheckedChange={(checked) => handleEmailTemplateChange(checked)}
        >
          Custom Email Template
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showEmailMessage}
          onCheckedChange={(checked) => handleEmailMessageChange(checked)}
        >
          Custom Email Message
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showWhatsappMessage}
          onCheckedChange={(checked) => handleWhatsappMessageChange(checked)}
        >
          Whatsapp Message
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showInstagramMessage}
          onCheckedChange={(checked) => handleInstagramMessageChange(checked)}
        >
          Instagram Message
        </DropdownMenuCheckboxItem>
        {!showEmailTemplate &&
          !showEmailMessage &&
          !showWhatsappMessage &&
          !showInstagramMessage && (
            <DropdownMenuCheckboxItem disabled>
              Please Select Channel
            </DropdownMenuCheckboxItem>
          )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
