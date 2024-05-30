'use client'

import Loader from '@/components/Loader'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaPeopleGroup, FaRegMessage } from 'react-icons/fa6'
import { BsFileEarmarkText } from 'react-icons/bs'
import { GiLongAntennaeBug } from 'react-icons/gi'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [isClient, setIsClient] = useState(false)

  let [open, setOpen] = useState(false)
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
      <div className="smooth">
        <div
          className={`classenav bg-transparent sticky flex justify-evenly  xl:text-xl md:text-xs items-center h-20 px-4 text-green-200 shadow-xl saliindex ${
            visible ? 'top-0' : ''
          } `}
        >
          {/* Logo */}

          <h1 className="bg-slate-800 rounded-full p-3 text-xl font-bold text-green-200 cursor-pointer">
            <a href="#home">Ants' Golden Age</a>
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-xl gap-4">
            <div className="bg-slate-800 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-white">
                <a href="#about">about</a>
              </li>
            </div>
            <div className="bg-slate-800 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-white">
                <a href="#price">price</a>
              </li>
            </div>
            <div className="bg-slate-800 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-white">
                <a href="#contact">contact</a>
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
                <a href="#about">about</a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-slate-800 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#price">price</a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-slate-800 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#contact">contact</a>
              </li>
            </div>
          </ul>
        </div>

        <section id="home">
          <h2>Full Page Scroll</h2>
        </section>
        <section id="about">
          <h2>About Section</h2>
        </section>
        <section id="price">
          <h2>Price Section</h2>
        </section>
        <section id="contact">
          <h2>Contact Section</h2>
        </section>
      </div>
      <div className="social">
        <a
          href="https://www.youtube.com/channel/UC8xTHK97Ng__KZvGcO_K7CA?sub_confirmation=1"
          target="_blank"
        >
          Click Here For More (600+) Website and CSS Effects
        </a>
      </div>
    </>
  )
}

export default Home
