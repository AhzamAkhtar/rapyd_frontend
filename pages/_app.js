import { useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const [user , setuser] = useState()
  const router = useRouter()
  useEffect(() => {
  const token = localStorage.getItem("token")
  if(token){
    setuser(true)
  }
  else(
    setuser(false)
  )
  }, [router.query])
  
  return(
    <>
    <Navbar user={user}/>
   <Component {...pageProps} />
   </>
  )
}

export default MyApp
