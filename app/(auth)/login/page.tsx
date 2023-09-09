"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import { useAuth } from '@/components/auth-provider'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import OAuth from '@/components/oauth';

export default function LoginPage() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    return await signIn('credentials', { email, password }).catch(err => alert("Something went wrong")).finally(() => setLoading(false));
  }

  if (auth?.status === "loading") {
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-65px)]'>
        <p>Loading...</p>
      </div>
    )
  }

  if (auth?.status === "authenticated") {
    return (
      <div className='flex justify-center items-center flex-col min-h-[calc(100vh-65px)]'>
        <h1 className='font-bold text-2xl lg:text-3xl'>Signed in successfully</h1>
        <p className='text-[15px]'>Start using from now Formix free services</p>
        <Link href="/account" className='block mt-2'>
          <Button>View account</Button>
        </Link>
      </div>
    )
  }

  return (
    <main className='flex flex-col justify-center items-center min-h-[calc(100vh-65px)]'>
      <div className="w-full max-w-sm">
        <h1 className='font-semibold text-2xl text-center'>Login</h1>
        <p className='text-slate-700 text-center'>Don't have an account? <Link href="/signup" className='text-blue-500'>Sign up</Link></p>
        <OAuth />
        <form onSubmit={(e) => handleSubmit(e)} className='w-full'>
          <div className='w-full my-2'>
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='johnsmith@gmail.com' />
          </div>
          <div className='w-full my-2'>
            <Label htmlFor="password">Password</Label>
            <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='secure-password' />
          </div>
          <div className='flex justify-end gap-2'>
            <Button disabled={loading} type="submit">{loading ? 'Logging in' : 'Login'}</Button>
          </div>
        </form>
      </div>

    </main>
  )
}
