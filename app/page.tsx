import Image from 'next/image'
import prisma from '@/lib/prisma'

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  )
}
