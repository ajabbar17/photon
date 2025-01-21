import React from 'react'

const Circle = ({bottom, right}) => {
return (
    //take the bottom and right props and use template strings to apply styles
    <div 
        className='w-[390px] h-[390px] hidden md:block rounded-full -z-10 blur-[80px] bg-[#FB5421] absolute'
        style={{ bottom: `${bottom}%`, right: `${right}%` }}
    >
    </div>
)
}

export default Circle