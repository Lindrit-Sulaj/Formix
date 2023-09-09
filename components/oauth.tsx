"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Github, FacebookIcon } from 'lucide-react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

export default function OAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogin(provider: string) {
    setLoading(true);
    await signIn(provider).then(() => setLoading(false))
  }

  return (
    <div className='flex gap-2 flex-col mt-3 w-full'>
      <Button variant="secondary" disabled={loading} onClick={() => handleLogin("github")}>Continue with Github <Github size={19} className='ml-2' /></Button>
    </div>
  )
}
