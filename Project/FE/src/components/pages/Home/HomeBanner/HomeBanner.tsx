import React from 'react'
import { ImageCarrousel } from '@/components/atoms'

const HomeBanner = () => {
  
  const imagesCarrousel = [
    'assets/png/banner_3.jpg',
    'assets/png/banner_2.jpg',
    'assets/png/banner_4.jpg',
    'assets/png/banner_1.jpg',
    'assets/png/banner_5.jpg',
  ]

  const imagesBannerA = 'assets/png/banner_7.jpg'

  const imagesBannerB = 'assets/png/banner_6.png'

  return (
    <div className='flex shrink-0 h-[300px] w-full gap-3 rounded-[3px] overflow-hidden'>
      <ImageCarrousel autoSlide={true} className='flex-[3]' data={imagesCarrousel} />

      <div className='flex flex-col flex-[2] gap-2'>
        <div className='flex-[1] relative'>
          <img src={imagesBannerA} className='absolute w-full h-full object-fill' />
        </div>

        <div className='flex-[1] relative'>
          <img src={imagesBannerB} className='w-full h-full absolute object-fill' />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner