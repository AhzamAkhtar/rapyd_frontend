import React, { useState } from 'react'
import {useRouter} from 'next/router'

const Payment = () => {
  const router = useRouter()
  console.log(router.query)

  const {amount} = router.query
  
  const data = [
    {
      amount : amount
    }
  ]
  {/*const {
    query : {amount}
  } = router

  const props = {
    amount
  }*/}
  return (
    <div>
    <h1>{amount}</h1>
    </div>
  )
}

export default Payment