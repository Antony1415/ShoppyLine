import { ImageSlider } from '@/components/atoms/ImageSlider'
import React from 'react'
import Beach from '../../../../../public/assets/png/beach.jpg'
import City from '../../../../../public/assets/png/city.jpg'
import Forest from '../../../../../public/assets/png/forest.jpg'
import MoraineLake from '../../../../../public/assets/png/moraine_lake.jpg'
import Town from '../../../../../public/assets/png/town.jpg'

const HomeBanner = () => {
  const images = [Beach, City, Forest, MoraineLake, Town]

  return (
    <div className='flex h-[300px] w-full gap-2 rounded-[3px] overflow-hidden'>
      <ImageSlider className='flex-[3]' images={images} />

      <div className='flex flex-col flex-[2] gap-2'>
        <div className='flex-[1] relative'>
          <img src={City.src} className='absolute w-full h-full object-cover object-left-top' />
        </div>

        <div className='flex-[1] relative'>
          <img src={Beach.src} className='w-full h-full absolute object-fill' />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner