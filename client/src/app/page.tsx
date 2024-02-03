'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/login');
  },[])
  
  return (
       <div>
	       <h1 className="text-red-500">
            Redirecting to Login Page...
	       </h1>
       </div>
  );
}
