import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link, useNavigate } from 'react-router-dom'
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
import { useAuth } from '@/context/AuthContext'

const RegisterSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
})

const SignInPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values) => {
    setIsLoading(true)
    setError('')
    setSuccess('')
    try {
      const response = await customFetch.post('/signin/', values)
      localStorage.setItem('access_token', JSON.stringify(response.data.access))
      login()
    } catch (error) {
      console.log('SIGN_IN_ERROR', error)
      const errorMessage = error?.response?.data?.msg || 'Something went wrong'
      if (error?.response?.status === 401) {
        navigate(`/verify-account?email=${values.email}`)
        return
      }
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
            Welcome back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=''>
              <div className='space-y-4'>
                {/* EMAIL */}
                <FormField
                  name='email'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            type='email'
                            placeholder='john.doe@example.com'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
                {/* PASSWORD */}
                <FormField
                  name='password'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            type='password'
                            placeholder='******'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>

              <Button
                variant='link'
                className='flex font-normal ml-auto -mt-04'
                size='sm'
              >
                <Link to='/reset-password'>Forgot Password ?</Link>
              </Button>

              <FormError message={error} />
              <FormSuccess message={success} />

              <Button
                disabled={isLoading}
                className='w-full mt-4'
                type='submit'
              >
                Sign In
              </Button>
            </form>
          </Form>

          <Button variant='link' className='font-normal w-full mt-6' size='sm'>
            <Link to='/sign-up'>Don't have an account ?</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignInPage
