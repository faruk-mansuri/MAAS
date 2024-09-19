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

const RegisterSchema = z.object({
  name: z.string().min(3, { message: 'Name is required' }),
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
})

const SignUpPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values) => {
    setIsLoading(true)
    setError('')
    setSuccess('')
    try {
      await customFetch.post('/signup/', {
        ...values,
        username: values.name,
      })
      setSuccess('Account created successfully.')
      setTimeout(() => {
        navigate('/sign-in')
      }, 1000)
    } catch (error) {
      console.log('SIGN_UP_ERROR', error)
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
            Create an account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='space-y-4'>
                {/* NAME */}
                <FormField
                  name='name'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder='john doe'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
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

              <FormError message={error} />
              <FormSuccess message={success} />

              <Button disabled={isLoading} className='w-full' type='submit'>
                Create an account
              </Button>
            </form>
          </Form>

          <Button variant='link' className='font-normal w-full mt-6' size='sm'>
            <Link to='/sign-in'>Already have an account ?</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpPage
