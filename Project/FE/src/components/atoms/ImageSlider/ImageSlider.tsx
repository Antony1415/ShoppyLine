'use client'
import React, { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import styles from './ImageSlide.module.css'
import { Icon } from '@/components/atoms'

interface ImageSliderProps {
    className?: string,
    images: StaticImageData[],
    autoSlide?: boolean,
    delay?: number,
}

const ImageSlider = ({ className, images, autoSlide = true, delay = 3000 }: ImageSliderProps): React.JSX.Element => {
    const [currentImage, setCurrentImage] = useState<number>(0)

    const showNextImage = () => {
        setCurrentImage((index) => {
            if (index === (images.length - 1)) return 0
            return index + 1
        })
    }

    const showPrevImage = () => {
        setCurrentImage((index) => {
            if (index === 0) return (images.length - 1)
            return index - 1
        })
    }

    useEffect(() => {
        if (autoSlide) {
            const automaticSlide = setTimeout(() => {
                showNextImage()
            }, delay)

            return () => clearTimeout(automaticSlide)
        }
    }, [currentImage])

    return (
        <div className={`${className} relative w-full h-full`}>
            <Icon
                className={`${styles.ImageSlide_button} ${styles.ImageSlide_button___leftArrow}`}
                size={{ width: 10, height: 15 }}
                src='/assets/svg/right_arrow.svg'
                onClick={showPrevImage}
            />
            <Icon
                className={`${styles.ImageSlide_button} ${styles.ImageSlide_button___rightArrow}`}
                size={{ width: 10, height: 15 }}
                src='/assets/svg/right_arrow.svg'
                onClick={showNextImage}
            />

            <div className='flex h-full w-full overflow-hidden'>
                {images.map((image) => {
                    return (
                        <img
                            className={styles.ImageSlide_image}
                            src={image.src}
                            style={{ translate: `${-100 * currentImage}%` }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ImageSlider