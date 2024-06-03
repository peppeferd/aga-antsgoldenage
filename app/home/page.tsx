'use client'

import Loader from '@/components/Loader'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import digitalcoachlogo from '../../public/Digitalcoach.webp'
import { IoNewspaperOutline } from 'react-icons/io5'
import { FaPeopleGroup, FaDiscord } from 'react-icons/fa6'
import { GiAnt } from 'react-icons/gi'
import neutralizer from '../../public/NFT-PROJECT/Neutralizer.png'
import defender from '../../public/NFT-PROJECT/Defender.png'
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
      <div className="smooth">
        <div
          className={`classenav bg-transparent sticky flex justify-evenly  xl:text-xl md:text-xs items-center h-20 px-4 text-black shadow-xl saliindex ${
            visible ? 'top-0' : ''
          } `}
        >
          {/* Logo */}

          <h1 className="bg-indigo-300 rounded-full p-3 text-xl font-bold text-black cursor-pointer">
            <a href="#home">Ants' Golden Age</a>
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-xl gap-4">
            <div className="bg-indigo-300 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-yellow-200">
                <a href="#story">
                  <div className="flex flex-row">
                    <IoNewspaperOutline className="my-auto mr-1" />
                    <h1>Story</h1>
                  </div>
                </a>
              </li>
            </div>
            <div className="bg-indigo-300 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-yellow-200">
                <a href="#characters">
                  <div className="flex flex-row">
                    <GiAnt className="my-auto mr-1" />
                    <h1>Characters</h1>
                  </div>
                </a>
              </li>
            </div>
            <div className="bg-indigo-300 rounded-t-lg">
              <li className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-yellow-200">
                <a href="#whoweare">
                  <div className="flex flex-row">
                    <FaPeopleGroup className="my-auto mr-1" />
                    <h1>Who we are</h1>
                  </div>
                </a>
              </li>
            </div>
            <div className="bg-indigo-300 rounded-full p-1">
              <li>
                <a href="https://discord.com/" target="_blank">
                  <div>
                    <FaDiscord size={30} className="mt-1 p-1" />
                  </div>
                </a>
              </li>
            </div>
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="block md:hidden text-black bg-indigo-300 p-3 rounded-full"
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
              className="w-fit p-4 text-3xl font-bold text-black mx-auto rounded-full cursor-pointer bg-indigo-300"
            >
              <a href="#home">A.G.A</a>
            </h1>

            {/* Mobile Navigation Items */}

            <div className="ml-4 mb-4 bg-indigo-300 w-fit rounded-full">
              <li
                onClick={handleNav}
                className="flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#story">
                  <div className="flex flex-row">
                    <IoNewspaperOutline className="my-auto mr-1" />
                    <h1>Story</h1>
                  </div>
                </a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-indigo-300 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#characters">
                  <div className="flex flex-row">
                    <GiAnt className="my-auto mr-1" />
                    <h1>Characters</h1>
                  </div>
                </a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-indigo-300 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="#whoweare">
                  <div className="flex flex-row">
                    <FaPeopleGroup className="my-auto mr-1" />
                    <h1>Who we are</h1>
                  </div>
                </a>
              </li>
            </div>
            <div className="ml-4 mb-4 bg-indigo-300 w-fit rounded-full">
              <li
                onClick={handleNav}
                className=" flex flex-row cursor-pointer bg-transparent p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit"
              >
                <a href="https://discord.com/" target="_blank">
                  <div>
                    <FaDiscord className="my-auto" />
                  </div>
                </a>
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
          <div className="flex flex-col mt-[110px]">
            <h1 className=" bg-indigo-800 text-2xl text-yellow-200 p-2 rounded-full w-fit mx-auto">
              Story of A.G.A
            </h1>
            <h1 className="lg:mx-44 text-center tracking-wide mt-[20px] bg-transparent text-indigo-800 bg-yellow-200 p-2 rounded-2xl text-base">
              It was 13,7 years ago when a massive explosion created the
              universe as we know it and with it billions of life beings, even
              complex and simple.
              <br /> Beetwen them the dinosaurs and then, the man on earth.
            </h1>
            <div className="lg:grid lg:grid-cols-2 flex flex-col justify-evenly">
              <div>
                <Image
                  src="https://tan-top-hummingbird-696.mypinata.cloud/ipfs/QmfM3RbnwJtXCcxjat627EDX4jppmWhMc1KwG9dMVQx1wo"
                  alt="pichome1"
                  width={400}
                  height={400}
                  className="lg:ml-[25vh] lg:mt-[5vh] rounded-md mx-auto"
                />
              </div>
              <div>
                <h1 className="lg:mx-11 tracking-wide mt-[30px] bg-transparent text-indigo-800 bg-yellow-200 p-2 rounded-2xl  text-base">
                  {' '}
                  The man with his arrogance put himself at the top of food
                  chain, dominating all other species and most of all,
                  ignorating nature.
                  <br />
                  <br />
                  But in the universe, according to Kardašëv ladder, the alien
                  civilitations have different evolution rank: human being can
                  be classified as "Kind 0", and then all other more evolved
                  alien civilitation are of "Kind 1", "Kind 2", "Kind 3" and so
                  on.
                </h1>{' '}
                <h1 className="lg:mx-11 tracking-wide mt-[20px] bg-transparent text-indigo-800 bg-yellow-200 p-2 rounded-2xl text-base">
                  Kind 0: They are able to use only a fraction of the total
                  energy available on earth. Kind 1: Civilitation that is able
                  to utilize all energy available on their origin planet.
                  <br />
                  <br /> Kind 2: Civilitation able to utilize all energy coming
                  from the star on their planet system of origin Kind 3:
                  Civilitation able to utilize all energy available on their
                  galaxy Beetween the last there are the Cyber-Ants, known even
                  with nomenclature "Formicidae Cyber Sapiens" or "C-A 42/1976"
                  ad identifier of their galaxy of origin, Orion.
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="lg:mx-11 tracking-wide mt-[110px] bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl text-base">
            The Cyber-Ants are a civilitation of "Kind 1", extremely more
            ancient and from even not-kwown origin, they have a system on
            evoltion extremely complex and low, but inexorably infallible.
            <br /> This peculiarity made them a very long-lived specie and with
            some paranoic traits, just bacause of their way to lead and drive
            their destiny based alwasy more on a dominant tecnology. <br />
            From them there are actually very few informations, most of
            documents are being secretated.
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 flex flex-col justify-evenly mb-2">
            <div className="flex flex-col mt-3">
              <h1 className="mb-3 bg-indigo-800 text-2xl text-yellow-200 p-1 rounded-lg w-fit mx-auto">
                The arrive on Earth
              </h1>
              <h1 className="lg:mx-11 tracking-wide bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl text-base">
                It is known as the arrive on earth following some archeological
                studies are from about 12000 years ago.
                <br /> First interactions with man are from that period of time,
                many symbols in the caves highlight some ants with a helmet.
                <br /> From then the traces were lost until the first years of
                1900. A biologist "Richard Brown" found a supernatural ant. It
                seemed it got some metallic parts integrated in its body, but
                the ant were extremely more fast and succeded to not get traped.
                In that period, doc.
                <br /> Brown's scientists were more focalized on some insect
                species in Arizona. He succeded to get other informations until
                when, with a clever stratagem, he trapped one of these ants. It
                spent many months writing in his research diary. The ant seemed
                to answer to human language with sending sounds, but it let
                others understand clearly. <br />
                Unlucky during an hot and muggy summer night, a big fire blazed
                up in his home. All of his researches were destroyed and himself
                also. Of the ant it had not other informations from then.
              </h1>
            </div>
            <div className="flex flex-col mt-11">
              <div>
                <Image
                  src="https://tan-top-hummingbird-696.mypinata.cloud/ipfs/QmW9qTuU6n1jModMxbMcCMYzBdkVuv5Z6nrdvLH1aD5eNo"
                  alt="pichome2"
                  width={350}
                  height={350}
                  className="lg:ml-44 lg:mt-5 rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2 gap-2 mt-[110px] items-center">
            <div className="flex flex-col">
              <h1 className=" bg-indigo-800 mb-3 text-2xl text-yellow-200 p-1 rounded-lg w-fit mx-auto">
                Modern times
              </h1>
              <h1 className="lg:mx-11 tracking-wide bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl  text-base">
                With the invention of internet, on some cospiracy forum,
                sometime someone came out with a testimony of people telling
                some cybernetic ants.
                <br /> But no one succeded to find the proofs, every trying to
                make photos was unfocused o disturbed by frequencies. So this
                persons' reliability was equal to zero. With the world evolving
                and developing itself, the tensions between the different
                cultures went increasing.
                <br /> The pollution were always more present in everyday life,
                the geopolitical assets were totally unstable, continue wars,
                too much consumisn, the planet seemed to suffer. <br />
                After pandemic of coronavirus, mankind seemed going on the right
                path, but it was just an illusion lasted a decade.
                <br /> The war restarted and every nation made their own
                interest, don't taking care of negative effectives on climate
                and earth. The comunication between the different presidents
                were inexistent, it should had been final sentence.
              </h1>
            </div>
            <div>
              <h1 className=" bg-indigo-800 mb-3 text-2xl text-yellow-200 p-1 rounded-lg w-fit mx-auto">
                Year 2130
              </h1>
              <h1 className="lg:mx-11 tracking-wide bg-transparent text-indigo-800 bg-yellow-200 p-1 rounded-2xl text-base">
                In origin it was a very big massive explosion and following
                other 50 nuclear explosions.
                <br /> A chain of fallout destroyed a big part of mankind as we
                known it. <br />
                The human population were literally decreased from an half, most
                rich nations became poor, while poor nations seemed to have a
                more fast recovery.
                <br /> Everything started with a little female children living
                in a no more prosperus land that were playing with a paper
                airplane.
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
          </div>
        </section>
        <section id="characters">
          <div className="mt-[150px]">
            <h1 className=" bg-indigo-800 text-2xl mb-10 text-yellow-200 p-2 rounded-full w-fit mx-auto">
              Characters
            </h1>
            <div className="lg:grid lg:grid-cols-2 flex flex-col text-center">
              <div>
                <h1 className="bg-yellow-200 text-indigo-800 w-fit mx-auto p-2 text-lg">
                  Neutralizer Ant
                </h1>
                <Image
                  src={neutralizer}
                  width={300}
                  height={300}
                  alt="neutralizer"
                  className="mx-auto"
                />
                <h1 className="lg:mx-5 text-lg text-yellow-200 bg-indigo-800">
                  Neutralizer Ant, the destructors, the killers. Many are the
                  names which hover on this legendary figure. They are elite
                  fighters, hybrids of excellence with extraordinary skills.
                  Some of this Cyber-Ants got in equipment optical rays of
                  impact kinetic energy, others got a high strength and fire
                  power higher to fight every threats where Soldiers can't do
                  anything. Their equipment is the most evolved in engineering
                  terms regarding energy recharge and management.
                </h1>
                <h1 className="bg-yellow-200 text-black w-fit mx-auto mt-2 mb-2 p-2 rounded-full text-xl">
                  Stats
                </h1>
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="flex flex-col h-60">
                    <h1 className="bg-yellow-200 text-black rounded-t-lg text-xl">
                      Resilience
                    </h1>
                    <h1 className="bg-yellow-300 text-black text-xl">
                      Strategy
                    </h1>
                    <h1 className="bg-yellow-400 text-black rounded-b-lg text-xl">
                      Energy
                    </h1>
                  </div>
                  <div className="flex flex-col h-60">
                    <div className="bg-red-500 w-[100px] text-xl">50%</div>
                    <div className="bg-blue-500 w-[165px] text-xl">75%</div>
                    <div className="bg-green-500 w-[200px] text-xl">100%</div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="bg-yellow-200 text-indigo-800 w-fit mx-auto p-2 text-lg">
                  Defender Ant
                </h1>
                <Image
                  src={defender}
                  width={300}
                  height={300}
                  alt="neutralizer"
                  className="mx-auto"
                />
                <h1 className="lg:mx-5 text-lg text-yellow-200 bg-indigo-800">
                  They are equipped with big artificial armors which generate
                  energy shield protecting themselves. This armors, feeded from
                  the computer network shared between the ants, are able to
                  resist from strong hits and to deviate every attack received.
                  The Defender Ants works as living shield for the allies,
                  protecting them during the battles and reconnaissance
                  missions. The power of this armor didn't come without a price:
                  to master this advanced technology they had to go trough an
                  hard and intense training.
                </h1>
                <h1 className="bg-yellow-200 text-black w-fit mx-auto mt-2 mb-2 p-2 rounded-full  text-xl">
                  Stats
                </h1>
                <div className="flex flex-wrap justify-center gap-2 ">
                  <div className="flex flex-col h-60">
                    <h1 className="bg-yellow-200 text-black rounded-t-lg text-xl">
                      Resilience
                    </h1>
                    <h1 className="bg-yellow-300 text-black text-xl">
                      Strategy
                    </h1>
                    <h1 className="bg-yellow-400 text-black rounded-b-lg text-xl">
                      Energy
                    </h1>
                  </div>
                  <div className="flex flex-col h-60">
                    <div className="bg-red-500 w-[170px] text-xl">85%</div>
                    <div className="bg-blue-500 w-[180px] text-xl">90%</div>
                    <div className="bg-green-500 w-[130px] text-xl">65%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="bg-yellow-200">About Section</h3>
        </section>
        <section>
          <h3 className="bg-yellow-200">About Section</h3>
        </section>
        <section id="whoweare">
          <div className="flex flex-col mt-[110px]">
            <h1 className=" bg-indigo-800 text-5xl mb-10 text-yellow-200 p-2 rounded-full w-fit mx-auto">
              Who we are
            </h1>
            <div className="flex flex-wrap gap-10 justify-evenly">
              <div>
                <h1 className="w-96 p-10 rounded-lg bg-indigo-800 text-yellow-200 text-2xl font-base">
                  We are young and motivated people from Digital Coach®.{' '}
                  <br></br>
                  We do believe in the power of blockchain and willing to help
                  the world knowing this too, for good things to come.
                </h1>
              </div>
              <div className="my-auto rounded-lg bg-white p-10">
                <Image
                  src={digitalcoachlogo}
                  width={200}
                  height={200}
                  alt="logodigitalcoach"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
