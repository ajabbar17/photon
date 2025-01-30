import React from 'react'

const Circle = ({bottom, right}) => {
return (
    //take the bottom and right props and use template strings to apply styles
    <div 
        className='w-[180px] h-[140px] md:w-[390px] md:h-[370px]  block rounded-full -z-10 blur-[80px] bg-[#FB5421] absolute'
        style={{ bottom: `${bottom}%`, right: `${right}%` }}
    >
    </div>
)
}

export default Circle