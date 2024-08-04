"use client";
import React, { useEffect, useState } from 'react'
import { Header } from './header'
import Footer from './footer'
import Main from './main'
import Navbar from './navbar/navbar'
export default function Foreground() {
  const [client,setClient] = useState(false)
  useEffect(()=>{
    setClient(true)
  },[])
  return (
      <div className='absolute top-0 left-0 w-full h-full text-white overflow-y-scroll flex flex-col items-center'>
            <Navbar invisible/>
            <Header/>
            <Main/>
            <Footer/>
      </div>

  )
}