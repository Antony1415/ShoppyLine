import React from 'react'
import { ImageCarrousel } from '@/components/atoms'

const HomeBanner = () => {
  
  const images = [
    'assets/png/beach.jpg',
    'assets/png/city.jpg',
    'assets/png/forest.jpg',
    'assets/png/moraine_lake.jpg',
    'assets/png/town.jpg',
  ]

  return (
    <div className='flex shrink-0 h-[300px] w-full gap-3 rounded-[3px] overflow-hidden'>
      <ImageCarrousel autoSlide={true} className='flex-[3]' data={images} />

      <div className='flex flex-col flex-[2] gap-2'>
        <div className='flex-[1] relative'>
          <img src={images[0]} className='absolute w-full h-full object-cover object-bottom' />
        </div>

        <div className='flex-[1] relative'>
          <img src={images[1]} className='w-full h-full absolute object-fill' />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner