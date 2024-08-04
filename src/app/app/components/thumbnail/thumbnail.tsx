import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './thumbnail.module.scss';
export default function Thumbnail({image,href,title,id,hoveredId,setHoveredThumbnail}:{image:string,href:string,title:string,id:string,hoveredId:string|undefined,setHoveredThumbnail:(id:string|undefined)=>void}) {
    return (
    <Link href={href}>
        <div onMouseLeave={()=>{setHoveredThumbnail(undefined)}} onMouseOver={()=>{setHoveredThumbnail(id)}} className={`flex w-fit h-fit flex-col p-2 items-center ${styles.thumbnail} ${hoveredId && hoveredId != id ? styles.smallThumbnail : ''}`}>
            <Image className='childImage' width={250} height={200} src={image} alt='Thumbnail Image'/>
            <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
    </Link>
  )
}
