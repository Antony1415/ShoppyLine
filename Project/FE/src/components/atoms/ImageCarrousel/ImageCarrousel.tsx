'use client'
import React, { useEffect, useState } from 'react'
import styles from './ImageCarrousel.module.css'
import { Icon } from '@/components/atoms'

export interface ImageCarrouselProps {
    className?: string;
    data: string[] | React.ReactNode[];
    autoSlide?: boolean;
    delay?: number;
}

const ImageCarrousel = ({ className, data, autoSlide = false, delay = 3000 }: ImageCarrouselProps): React.JSX.Element => {
    const [currentImage, setCurrentImage] = useState<number>(0)

    const showNextImage = () => {
        setCurrentImage((index) => {
            if (index === (data.length - 1)) return 0
            return index + 1
        })
    }

    const showPrevImage = () => {
        setCurrentImage((index) => {
            if (index === 0) return (data.length - 1)
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
                className={`${styles.ImageCarrousel_button} ${styles.ImageCarrousel_button___leftArrow}`}
                size={{ width: 10, height: 15 }}
                src='/assets/svg/right_arrow.svg'
                onClick={showPrevImage}
            />
            <Icon
                className={`${styles.ImageCarrousel_button} ${styles.ImageCarrousel_button___rightArrow}`}
                size={{ width: 10, height: 15 }}
                src='/assets/svg/right_arrow.svg'
                onClick={showNextImage}
            />

            <div className='flex h-full w-full overflow-hidden'>
                {data.map((item) => {
                    return (
                        <div
                            className={styles.ImageCarrousel_container}
                            style={{ translate: `${-100 * currentImage}%` }}
                        >
                            {typeof item === 'string'
                                ? (
                                    <img
                                        className='w-full h-full'
                                        src={item as string}
                                    />
                                )
                                : item}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default ImageCarrousel