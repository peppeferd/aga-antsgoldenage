'use client'
import React from 'react'

function Loader() {
  return (
    <div className="bg-white bg-opacity-155 h-screen w-full inset-0 flex justify-center items-center saliindex">
      <div className="h-8 w-8 border-4 border-solid border-white border-t-black animate-spin rounded-full"></div>
    </div>
  )
}

export default Loader
