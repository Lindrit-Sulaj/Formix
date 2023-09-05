"use client"

import React, { useContext, createContext } from 'react'
import { User } from '@prisma/client'
import { SessionProvider } from 'next-auth/react'
import { useSession } from 'next-auth/react'

interface UseAuth {
  data: User | null,
  status: "authenticated" | "unauthenticated" | "loading",
  session: {
    email: string | null | undefined,
    name: string | null | undefined,
    image?: string | null
  }
}

const ClientContext = createContext<UseAuth | null>(null);

export const useAuth = () => useContext(ClientContext)

function ClientProvider({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();

  console.log(data);

  return (
    <ClientContext.Provider value={{
      status,
      session: {
        email: data?.user?.email,
        name: data?.user?.name,
        image: data?.user?.image
      },
      data: null
    }}>
      {children}
    </ClientContext.Provider>
  )
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ClientProvider>
        {children}
      </ClientProvider>
    </SessionProvider>
  )
}
