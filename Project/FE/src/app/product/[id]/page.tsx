import React from 'react'
import { useRouter } from 'next/router'

const page = ({ params }: { params: { slug: string } }) => {
  console.log("slug: ", params);
  
  return (
    <div className='flex flex-col gap-[100px] py-[500px]'>
      <div className='bg-red-500 w-[500px] h-[500px] sticky ml-auto top-0'>
      </div>
      <div className='bg-red-500 w-[500px] h-[500px]'>

      </div>
      <div className='bg-red-500 w-[500px] h-[500px]'>

      </div>
    </div>
  )
}

export default page