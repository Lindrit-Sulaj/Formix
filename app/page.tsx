"use client"

import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'

export default function Home() {
  const session = useSession();

  return (
    
    <main>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
      <button onClick={() => signIn("github")}>Sign in</button>
    </main>
  )
}
