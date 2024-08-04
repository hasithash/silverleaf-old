import React from 'react'
import styles from './circle_avatar.module.scss'

export default function CircleAvatar( {radius,image} : {radius:number,image?:string}   ) {
  return (
    <div className='w-fit h-fit'>
        <div style={{width:radius*2,height:radius*2,borderRadius:radius,backgroundImage: image ? `url('${image}')` : 'url(\'/app/no-profile-picture.png\')'}} className={`${styles.circleAvatar}`}>
        </div>
    </div>
  )
}
