import { MainLayout } from '@/components/layouts'
import { AuthModal, HomeBanner, HomeBestSellerProduct, HomeRecommendedProduct } from '@/components/pages'
import React from 'react'

const page = () => {
  return (
    <MainLayout>
      <div className='flex flex-col px-[100px] gap-8 h-full'>
        <HomeBanner />

        <HomeBestSellerProduct />

        <HomeRecommendedProduct />
      </div>

      <AuthModal />
    </MainLayout>
  )
}

export default page