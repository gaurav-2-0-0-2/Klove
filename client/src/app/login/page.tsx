'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'


export default function login() {
  return (
    <div>
	    <Button onClick={()=>signIn('google', {callbackUrl: `${process.env.NEXT_PUBLIC_URL}/profile`})}>Login</Button>
    </div>
  )
}
