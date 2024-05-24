import { MainLayout } from '@/components/layouts';
import { AuthModal, HomeBanner, HomeBestSellerProduct, HomeRecommendedProduct } from '@/components/pages'
import { Product } from '@/utils/type';
import React from 'react'

async function getBestSellerProduct() {
  const res = await fetch(`https://dummyjson.com/products?limit=20`)
    .then(res => res.json())
    .then(data => {
      const mapData = data.products.map(({ id, title, description, category, price, rating, images }: Product) => {
        return {
          id,
          title,
          description,
          category,
          price,
          rating,
          images
        }
      })
      const array: Product[][] = Array.from({ length: (mapData.length % 7 === 0 ? (mapData.length / 7) : (Math.ceil(mapData.length / 7))) }, (_, index) => {
        return mapData.slice(index * 7, (index + 1) * 7)
      })

      return array;
    });
  return res;
}

const page = async () => {
  const bestSellerProduct = await getBestSellerProduct();

  return (
    <MainLayout>
      <div className='flex flex-col px-[100px] gap-8 h-full'>
        <HomeBanner />

        <HomeBestSellerProduct data={bestSellerProduct} />

        <HomeRecommendedProduct />
      </div>

      <AuthModal />
    </MainLayout>
  )
}

export default page