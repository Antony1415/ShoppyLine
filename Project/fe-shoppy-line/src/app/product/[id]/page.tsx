import React from 'react'
import { ProductDetailCarrousel, ProductDetailInformation } from '@/components/pages';
import { Product } from '@/utils/type';
import { MainLayout } from '@/components/layouts';

export async function generateStaticParams() {
  const response = await fetch(`https://dummyjson.com/products`)
  const product = await response.json();

  return product.products.map((product: Product) => ({
    id: product.id.toString()
  }))
}

async function getBestSellerProduct(productId: string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  return res.json();
}

const page = async ({ params }: { params: { id: string } }) => {
  const product: Product = await getBestSellerProduct(params.id);

  return (
    <MainLayout>
      <div className='mx-20 bg-white rounded-[2px] px-5 pt-5 pb-6 h-full'>
        <div className='flex gap-10 h-full w-full'>
          <ProductDetailCarrousel images={product.images} />
          <ProductDetailInformation product={product} />
        </div>
      </div>
    </MainLayout>
  )
}

export default page