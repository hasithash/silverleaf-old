"use client"
import React, { useEffect, useState } from 'react'

export default function RenderIfClient({children}:{children:React.ReactNode}) {
  const [client,setClient] = useState(false);
  useEffect(()=>{
    setClient(true);
  },[])
  return (
    <>
        {client ? children : null}
    </>
  );
}
