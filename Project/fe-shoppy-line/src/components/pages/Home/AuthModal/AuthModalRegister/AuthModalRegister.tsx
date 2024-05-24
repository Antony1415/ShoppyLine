'use client'
import React, { useState } from 'react'
import { Button, Icon, Input, Text } from '@/components/atoms'

interface AuthModalRegisterProps {
  onClickLogin: () => void
}

const AuthModalRegister = ({ onClickLogin }: AuthModalRegisterProps): React.JSX.Element => {
  const [registerForm, setRegisterForm] = useState({
    full_name: '',
    email: '',
    password: ''
  })

  const onSubmitRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch('http://localhost:8080/register', {
      method: 'POST',
      body: JSON.stringify(registerForm),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json()).then((data) => {
      console.log("asdsa", data);
    })
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Text type='h1' text='Sign Up' className='text-[34px]' />
      <Text type='h3' text='Join with us and get all the items you want.' className='text-[14px]' />

      <Input name='full_name' className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-auto' placeholder='Nama Lengkap' onChange={onChangeInput} />
      <Input name='email' className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-3' placeholder='Email' onChange={onChangeInput} />
      <Input name='password' className='!outline-blue-500/50 py-3 border-[#B4B4B3] bg-[#F1F6F5] mt-3' placeholder='Password' type='password' onChange={onChangeInput} />

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