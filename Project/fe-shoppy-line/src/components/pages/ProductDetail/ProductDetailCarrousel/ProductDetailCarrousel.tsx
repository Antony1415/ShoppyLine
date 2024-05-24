'use client'
import { ImageCarrousel } from '@/components/atoms';
import React, { useState } from 'react'

export interface ProductDetailCarrouselProps {
  images: string[];
}

const ProductDetail = ({ images }: ProductDetailCarrouselProps): React.JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0])

  const renderCarrouselElement = () => {
    const sliceImage = Array.from({ length: (images.length % 4 === 0 ? (images.length / 4) : (Math.ceil(images.length / 4))) }, (_, index) => {
      return images.slice(index * 4, (index + 1) * 4)
    })

    return sliceImage.map((images: string[], index) => {
      return (
        <div className='grid grid-cols-4 gap-x-5 w-full h-full' key={index}>
          {images.map((image: string, index: number) => {
            return (
              <div className='w-full h-full relative cursor-pointer'>
                <img key={index} className='w-full h-full absolute object-fill' src={image} onClick={() => setSelectedImage(image)} />
              </div>
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className='flex-[4] flex flex-col gap-4'>
      <div className='relative w-full flex-[4]'>
        <img src={selectedImage} className='absolute w-full h-full' />
      </div>
      <ImageCarrousel className='flex-[1]' data={renderCarrouselElement()} />
    </div>
  )
}

export default ProductDetail