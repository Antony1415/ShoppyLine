import { Modal } from '@/components/organisms'
import React, { useState } from 'react'

const AuthModal = () => {
  return (
    <Modal showModal={true}>
      <div className='flex gap-5'>
        <div>
          Login Banner or Images
        </div>
        <div>
          Login / Register Text
        </div>
      </div>
    </Modal>
  )
}

export default AuthModal