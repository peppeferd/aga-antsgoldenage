'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaPeopleGroup, FaRegMessage } from 'react-icons/fa6'
import { FiHome } from 'react-icons/fi'
import { BsFileEarmarkText } from 'react-icons/bs'
import { GiLongAntennaeBug } from 'react-icons/gi'
import Image from 'next/image'
import logo from '../app/favicon.ico'
import Story from '@/components/Story'
export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const [nav, setNav] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const router = useRouter()

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav)
  }
  const handleMouseEnter = () => {
    setDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }

  const handleScrollToTopHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setNav(false)
  }

  const handleScrollToStory = () => {
    const element = document.getElementById('story')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScrollToFormicaCharacters = () => {
    const element = document.getElementById('characters')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScrollToFormicaSoldato = () => {
    const element = document.getElementById('soldato')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScrollToFormicaSicario = () => {
    const element = document.getElementById('sicario')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScrollToFormicaElite = () => {
    const element = document.getElementById('elite')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScrollToStayConnected = () => {
    const element = document.getElementById('staytuned')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
      setNav(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-200 to-black">
      <div
        className={`bg-gradient-to-r from-black to-yellow-200 sticky flex justify-evenly xl:text-xl md:text-xs items-center h-20 px-4 text-green-200 shadow-xl saliindex ${
          visible ? 'top-0' : ''
        } `}
      >
        {/* Logo */}

        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-1 cursor-pointer"
        />
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className=" text-xl font-bold text-green-200 cursor-pointer"
        >
          Ant's Golden Age
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-xl gap-4">
          {/*  <li
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
          >
            <FiHome className="my-auto mr-1" />
            <h1 className="my-auto">Home</h1>
          </li> */}

          <li
            onClick={handleScrollToStory}
            className="flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
          >
            <BsFileEarmarkText className="my-auto mr-1" />{' '}
            <h1 className="my-auto">Story</h1>
          </li>
          <li
            onClick={handleScrollToFormicaCharacters}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-row cursor-pointer justify-center bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
          >
            <GiLongAntennaeBug className="my-auto mr-1" />
            <h1 className="my-auto">Characters</h1>
            {isDropdownVisible && (
              <div className="fixed top-0 mt-14 bg-green-800 bg-opacity-40 border border-solid rounded-xl border-black w-fit h-fit">
                <ul className="flex flex-col gap-5 my-5 text-center">
                  <li
                    onClick={handleScrollToFormicaSoldato}
                    className="cursor-pointer bg-transparent p-2 hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
                  >
                    Formiche soldato
                  </li>
                  <li
                    onClick={handleScrollToFormicaSicario}
                    className="cursor-pointer bg-transparent p-2 hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
                  >
                    Formiche sicarie
                  </li>
                  <li
                    onClick={handleScrollToFormicaElite}
                    className="cursor-pointer bg-transparent p-2 hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
                  >
                    Formiche elite
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            onClick={handleScrollToAbout}
            className="flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
          >
            <FaPeopleGroup className="my-auto mr-1" />
            <h1 className="my-auto"> About</h1>
          </li>
          <li
            onClick={handleScrollToStayConnected}
            className="flex flex-row cursor-pointer bg-transparent my-auto p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600"
          >
            <FaRegMessage className="my-auto mr-1" />
            <h1 className="my-auto"> Stay connected</h1>
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden text-black">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? 'absolute md:hidden left-0 top-12 h-fit w-full ease-in-out duration-500 mt-10 flex-col bg-gradient-to-r from-black to-yellow-200 bg-opacity-75 gap-7 py-5 text-xl'
              : 'ease-in-out w-fit duration-500 fixed top-0 bottom-0 left-[-100%] '
          }
        >
          {/* Mobile Logo */}
          <h1
            onClick={handleScrollToTopHome}
            className="w-full text-3xl font-bold text-yellow-200 text-center cursor-pointer"
          >
            A.G.A
          </h1>

          {/* Mobile Navigation Items */}
          {/*  <li
            onClick={handleScrollToTopHome}
            className="ml-4 flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
          >
            <FiHome className="my-auto mr-1" /> Home
          </li> */}
          <li
            onClick={handleScrollToStory}
            className="ml-4 flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
          >
            <BsFileEarmarkText className="my-auto mr-1" /> Story
          </li>
          <li
            onClick={handleScrollToFormicaCharacters}
            className="ml-4 flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
          >
            <GiLongAntennaeBug className="my-auto mr-1" />
            Characters
          </li>
          <li
            onClick={handleScrollToAbout}
            className="ml-4 flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
          >
            <FaPeopleGroup className="my-auto mr-1" /> About
          </li>
          <li
            onClick={handleScrollToStayConnected}
            className="ml-4 flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
          >
            <FaRegMessage className="my-auto mr-1" /> Stay connected
          </li>
        </ul>
      </div>
      <h1
        className="text-center mt-[50vh] h-fit text-4xl bg-green-300"
        id="home"
      >
        Homepage
      </h1>
      <h1
        className="text-center mt-[100vh] h-fit text-4xl bg-green-300"
        id="story"
      >
        Story
      </h1>
      <Story />
      <h1
        className="text-center mt-[100vh] h-fit text-4xl bg-green-300"
        id="characters"
      >
        Charachters
      </h1>
      <h1 className="text-center text-white" id="soldato">
        Formica soldato
      </h1>
      <h1 className="text-center text-white" id="sicario">
        Formica sicario
      </h1>
      <h1 className="text-center text-white" id="elite">
        Formica elite
      </h1>
      <h1
        id="about"
        className="text-center mt-[100vh] h-fit text-4xl bg-green-300"
      >
        About
      </h1>
      <div className="h-[50vh]">
        <h1
          className="text-center mt-[100vh] h-fit text-4xl bg-green-300"
          id="staytuned"
        >
          Stay connected
        </h1>
      </div>
    </main>
  )
}
