import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import Image from 'next/image'
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
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex flex-col h-60">
            <h1 className="bg-yellow-200 text-black rounded-t-lg text-xl">
              Resilience
            </h1>
            <h1 className="bg-yellow-300 text-black text-xl">Strategy</h1>
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
    </div>
  )
}

export default Neutralizer
