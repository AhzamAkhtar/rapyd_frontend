import React from 'react'
import { useRouter } from 'next/router'
const Invoice = () => {
  const router = useRouter()

  const {transactionId} = router.query
  return (
    <div>{transactionId}</div>
  )
}

export default Invoice