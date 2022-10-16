import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('middleware hit')
}

export const config = {
    matcher: ['/protected'],
  }