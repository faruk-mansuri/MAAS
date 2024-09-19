import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import FormError from '@/components/FormError'
import FormSuccess from '@/components/FormSuccess'
import { useState } from 'react'
import { customFetch } from '@/utils/customFetch'

const VerifyAccountPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [email, setEmail] = useState(searchParams.get('email'))
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    setError('')
    setSuccess('')
    try {
      const response = await customFetch.post('/verify_otp/', {
        email,
        otp,
      })
      console.log(response)

      setSuccess('Account Verified Successfully.')
      setTimeout(() => {
        navigate('/sign-in')
      }, 1000)
    } catch (error) {
      console.log('VERIFY_OTP_ERROR', error)
      const errorMessage = error?.response?.data?.msg || 'Something went wrong'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='bg-slate-100 w-[400px] rounded-lg shadow-md hover:shadow-lg transition'>
        <CardHeader>
          <CardTitle className='text-bold text-black capitalize text-center'>
            Verify you account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className='space-y-6'>
            <div className='space-y-4'>
              <div className='space-y-1.5'>
                <label className='font-semibold text-sm'>Email</label>
                <Input
                  disabled={true}
                  type='email'
                  placeholder='john.doe@example.com'
                  value={email}
                  readOnly
                />
              </div>

              <div className='space-y-1.5'>
                <label className='font-semibold text-sm'>OTP</label>
                <Input
                  disabled={isLoading}
                  type='number'
                  placeholder='1234'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>

            <FormError message={error} />
            <FormSuccess message={success} />

            <Button disabled={isLoading} className='w-full' type='submit'>
              Verify
            </Button>
          </form>

          <Button variant='link' className='font-normal w-full mt-6' size='sm'>
            <Link to='/sign-up'>Don't have an account ?</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default VerifyAccountPage
