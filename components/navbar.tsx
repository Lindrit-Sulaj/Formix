"use client"
import React from 'react'
import Link from 'next/link'

import { useAuth } from './auth-provider'
import { signOut } from 'next-auth/react'

import { Settings, LayoutDashboard } from 'lucide-react'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Separator } from './ui/separator'
import { Skeleton } from './ui/skeleton'

export default function Navbar() {
  const user = useAuth();

  return (
    <div className='border-solid border-b-[1px] px-2 border-b-slate-200 h-[65px]'>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full">
        <h2 className='font-bold text-2xl'>Formi<span className='text-blue-600'>x</span></h2>

        <div className="flex items-center gap-4">

          {user?.status === "authenticated" && (
            <Popover>
              <PopoverTrigger className='bg-slate-100 border-solid border-[1px] border-slate-200 flex items-center gap-1 pl-2 pr-4 py-[1px] rounded-full'>
                <Avatar className='flex items-center'>
                  <AvatarImage className='w-8 h-8 rounded-full' src={user.session?.image!} />
                  <AvatarFallback className='bg-zinc-800 text-white w-8 h-8'>{user.session?.name![0]}</AvatarFallback>
                </Avatar>
                <span className='text-[15px]'>Account</span>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col items-center">
                  <Avatar className='flex items-center'>
                    <AvatarImage className='rounded-full' src={user.session?.image!} />
                    <AvatarFallback className='bg-zinc-800 text-white'>{user.session?.name![0]}</AvatarFallback>
                  </Avatar>
                  <p className='text-center font-medium mt-2'>{user.session?.name}</p>
                </div>
                <Separator className='mt-2' />
                <div className='mt-4'>
                  <Link href="/account" className='w-full my-2 block'>
                    <Button variant="outline" className='w-full'><LayoutDashboard size={16} className="mr-1" />Dashboard</Button>
                  </Link>
                  <Link href="/account/settings" className='w-full my-2 block'>
                    <Button variant="outline" className='w-full'><Settings size={16} className='mr-1' /> Settings</Button>
                  </Link>
                </div>
                <Separator className="my-4" />
                <Button className='w-full' onClick={() => signOut()}>Sign out</Button>
              </PopoverContent>
            </Popover>
          )}
          {user?.status === "unauthenticated" && (
            <div className="flex gap-1">
              <Link href="/signup">
                <Button variant="link">Sign up</Button>
              </Link>
              <Link href="/login">
                <Button>Log in</Button>
              </Link>
            </div>
          )}

          {user?.status === "loading" && (
            <div className="flex gap-2 items-center">
              <Skeleton className='w-10 h-10 rounded-full'/>
              <Skeleton className='h-6 w-24'/>
            </div>
          )}
        </div>


      </div>
    </div>
  )
}
