import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  // request.credentials "same-origin"

  return NextResponse.json({ title: 'Hello Next.js', forms: [1, 2, 3, 4, 5, 6], headers: request.credentials }, {
    status: 200,
    statusText: 'Success',
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXTAUTH_URL as string,
      'Access-Control-Allow-Methods': ''
    }
  })
}