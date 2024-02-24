'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react';
import Image from "next/image";

export default function Profile() {
  
  const {data: session } = useSession();
  // console.log(session);

  return (
    <div>
      <Image className='rounded-full' width={50} height={50} src={session?.user?.image!} alt='profile'/>
       <h1>This is User's Profile</h1>
       <Button onClick={()=>signOut()}>Log Out</Button>
    </div>
  )
}
