'use client'
import { Button, Input, Text } from '@/components/atoms';
import React, { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    email: '',
  })
  const cookie = ('; ' + document.cookie).split(`; auth=`).pop()!.split(';')[0]
  const user = cookie ? JSON.parse(cookie) : null;
  console.log("USER", user);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json()).then((data) => {
      console.log("asdsa", data);

    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        <Input name='email' placeholder='Email' onChange={handleChange} />
        <br />
        <Input name='password' placeholder='Password' onChange={handleChange} />

        <Button>
          <Text text='SUBMIT' />
        </Button>
      </form>

      <Button onClick={() => {
        fetch('http://localhost:8080/product', {
          method: 'GET',
          headers: {
            'Authorization': 'Basic ' + btoa('user:user')
          }
        }).then(res => res.json()).then((data) => {
          console.log("DADA", data);
        })
      }}>
        <Text text='FETCH PRODUCT' />
      </Button>
    </div>
  )
}

export default page