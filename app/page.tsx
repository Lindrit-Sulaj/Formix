import Image from 'next/image'
import prisma from '@/lib/prisma'

async function getForms() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/forms`);
  if (!res.ok) {
    throw new Error(`Something went wrong: ${res.json()}`)
  }
  return res.json();
}

export default async function Home() {
  const forms = await getForms();

  return (
    <main>
      <pre>{JSON.stringify(forms, null, 2)}</pre>
    </main>
  )
}
