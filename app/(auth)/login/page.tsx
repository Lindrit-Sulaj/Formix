"use client"
import React from 'react'
import Link from 'next/link';

import { useAuth } from '@/components/auth-provider'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import OAuth from '@/components/oauth';

export default function LoginPage() {
  const auth = useAuth();

  console.log(auth);

  return (
    <main className='flex flex-col justify-center items-center min-h-[calc(100vh-65px)]'>
      <div className="w-full max-w-sm">
        <h1 className='font-semibold text-2xl text-center'>Login</h1>
        <p className='text-slate-700 text-center'>Don't have an account? <Link href="/signup" className='text-blue-500'>Sign up</Link></p>
        <OAuth />
        <form className='w-full'>
          <div className='w-full my-2'>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder='johnsmith@gmail.com' />
          </div>
          <div className='w-full my-2'>
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder='secure-password' />
          </div>
          <div className='flex justify-end gap-2'>
            <Button>Login</Button>
          </div>
        </form>
      </div>

    </main>
  )
}
