'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export default function profile() {
  return (
    <div>
       <h1>This is User's Profile</h1>
       <Button onClick={()=>signOut()}>Log Out</Button>
    </div>
  )
}
