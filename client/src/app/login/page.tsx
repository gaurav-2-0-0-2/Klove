'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'


export default function login() {
  return (
    <div>
      <Button onClick={()=>signIn('google', {callbackUrl: `${process.env.FAKE_URL}/profile`})}>Login</Button>
      {/* <Button onClick={()=>signIn('google', {callbackUrl: `http://localhost:3000/profile`})}>Login</Button> */}
    </div>
  )
}
