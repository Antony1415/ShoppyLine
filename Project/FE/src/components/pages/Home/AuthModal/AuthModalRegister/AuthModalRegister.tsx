'use client'
import React from 'react'
import { Button, Icon, Input, Text } from '@/components/atoms'

interface AuthModalRegisterProps {
  onSubmitRegister: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClickLogin: () => void
}

const AuthModalRegister = ({onSubmitRegister, onClickLogin}: AuthModalRegisterProps): React.JSX.Element => {
  return (
    <>
      <Text type='h1' text='Sign Up' className='text-[34px]' />
      <Text type='h3' text='Join with us and get all the items you want.' className='text-[14px]' />

      <Input className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-auto' placeholder='Nama Lengkap' />
      <Input className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-3' placeholder='Email' />
      <Input className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-3' placeholder='Password' type='password' />

      <Button className='mt-5 bg-[#5BBCFF] border-none' onClick={onSubmitRegister}>
        <Text type='h1' text='Register' />
      </Button>

      <div className='flex items-center justify-center gap-5 my-3'>
        <Icon size={{ width: 40, height: 40 }} alt='' src={'/assets/svg/google.svg'} />
        <Icon size={{ width: 35, height: 35 }} alt='' src={'/assets/svg/facebook.svg'} />
      </div>

      <div className='flex justify-between'>
        <Text type='h3' text="Already have an account? " className='text-[14px] text-[#B4B4B3]' />
        <Text type='a' text="Login" className='text-[14px] text-blue-700 cursor-pointer' onClick={onClickLogin} />
      </div>
    </>
  )
}

export default AuthModalRegister