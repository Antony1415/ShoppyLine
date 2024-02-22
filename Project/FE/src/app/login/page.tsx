'use client'
import React, { useState } from 'react'

const page = () => {
  const [test, setTest] = useState('')
  console.log("TEST", test);

  return (
    <div>
      <input placeholder='asdda' onChange={(e) => {
        const value = e.target.value
        if (isNaN(parseInt(value))) return
        setTest(value.substring(value.length - 1))
      }} />
    </div>
  )
}

export default page