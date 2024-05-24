'use client'
import { Modal } from '@/components/organisms'
import Image from 'next/image'
import React, { useState } from 'react'
import { AuthModalLogin, AuthModalRegister } from '@/components/pages'

const AuthModal = () => {
  const [authType, setAuthType] = useState('login');

  const onClickRegister = () => {
    setAuthType('register')
  }

  const onClickLogin = () => {
    setAuthType('login')
  }

  return (
    <Modal className='flex !p-10 border-[1px] border-black/70 !rounded-[10px] w-[55%]'>
      <div className='flex gap-10 items-center flex-1'>
        <Image className='h-[400px] flex-1' alt='' width={350} height={350} src={'/assets/svg/login_banner.svg'} />

        <div className='h-full w-[3px] bg-[#4E4FEB]/30 rounded-full' />

        <form className='flex flex-col h-full flex-1 overflow-hidden'>
          {authType === 'login'
            ? <AuthModalLogin onClickRegister={onClickRegister} />
            : <AuthModalRegister onClickLogin={onClickLogin} />}
        </form>
      </div>
    </Modal>
  )
}

export default AuthModal