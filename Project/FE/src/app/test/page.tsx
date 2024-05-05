import React from 'react'

const index = () => {
  return (
    <div className='flex flex-col h-[500px]'>
      <div className='bg-slate-500 flex-[4]'>a</div>
      <div className='grid grid-cols-4 flex-[1] relative'>
        <div className='bg-red-500'>a</div>
        <div className='bg-yellow-500'>a</div>
        <div className='bg-blue-500'>a</div>
        <img className='absolute w-[20%]' src='/assets/png/banner_3.jpg'/>
      </div>
    </div>
  )
}

export default index