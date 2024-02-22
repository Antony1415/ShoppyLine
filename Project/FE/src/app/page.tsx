import { MainLayout } from '@/components/layouts'
import { HomeBanner } from '@/components/pages'
import React from 'react'

const page = () => {
  return (
    <MainLayout>
      <div className='px-[100px]'>
        <HomeBanner />
      </div>
    </MainLayout>
  )
}

export default page