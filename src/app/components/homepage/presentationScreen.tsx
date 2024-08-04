'use client'
import React, { useState, useEffect } from 'react';
import './style.css'
const PresentationScreen = () => {
  const [isVisible, setIsVisible] = useState(true); // Initially visible
  const [appear,setAppear] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false); // Hide after a delay
    }, 1000); // Adjust delay as needed (in milliseconds)

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);
  useEffect(()=>{
    if(!isVisible){
        setTimeout(() => {
            setAppear(false)
        }, 700);
    }
  },[isVisible])
  return (
     appear ? (
      <div className={`w-full h-full bg-[rgb(26,24,54)] absolute top-0 left-0 opacity-transition opacity-100 duration-500 ease-out 
      ${!isVisible ? 'goAway' : ''}`}>
        {/* Your presentation content here */}
      </div>
    ) : null
  );
};

export default PresentationScreen;
