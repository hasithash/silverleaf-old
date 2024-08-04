import React from 'react'
import styles from './testimonial.module.scss'
import { ChatCircleDots } from './icons/dialog'
export default function Testimonial(props:{testimonial:{name:string,message:string,country:string,rating:string}}) {
  return (
    <div className={`shadow rounded-md backdrop-blur-md flex flex-col items-center ${styles.testimonial}`}>
      <div className='w-full flex flex-row items-center p-2 justify-start'>
        <span className='text-3xl'>
          <ChatCircleDots/>
        </span>
        <h1 className='text-lg font-bold'>{props.testimonial.name}</h1>
        <img width={30} className='pl-1' src={`https://flagsapi.com/${props.testimonial.country}/flat/64.png`}></img>
      </div>
      <p className='text-center p-1'>
        {props.testimonial.message}
      </p>
      <p className={`font-extrabold ${styles[props.testimonial.rating.toLowerCase()]}`}>{props.testimonial.rating}</p>
    </div>
  )
}
