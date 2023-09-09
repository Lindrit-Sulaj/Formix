"use client"
import React, { useState } from 'react'
import Link from 'next/link'

import OAuth from '@/components/oauth'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  const [process, setProcess] = useState<'create' | 'verify'>('create')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  if (process === "verify") {
    return (
      <main className='flex flex-col justify-center items-center min-h-[calc(100vh-65px)]'>
        <div className="w-full max-w-sm">
          <h1 className="font-semibold text-2xl text-center">Verify account</h1>
          <p>Enter the 6 digit code that we have sent to your email</p>

          <div>
            <Input type="number" />
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='flex flex-col justify-center items-center min-h-[calc(100vh-65px)]'>
      <div className="w-full max-w-sm">
        <h1 className='font-semibold text-2xl text-center'>Signup</h1>
        <p className='text-slate-700 text-center'>Already have an account? <Link href="/login" className='text-blue-500'>Log in</Link></p>
        <OAuth />
        <form className='w-full'>
          <div className="my-2 w-full">
            <Label htmlFor="name">Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} id="name" className='w-full' placeholder='John' />
          </div>
          <div className="my-2 w-full">
            <Label htmlFor="email">Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className='w-full' placeholder='johnsmith@gmail.com' />
          </div>
          <div className="my-2 w-full">
            <Label htmlFor="password">Password</Label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className='w-full' placeholder='secure-password' />
          </div>
          <Button className='w-full'>Continue to email verification</Button>
        </form>
      </div>
    </main>
  )
}
