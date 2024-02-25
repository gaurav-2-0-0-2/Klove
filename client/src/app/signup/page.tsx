"use client"
import React from 'react'
import SignupForm from '@/components/signup/SignupForm'
import {Suspense} from 'react';

export default function signup() {
  return (
    <div>
     <Suspense>
      <SignupForm/>
     </Suspense>
    </div>
  )
}
