'use client'

import Loader from '@/components/Loader'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

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
            className="block md:hidden text-yellow-200 bg-indigo-800 p-3 rounded-full"
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
              className="w-fit p-4 text-3xl font-bold text-yellow-200 mx-auto rounded-full cursor-pointer bg-indigo-800"
            >
              <a href="#home">A.G.A</a>
            </h1>

            {/* Mobile Navigation Items */}

            <div className="ml-4 mb-4 bg-indigo-800 w-fit rounded-full">
              <li
                onClick={handleNav}
                className="flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#story">Story</a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-indigo-800 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#about">About</a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-indigo-800 w-fit rounded-full">
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
          <h3 className="bg-yellow-200 justify-center items-center w-fit mx-auto my-auto">
            Ants' Golden Age
          </h3>
        </section>
        <section id="story">
          <div className="flex flex-col mt-28">
            <h1 className=" bg-indigo-800 text-3xl text-yellow-200 p-2 rounded-full w-fit mx-auto">
              Story of A.G.A
            </h1>
            <h1 className="lg:mx-24 tracking-wide mt-[20px] bg-transparent text-indigo-800 bg-yellow-200 p-2 rounded-2xl text-lg">
              It was 13,7 years ago when a massive explosion created the
              universe as we know it and with it billions of life beings, even
              complex and simple. Beetwen them the dinosaurs and then, the man
              on earth.
            </h1>
            <div className="lg:grid lg:grid-cols-2 flex flex-col">
              <div>
                <Image
                  src="https://tomato-impossible-lemur-706.mypinata.cloud/ipfs/QmfM3RbnwJtXCcxjat627EDX4jppmWhMc1KwG9dMVQx1wo"
                  alt="pichome1"
                  width={400}
                  height={400}
                  className="lg:ml-[25vh] lg:mt-[5vh] rounded-md"
                />
              </div>
              <div>
                <h1 className="lg:mx-24 tracking-wide mt-[20px] bg-transparent text-indigo-800 bg-yellow-200 p-2 rounded-2xl  text-lg">
                  {' '}
                  The man with his arrogance put himself at the top of food
                  chain, dominating all other species and most of all,
                  ignorating nature.
                  <br />
                  But in the universe, according to Kardašëv ladder, the alien
                  civilitations have different evolution rank: human being can
                  be classified as "Kind 0", and then all other more evolved
                  alien civilitation are of "Kind 1", "Kind 2", "Kind 3" and so
                  on.
                </h1>{' '}
                <h1 className="lg:mx-24 tracking-wide mt-[20px] bg-transparent text-indigo-800 bg-yellow-200 p-2 rounded-2xl text-lg">
                  Kind 0: They are able to use only a fraction of the total
                  energy available on earth. Kind 1: Civilitation that is able
                  to utilize all energy available on their origin planet. Kind
                  2: Civilitation able to utilize all energy coming from the
                  star on their planet system of origin Kind 3: Civilitation
                  able to utilize all energy available on their galaxy Beetween
                  the last there are the Cyber-Ants, known even with
                  nomenclature "Formicidae Cyber Sapiens" or "C-A 42/1976" ad
                  identifier of their galaxy of origin, Orion.
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="lg:lg:mx-16 tracking-wide mt-[110px] bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl text-lg">
            The Cyber-Ants are a civilitation of "Kind 1", extremely more
            ancient and from even not-kwown origin, they have a system on
            evoltion extremely complex and low, but inexorably infallible. This
            peculiarity made them a very long-lived specie and with some
            paranoic traits, just bacause of their way to lead and drive their
            destiny based alwasy more on a dominant tecnology. From them there
            are actually very few informations, most of documents are being
            secretated.
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 flex flex-col mb-2">
            <div className="flex flex-col mt-11">
              <h1 className="mb-3 bg-indigo-800 text-2xl text-yellow-200 p-1 rounded-lg w-fit mx-auto">
                The arrive on Earth
              </h1>
              <h1 className="lg:mx-16 tracking-wide bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl text-lg">
                It is known as the arrive on earth following some archeological
                studies are from about 12000 years ago. First interactions with
                man are from that period of time, many symbols in the caves
                highlight some ants with a helmet. From then the traces were
                lost until the first years of 1900. A biologist "Richard Brown"
                found a supernatural ant. It seemed it got some metallic parts
                integrated in its body, but the ant were extremely more fast and
                succeded to not get traped. In that period, doc. Brown's
                scientists were more focalized on some insect species in
                Arizona. He succeded to get other informations until when, with
                a clever stratagem, he trapped one of these ants. It spent many
                months writing in his research diary. The ant seemed to answer
                to human language with sending sounds, but it let others
                understand clearly. Unlucky during an hot and muggy summer
                night, a big fire blazed up in his home. All of his researches
                were destroyed and himself also. Of the ant it had not other
                informations from then.
              </h1>
            </div>
            <div className="flex flex-col mt-11">
              <h1 className=" bg-indigo-800 mb-3 text-2xl text-yellow-200 p-1 rounded-lg w-fit mx-auto">
                Modern times
              </h1>
              <h1 className="lg:mx-16 tracking-wide bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl text-lg">
                With the invention of internet, on some cospiracy forum,
                sometime someone came out with a testimony of people telling
                some cybernetic ants. But no one succeded to find the proofs,
                every trying to make photos was unfocused o disturbed by
                frequencies. So this persons' reliability was equal to zero.
                With the world evolving and developing itself, the tensions
                between the different cultures went increasing. The pollution
                were always more present in everyday life, the geopolitical
                assets were totally unstable, continue wars, too much consumisn,
                the planet seemed to suffer. After pandemic of coronavirus,
                mankind seemed going on the right path, but it was just an
                illusion lasted a decade. The war restarted and every nation
                made their own interest, don't taking care of negative
                effectives on climate and earth. The comunication between the
                different presidents were inexistent, it should had been final
                sentence.
              </h1>
            </div>
          </div>
        </section>
        <section>
          <h1 className="mt-28 bg-indigo-800 text-2xl text-yellow-200 p-1 rounded-full w-fit mx-auto">
            Year 2130
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h1 className="lg:mx-16 tracking-wide bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl text-lg">
                In origin it was a very big massive explosion and following
                other 50 nuclear explosions.
                <br /> A chain of fallout destroyed a big part of mankind as we
                known it. The human population were literally decreased from an
                half, most rich nations became poor, while poor nations seemed
                to have a more fast recovery. Everything started with a little
                female children living in a no more prosperus land that were
                playing with a paper airplane.
                <br /> Running she falled down and the airplane flyed away from
                her hands arriving in a valley. <br />
                <br />
                The airplane touched the ground, and between the rocks' shadow
                it camed up a cybernetic ant with was wearing an armor and was
                equipped with a plasma rifle, the ant noticed the airplane.
                <br /> Together with its team, they opened their wings and
                opened up the airplane. It was a page from an holy book, dating
                from the time of the Bible. <br />
                It was written in latin a description not so much accurate from
                a kind of ant with "iron plates and destructive powers", this
                description anticipated the chapter on the apocalypse. The
                soldier ant decided to take that proof and to take it to their
                superiors.
              </h1>
            </div>
            <div>
              <Image
                src="https://tomato-impossible-lemur-706.mypinata.cloud/ipfs/QmVrD5wiypAoRo9h2JHgLgn12HusLGAM7eXJYKnZzWTFJV"
                alt="pichome2"
                width={250}
                height={250}
                className="lg:ml-44 lg:mt-11 rounded-lg"
              />
            </div>
          </div>
        </section>
        <section id="about">
          <h3 className="bg-yellow-200">About Section</h3>
        </section>
        <section>
          <h3 className="bg-yellow-200">About Section</h3>
        </section>
        <section>
          <h3 className="bg-yellow-200">About Section</h3>
        </section>
        <section id="whoweare">
          <h3 className="bg-yellow-200">Who we are</h3>
        </section>
      </div>
    </>
  )
}

export default Home
