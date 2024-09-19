import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import FormError from '@/components/FormError'
import FormSuccess from '@/components/FormSuccess'
import { useState } from 'react'
import { customFetch } from '@/utils/customFetch'

const ResetPassword = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('default')
  const [form, setForm] = useState({ email: '', otp: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      if (status === 'default') {
        if (!form.email) {
          setError('Email is required.')
          return
        }
        await customFetch.post('/forgot_password/', {
          email: form.email,
        })
        setSuccess('Otp sent successfully. ')
        setStatus('setNewPassword')
        setTimeout(() => setSuccess(''), 1000)
        return
      } else {
        if (!form.otp || !form.password) {
          setError('All fields are required.')
          return
        }
        const response = await customFetch.post('/reset_password/', {
          ...form,
          new_password: form.password,
        })

        setSuccess('Password changed successfully.')
        setTimeout(() => {
          navigate('/sign-in')
        }, 1000)
      }
    } catch (error) {
      console.log('RESET_PASSWORD', error)
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
            Reset Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className='space-y-6'>
            <div className='space-y-4'>
              {status === 'default' ? (
                <div className='space-y-1.5'>
                  <label className='font-semibold text-sm'>Email</label>
                  <Input
                    disabled={isLoading}
                    type='email'
                    placeholder='john.doe@example.com'
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              ) : (
                <>
                  <div className='space-y-1.5'>
                    <label className='font-semibold text-sm'>OTP</label>
                    <Input
                      disabled={isLoading}
                      type='number'
                      placeholder='1234'
                      value={form.otp}
                      onChange={(e) =>
                        setForm({ ...form, otp: e.target.value })
                      }
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label className='font-semibold text-sm'>Password</label>
                    <Input
                      disabled={isLoading}
                      type='password'
                      placeholder='******'
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                  </div>
                </>
              )}
            </div>

            <FormError message={error} />
            <FormSuccess message={success} />

            <Button disabled={isLoading} className='w-full' type='submit'>
              {status === 'default' ? 'Send Otp' : 'Submit'}
            </Button>
          </form>

          <Button variant='link' className='font-normal w-full mt-6' size='sm'>
            <Link to='/sign-in'>Remember Password ? Sing In</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ResetPassword
