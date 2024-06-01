'use client'

import Loader from '@/components/Loader'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [isClient, setIsClient] = useState(false)
  const [nav, setNav] = useState(false)
  const [visible, setVisible] = useState(true)
  const router = useRouter()
  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient)
    return (
      <div>
        <Loader />
      </div>
    )
  return (
    <>
      <div className="smooth bg-[url('https://tomato-impossible-lemur-706.mypinata.cloud/ipfs/QmTHopKcLJJQaBiDsGGzJ8uVgjpUpnMyb6PYoLMxd4Rrxj')]">
        <div
          className={`classenav bg-transparent sticky flex justify-evenly  xl:text-xl md:text-xs items-center h-20 px-4 text-yellow-200 shadow-xl saliindex ${
            visible ? 'top-0' : ''
          } `}
        >
          {/* Logo */}

          <h1 className="bg-indigo-800 rounded-full p-3 text-xl font-bold text-yellow-200 cursor-pointer">
            <a href="#home">Ants' Golden Age</a>
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-xl gap-4">
            <div className="bg-indigo-800 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-white">
                <a href="#story">Story</a>
              </li>
            </div>
            <div className="bg-indigo-800 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-white">
                <a href="#about">About</a>
              </li>
            </div>
            <div className="bg-indigo-800 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-white">
                <a href="#whoweare">Who we are</a>
              </li>
            </div>
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="block md:hidden text-green-200 bg-slate-800 p-3 rounded-full"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'absolute md:hidden left-0 top-12 h-fit w-full ease-in-out duration-500 mt-10 flex-col bg-transparent bg-opacity-75 gap-7 py-5 text-xl'
                : 'ease-in-out w-fit duration-500 fixed top-0 bottom-0 left-[-100%] '
            }
          >
            <h1
              onClick={handleNav}
              className="w-fit p-4 text-3xl font-bold text-yellow-200 mx-auto rounded-full cursor-pointer bg-slate-800"
            >
              <a href="#home">A.G.A</a>
            </h1>

            {/* Mobile Navigation Items */}

            <div className="ml-4 mb-4 bg-slate-800 w-fit rounded-full">
              <li
                onClick={handleNav}
                className="flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#story">Story</a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-slate-800 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#about">About</a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-slate-800 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#whoweare">Who we are</a>
              </li>
            </div>
          </ul>
        </div>

        <section id="home">
          <h3 className="bg-yellow-200">Ants' Golden Age</h3>
        </section>
        <section id="story">
          <h3>Story Section</h3>
        </section>
        <section id="about">
          <h3>About Section</h3>
        </section>
        <section id="whoweare">
          <h3>Who we are</h3>
        </section>
      </div>
    </>
  )
}

export default Home
