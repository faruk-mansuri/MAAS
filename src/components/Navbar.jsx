import { LogOut } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import MobileSidebar from './MobileSidebar'
import { useAuth } from '@/context/AuthContext'

const Navbar = () => {
  const { logout } = useAuth()
  return (
    <nav className='fixed w-full z-50 flex justify-between items-center py-2 px-2 border-b border-primary/10 bg-blue-500 h-20'>
      <img src='images/logo.png' alt='logo' />
      <div className='flex gap-x-3'>
        <MobileSidebar />
        <LogOut className='cursor-pointer' onClick={logout} />
      </div>
    </nav>
  )
}

export default Navbar
