import { LayoutDashboard } from 'lucide-react'
import { MdCampaign } from 'react-icons/md'
import { Instagram } from 'lucide-react'
import { MdPeopleOutline } from 'react-icons/md'
import { MdOutlineLoyalty } from 'react-icons/md'
import { IoMdSync } from 'react-icons/io'
import { MdOutlineFeedback } from 'react-icons/md'
import { FaQrcode } from 'react-icons/fa'
import { MdOutlineDiversity3 } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { AiOutlineLogout } from 'react-icons/ai'

export const links = [
  { id: 1, name: 'Dashboard', Icon: LayoutDashboard, url: '/dashboard' },
  { id: 2, name: 'Campaigns', Icon: MdCampaign, url: '/campaigns' },
  {
    id: 3,
    name: 'InstaCampaigns',
    Icon: Instagram,
    url: '/insta-campaigns',
  },
  {
    id: 4,
    name: 'Customer Insights',
    Icon: MdPeopleOutline,
    url: '/customer-insights',
  },
  { id: 5, name: 'Loyalty', Icon: MdOutlineLoyalty, url: '/loyalty' },
  {
    id: 6,
    name: 'Auto Campaigns',
    Icon: IoMdSync,
    url: '/auto-campaigns',
  },
  { id: 7, name: 'Feedback', Icon: MdOutlineFeedback, url: '/feedback' },
  { id: 8, name: 'QR Code', Icon: FaQrcode, url: '/qr-code' },
  {
    id: 9,
    name: 'Referrals',
    Icon: MdOutlineDiversity3,
    url: '/referrals',
  },
  {
    id: 10,
    name: 'Add Customer',
    Icon: IoMdPersonAdd,
    url: '/add-customer',
  },
]
