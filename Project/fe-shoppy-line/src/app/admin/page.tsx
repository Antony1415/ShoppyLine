import { AdminLayout } from '@/components/layouts'
import { Table } from '@/components/molecules'
import { dummyBody, dummyHead } from '@/components/molecules/Table/dummy'
import React from 'react'

const page = () => {
  return (
    <AdminLayout>
      <Table<any> className={'mt-[100px] ml-[100px] !w-[500px]'} body={dummyBody} header={dummyHead} />
    </AdminLayout>
  )
}

export default page