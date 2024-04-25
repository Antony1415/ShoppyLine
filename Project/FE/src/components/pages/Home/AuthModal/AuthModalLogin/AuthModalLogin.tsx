'use client'
import React from 'react'
import { Button, Icon, Input, Text } from '@/components/atoms'

interface AuthModalLoginProps {
  onSubmitLogin: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClickRegister: () => void
}

const AuthModalLogin = ({ onSubmitLogin, onClickRegister }: AuthModalLoginProps): React.JSX.Element => {
  return (
    <>
      <Text type='h1' text='Sign In' className='text-[34px]' />
      <Text type='h3' text="Welcome to our E-Commerce Platform." className='text-[14px]' />

      <Input className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-auto' placeholder='Email' />
      <Input className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-3' placeholder='Password' type='password' />

      <Button className='mt-5 bg-[#5BBCFF] border-none' onClick={onSubmitLogin}>
        <Text type='h1' text='Sign In' />
      </Button>

      <div className='flex items-center justify-center gap-5 my-3'>
        <Icon size={{ width: 40, height: 40 }} alt='' src={'/assets/svg/google.svg'} />
        <Icon size={{ width: 35, height: 35 }} alt='' src={'/assets/svg/facebook.svg'} />
      </div>

      <div className='flex justify-between mt-2 mb-7'>
        <Text type='h3' text="Don't have an account? " className='text-[14px] text-[#B4B4B3]' />
        <Text type='a' text="Register" className='text-[14px] text-blue-600 cursor-pointer' onClick={onClickRegister} />
      </div>
    </>
  )
}

export default AuthModalLogin