import { LayoutDashboard } from 'lucide-react';
import { MdOutlineCampaign } from 'react-icons/md';
import { Instagram } from 'lucide-react';
import { MdPeopleOutline } from 'react-icons/md';
import { MdOutlineLoyalty } from 'react-icons/md';
import { IoMdSync } from 'react-icons/io';
import { VscFeedback } from 'react-icons/vsc';
import { PiQrCodeThin } from 'react-icons/pi';
import { MdOutlineDiversity1 } from 'react-icons/md';
import { IoPersonAddOutline } from 'react-icons/io5';

export const links = [
  { id: 1, name: 'Dashboard', Icon: LayoutDashboard, url: '/dashboard' },
  { id: 2, name: 'Campaigns', Icon: MdOutlineCampaign, url: '/campaigns' },
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
  { id: 7, name: 'Feedback', Icon: VscFeedback, url: '/feedback' },
  { id: 8, name: 'QR Code', Icon: PiQrCodeThin, url: '/qr-code' },
  {
    id: 9,
    name: 'Referrals',
    Icon: MdOutlineDiversity1,
    url: '/referrals',
  },
  {
    id: 10,
    name: 'Add Customer',
    Icon: IoPersonAddOutline,
    url: '/add-customer',
  },
];
