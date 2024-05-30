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
  if (show)
    return (
      <div className="flex h-screen w-screen bg-black overflow-y-hidden">
        <Image
          src="https://tomato-impossible-lemur-706.mypinata.cloud/ipfs/QmaxeN9dtMtMqgBCpVDq6e4NQpHky2NNmAVVYHxiNZ3vsP"
          width={500}
          height={500}
          alt="initialLoading"
          className="m-auto mb-[930vh] block rounded-lg"
        />
      </div>
    )
  else
    return (
      <div className="flex h-screen w-screen bg-black overflow-y-hidden">
        <Image
          src="https://tomato-impossible-lemur-706.mypinata.cloud/ipfs/QmaxeN9dtMtMqgBCpVDq6e4NQpHky2NNmAVVYHxiNZ3vsP"
          width={500}
          height={500}
          alt="initialLoading"
          className="m-auto mb-[930vh] block rounded-lg"
        />
      </div>
    )
}
