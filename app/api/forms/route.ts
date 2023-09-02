import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ title: 'Hello Next.js', forms: [1, 2, 3, 4, 5, 6] }, {
    status: 200,
    statusText: 'Success',
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXTAUTH_URL as string
    }
  })
}