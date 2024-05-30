'use client'

import Loader from '@/components/Loader'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Home = () => {
  const [isClient, setIsClient] = useState(false)

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
        <div className="header">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#price">price</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
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
