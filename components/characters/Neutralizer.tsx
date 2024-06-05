import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import Image from 'next/image'
import './neutralizer.css'
import neutralizer from '../../public/NFT-PROJECT/Neutralizer.png'
const Neutralizer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
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

        <Button className="my-5 font-bold" onClick={showModal}>
          Open Description
        </Button>
        <Modal
          title="Neutralizer Ant"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <h1 className="text-base text-white bg-black p-3">
            Neutralizer Ant, the destructors, the killers. Many are the names
            which hover on this legendary figure. They are elite fighters,
            hybrids of excellence with extraordinary skills. Some of this
            Cyber-Ants got in equipment optical rays of impact kinetic energy,
            others got a high strength and fire power higher to fight every
            threats where Soldiers can't do anything. Their equipment is the
            most evolved in engineering terms regarding energy recharge and
            management.
          </h1>
        </Modal>
        <h1 className="bg-yellow-200 text-black w-fit mx-auto mt-2 mb-2 p-2 rounded-full text-xl">
          Stats
        </h1>
        <div className="container text-left">
          <div className="bar learning" data-skill="Resilience: 50%"></div>
          <div className="bar back basic" data-skill="Strategy: 75%"></div>
          <div
            className="bar back intermediate"
            data-skill="Energy: 100%"
          ></div>
          <div className="bar front advanced" data-skill="EVO"></div>
        </div>
      </div>
    </div>
  )
}

export default Neutralizer
