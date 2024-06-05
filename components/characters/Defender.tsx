import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import Image from 'next/image'
import './defender.css'
import defender from '../../public/NFT-PROJECT/Defender.png'
const Defender = () => {
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
          Defender Ant
        </h1>
        <Image
          src={defender}
          width={300}
          height={300}
          alt="neutralizer"
          className="mx-auto"
        />
        <Button className="my-5 font-bold" onClick={showModal}>
          Open Description
        </Button>
        <Modal
          title="Defender Ant"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <h1 className="text-base text-white bg-black p-3">
            They are equipped with big artificial armors which generate energy
            shield protecting themselves. This armors, feeded from the computer
            network shared between the ants, are able to resist from strong hits
            and to deviate every attack received. The Defender Ants works as
            living shield for the allies, protecting them during the battles and
            reconnaissance missions. The power of this armor didn't come without
            a price: to master this advanced technology they had to go trough an
            hard and intense training.
          </h1>
        </Modal>

        <h1 className="bg-yellow-200 text-black w-fit mx-auto mt-2 mb-2 p-2 rounded-full  text-xl">
          Stats
        </h1>
        <div className="container text-left">
          <div className="bar learning" data-skill="Resilience: 85%"></div>
          <div className="bar back basic" data-skill="Strategy: 90%"></div>
          <div className="bar back intermediate" data-skill="Energy: 65%"></div>
          <div className="bar front advanced" data-skill="EVO"></div>
        </div>
      </div>
    </div>
  )
}

export default Defender
