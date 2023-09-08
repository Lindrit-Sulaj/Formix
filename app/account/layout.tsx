import React from 'react'
import getSession from '@/actions/getSession'

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const session = getSession();

  return (
    <div>
      <pre>
        { JSON.stringify(session, null, 2)}
      </pre>
      Sidebar
      { children }
    </div>
  )
}
