import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading, Sidebar } from '../components'
import { useEffect } from 'react'
import { customFetch } from '@/utils/customFetch'
import { useAuth } from '@/context/AuthContext'

const HomeLayout = () => {
  const { setVendor, logout } = useAuth()
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await customFetch('/current_user/')
        setVendor(response.data)
      } catch (error) {
        logout()
        console.log('FETCH_CURRENT_USER', error)
      }
    }
    fetchCurrentUser()
  }, [])

  return (
    <div className='min-h-svh '>
      <Navbar />
      <div className='grid'>
        <div className='hidden w-64 mt-20 md:flex fixed bg-gray-300 inset-y-0'>
          <Sidebar />
        </div>

        {isPageLoading ? (
          <Loading />
        ) : (
          <section className='md:pl-[16.5rem] pt-20 px-2 bg-slate-100 min-h-screen'>
            <Outlet />
          </section>
        )}
      </div>
    </div>
  )
}

export default HomeLayout
