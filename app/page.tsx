'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const [show, setShow] = useState(true)
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 5000)
    setTimeout(() => {
      router.push('/home')
    }, 5001)
  }, [])
  if (show) return <div className=" bg-white"></div>
  else
    return (
      <main className="flex  flex-col items-center justify-between p-24"></main>
    )
}
