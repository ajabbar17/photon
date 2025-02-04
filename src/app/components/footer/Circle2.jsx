import React from 'react'

const Circle2 = ({bottom, right}) => {
return (
    //take the bottom and right props and use template strings to apply styles
    <div 
        className='w-[150px] h-[100px] md:w-[390px] md:h-[94px] -z-10 blur-[40px]  block rounded-full  bg-[#fff] absolute'
        style={{ bottom: `${bottom}%`, right: `${right}%` }}
    >
    </div>
)
}

export default Circle2