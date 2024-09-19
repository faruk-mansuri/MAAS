import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-secondary pt-20 w-64'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
