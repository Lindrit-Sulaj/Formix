"use client"
import React from 'react'
import Link from 'next/link'

import { Button } from './ui/button'

export default function Navbar() {
  return (
    <div className='border-solid border-b-[1px] px-2 border-b-slate-200 h-[65px]'>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full">
        <h2 className='font-bold text-2xl'>Formi<span className='text-blue-600'>x</span></h2>
        <div className="flex gap-1">
          <Link href="/">
            <Button variant="link">Sign up</Button>
          </Link>
          <Link href="/">
            <Button>Log in</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
