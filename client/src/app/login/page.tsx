'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'


export default function Login() {
  return (
    <div>
	    <Button>Login</Button>
    </div>
  )
}
