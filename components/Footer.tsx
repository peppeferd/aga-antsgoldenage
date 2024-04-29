'use client'

import { FaSquareInstagram } from 'react-icons/fa6'

import { FaFacebookSquare } from 'react-icons/fa'
import Image from 'next/image'
import imgfooter from '../public/assets/payment-getways.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {
  const router = useRouter()
  const mainLinks = [
    {
      route: '/',
      label: 'Homepage',
    },
    {
      route: '/prodotti',
      label: 'Prodotti',
    },
    {
      route: '/contatti',
      label: 'Contatti',
    },
    /* {
      route: '/',
      label: 'Su di noi',
    }, */
  ]
  return (
    <footer className="w-full h-[20vh] text-white bg-indigo-900 text-center text-3xl ">
      <h1 className="pt-12"> © All Rights Reserved</h1>
    </footer>
  )
}

export default Footer
