import Image from 'next/image'
import React from 'react'
import Circle from './Circle'

const Grid = () => {
  return (
    <div className='relative w-full h-screen bg-[#001a2c] flex items-center justify-center overflow-hidden'>
        <Circle />
        <Image src="/grid.png" className='z-0' alt="grid" width={1920} height={1080} />
    </div>
  )
}

export default Grid