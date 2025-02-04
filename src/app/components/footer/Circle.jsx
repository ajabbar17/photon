import React from 'react'

const Circle = ({bottom, right}) => {
  return (
    <div 
      className='w-[150px] h-[100px] md:w-[390px] md:h-[370px] xl:w-[400px] xl:h-[390px] block rounded-full -z-10 blur-[80px] bg-[#FB5421] absolute'
      style={{ 
        bottom: `clamp(${bottom}vh, ${bottom}%, ${bottom * 1.5}vh)`,
        right: `clamp(${right}vw, ${right}%, ${right * 1.5}vw)`
      }}
    >
    </div>
  )
}

export default Circle