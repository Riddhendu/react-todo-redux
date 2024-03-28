import React from 'react'
import { useSelector } from 'react-redux'

export const Dummyapp = () => {
    let data = useSelector((state)=>console.log('state=====>',state))
  return (
    <div>{data}</div>
  )
}
